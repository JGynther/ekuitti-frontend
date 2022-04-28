import { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = async (
  input: RequestInfo,
  init?: RequestInit
) => await fetch(input, init).then((r) => r.json());

export default fetcher;
