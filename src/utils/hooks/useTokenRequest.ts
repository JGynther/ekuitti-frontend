import useSWR from "swr";
import { fetcherCookies as fetcher } from "@utils/fetcher";

const useTokenRequest = <T>(route: string) => {
  const { data, error } = useSWR<T>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${route}`, // assumes you are using the backend!
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTokenRequest;
