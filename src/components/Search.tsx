import { useReceiptsProcessed } from "@utils/hooks/useReceipts";
import { useSearch } from "@utils/hooks";

const Search: React.FC = () => {
  const data = useReceiptsProcessed();
  const { result, setQuery, meta } = useSearch({
    data: data,
    key: "text",
    config: {
      threshold: 0.65, // A good value is ~ 0.65-0.70
    },
  });
  return (
    <>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {result && (
        <div className="absolute bg-grey z-50 p-2 space-y-2">
          {meta && (
            <div>
              <div>
                {meta.resultsSize} matches / {meta.size} in {meta.time} ms
              </div>
            </div>
          )}
          {result.map((result, index) => (
            <div key={index}>{JSON.stringify(result)}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
