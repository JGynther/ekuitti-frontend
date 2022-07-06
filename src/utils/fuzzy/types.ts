type Search = {
  query: string;
  threshold?: number;
} & (
  | { data: string[]; key?: undefined }
  | { data: Record<string, any>[]; key: string }
);

type Find = Search & { n?: number };

type Single = { string: string } & (
  | { query: string; isCached?: false }
  | { query: string[]; isCached: true }
);

export type { Search, Find, Single };
