import useSWR from "swr";
import { fetcherCookies as fetcher } from "@utils/fetcher";
import type { Receipt, Receipts } from "@typings/hooks/useReceipts";
import { useEffect, useState } from "react";

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

const processReceipts = (receipts: Receipts) => {
  const processed: { text: string; meta: Record<string, any> }[] = [];

  receipts.forEach((receipt) => {
    const meta = {
      id: receipt.id,
    };

    const temp: string[] = [
      receipt.merchant.name,
      new Date(receipt.receiptTimeStamp).toLocaleDateString("fi-FI"),
    ];

    receipt.products.forEach((product) => {
      temp.push(product.name);
    });

    temp.forEach((item) => {
      processed.push({ text: item, meta: meta });
    });
  });

  return processed;
};

const useReceiptsProcessed = () => {
  const { data } = useReceipts();
  const [processed, setProcessed] =
    useState<{ text: string; meta: Record<string, any> }[]>();

  useEffect(() => {
    if (data) {
      const processed = processReceipts(data);
      setProcessed(processed);
    }
  }, [data]);

  return { processed, data };
};

export default useReceipts;
export { useReceiptsProcessed };
