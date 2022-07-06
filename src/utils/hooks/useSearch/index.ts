import type { SearchProps, MetaData } from "@typings/hooks/useSearch";
import { useState, useEffect } from "react";
import fuzzy from "@utils/fuzzy";

const useSearch = ({ data, key, initialQuery, config }: SearchProps) => {
  const [query, setQuery] = useState<string | undefined>(initialQuery);
  const [_config] = useState(config);
  const [result, setResult] = useState<any[] | undefined>();
  const [meta, setMeta] = useState<MetaData>();

  useEffect(() => {
    if (data && query) {
      const start = performance.now();

      const results = fuzzy.find({
        data: data as any,
        query,
        key,
        ..._config,
      }); // hacky data as any, types should still be fine
      setResult(results);

      setMeta({
        resultsSize: results.length,
        size: data.length,
        time: (performance.now() - start).toFixed(2),
      });
    }

    if (query === "") {
      setResult(undefined);
    }
  }, [query, data, key, _config]);

  return { result, setQuery, meta };
};

export default useSearch;
