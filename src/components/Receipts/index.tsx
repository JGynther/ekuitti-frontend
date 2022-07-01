import { useReceipts } from "@utils/hooks";
import { useTriggerAuthCheck } from "@utils/auth";
import ReceiptInfo from "./ReceiptInfo";

const Receipts: React.FC = () => {
  const { data, isError } = useReceipts();
  const trigger = useTriggerAuthCheck();

  if (isError) {
    trigger(); // TODO:
    return null;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-8 pt-6 pb-4 text-subtitle font-bold">
        Kaikki kuitit
      </div>
      <div className="px-10 overflow-y-scroll h-[calc(100vh-290px)]">
        {data.map((receipt, index) => (
          <ReceiptInfo key={index} receipt={receipt} />
        ))}
      </div>
    </div>
  );
};

export default Receipts;
