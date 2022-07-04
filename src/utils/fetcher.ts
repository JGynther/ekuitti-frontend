import { Fetcher } from "swr";
import { createError } from "@utils/errors";

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

  if (res.status === 401) throw createError(401, "Unauthorized");

  return await res.json();
};

export default fetcher;
export { fetcherCookies };
