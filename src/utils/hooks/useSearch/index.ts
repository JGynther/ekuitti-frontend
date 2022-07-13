import type { SearchProps, MetaData } from "@typings/hooks/useSearch";
import { useState, useEffect } from "react";
import fuzzy from "@utils/fuzzy";

const useSearch = ({ data, key, initialQuery, config }: SearchProps) => {
  const [query, setQuery] = useState<string | undefined>(initialQuery);
  const [_config] = useState(config); // Needed to avoid infinite loop
  const [result, setResult] = useState<any[] | undefined>();
  const [meta, setMeta] = useState<MetaData>();

  useEffect(() => {
    if (data && query) {
      const start = performance.now();

      const results = fuzzy.find({
        data: data as any, // hacky data as any, types should still be fine
        query,
        key,
        ..._config,
      });
      setResult(results);

      setMeta({
        resultsSize: results.length,
        size: data.length,
        time: (performance.now() - start).toFixed(2),
      });
    }

    if (query === "") {
      setResult(undefined);
      setMeta(undefined);
    }
  }, [query, data, key, _config]);

  return { result, setQuery, meta, query };
};

export default useSearch;
