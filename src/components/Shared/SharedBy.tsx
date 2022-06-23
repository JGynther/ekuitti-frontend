import { useTokenRequest } from "@utils/hooks";
import ReceiptInfo from "../Receipts/ReceiptInfo";
import type { Receipts } from "@typings/hooks/useReceipts";

const SharedBy: React.FC<any> = ({ eaddressid }) => {
  const { data, isError } = useTokenRequest<Receipts>(
    `/receipts/shared/${eaddressid}`
  );
  if (isError) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-8 pt-6 pb-4 text-subtitle font-bold">
        Osoitteesta {eaddressid} jaetut kuitit
      </div>
      <div className="px-10 overflow-y-scroll h-[calc(100vh-290px)]">
        {data?.map((receipt, index) => (
          <ReceiptInfo key={index} receipt={receipt} />
        ))}
      </div>
    </div>
  );
};

export default SharedBy;
