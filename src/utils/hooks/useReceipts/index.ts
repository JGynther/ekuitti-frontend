import useSWR from "swr";
import { fetcherCookies as fetcher } from "@utils/fetcher";
import type { Receipt, Receipts } from "@typings/hooks/useReceipts";

const useReceipts = <T extends string | undefined = undefined>(id?: T) => {
  type returnType = T extends string ? Receipt : Receipts;

  const segment = id ? `/${id}` : "";

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/receipts${segment}`;

  const { data, error } = useSWR<returnType>(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useReceipts;
