import useSWR from "swr";
import fetcher from "@utils/fetcher";
import type { Receipts } from "./types";

const useReceipts = () => {
  const { data, error } = useSWR<Receipts>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/receipts`,
    fetcher
  );
  return {
    receipts: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useReceipts;
