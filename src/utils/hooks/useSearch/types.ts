type SearchProps = { initialQuery?: string } & (
  | { data: string[] | undefined; key?: undefined }
  | { data: Record<string, any>[] | undefined; key: string }
);

type MetaData = {
  resultsSize: number | undefined;
  size: number | undefined;
  time: string | undefined;
};

export type { SearchProps, MetaData };
