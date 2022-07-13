import { useReceiptsProcessed } from "@utils/hooks/useReceipts";
import { useSearch } from "@utils/hooks";
import SearchBar from "@components/Search/SearchBar";
import Results from "@components/Search/Results";
import Result from "@components/Search/Result";
import MetaInfo from "@components/Search/MetaInfo";

const Search: React.FC = () => {
  const { processed, data } = useReceiptsProcessed();
  const { result, setQuery, meta, query } = useSearch({
    data: processed,
    key: "text",
    config: {
      threshold: 0.72, // A good value is ~ 0.65-0.75, empirically 0.72 seems good for our data
    },
  });
  return (
    <SearchBar setQuery={setQuery}>
      <MetaInfo meta={meta} />
      <Results>
        {query &&
          result?.map((thing, index) => (
            <Result
              key={index}
              string={thing.string}
              query={query}
              id={thing.meta.id}
              data={data}
            />
          ))}
      </Results>
    </SearchBar>
  );
};

export default Search;
