import useSWR from "swr";
import { fetcherCookies as fetcher } from "@utils/fetcher";
import type { Receipt, Receipts } from "@typings/useReceipts";

const useShared = <T extends string | undefined = undefined>(id?: T) => {
  type returnType = T extends string ? Receipt : Receipts;

  const segment = id ? `/${id}` : "";

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/receipts/shared${segment}`;

  const { data, error } = useSWR<returnType>(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useShared;
