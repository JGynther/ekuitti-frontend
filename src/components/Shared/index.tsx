import { useTokenRequest } from "@utils/hooks";
import SharedInfo from "../Shared/SharedInfo";
import type { Receipts } from "@typings/hooks/useReceipts";

const Shared: React.FC = () => {
  const { data, isError } = useTokenRequest<Receipts>("/receipts/shared");
  if (isError) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-8 pt-6 pb-4 text-subtitle font-bold">
        Jaetut kuitit käyttäjäkohtaisesti
      </div>
      <div className="px-10 overflow-y-scroll h-[calc(100vh-290px)]">
        {data?.map((shared, index) => (
          <SharedInfo key={index} shared={shared} />
        ))}
      </div>
    </div>
  );
};

export default Shared;
