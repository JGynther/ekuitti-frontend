type SearchProps = {
  initialQuery?: string;
  config?: { threshold?: number; n?: number };
} & (
  | { data: string[] | undefined; key?: undefined }
  | { data: Record<string, any>[] | undefined; key: string }
);

type MetaData = {
  resultsSize: number | undefined;
  size: number | undefined;
  time: string | undefined;
};

export type { SearchProps, MetaData };
