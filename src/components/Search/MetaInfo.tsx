import type { MetaData } from "@typings/hooks/useSearch";

const MetaInfo = ({ meta }: { meta: MetaData | undefined }) => {
  if (!meta) return null;
  return (
    <div className="px-2 mt-1 mb-2 text-xs opacity-60 font-mono">
      Osumia {meta.resultsSize} ({meta.size}) ({meta.time} millisekunttia)
    </div>
  );
};

export default MetaInfo;
