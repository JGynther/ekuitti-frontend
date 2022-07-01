import { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = async (
  input: RequestInfo,
  init?: RequestInit
) => {
  const res = await fetch(input, init);
  return await res.json();
};

type ExtError = Error & { status: number };

const fetcherCookies: Fetcher<any, string> = async (
  input: RequestInfo,
  init?: RequestInit
) => {
  const res = await fetch(input, {
    credentials: "include",
    ...init,
  });

  if (res.status === 401) {
    const error = new Error("Unauthorized") as ExtError;
    error.status = res.status;
    throw error;
  }

  return await res.json();
};

export default fetcher;
export { fetcherCookies };
