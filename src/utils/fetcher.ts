import { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = async (
  input: RequestInfo,
  init?: RequestInit
) => {
  const res = await fetch(input, init);
  return await res.json();
};

const fetcherCookies: Fetcher<any, string> = async (
  input: RequestInfo,
  init?: RequestInit
) => {
  const res = await fetch(input, {
    credentials: "include",
    ...init,
  });
  return await res.json();
};

export default fetcher;
export { fetcherCookies };
