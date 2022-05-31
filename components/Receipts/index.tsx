import { useReceipts } from "@utils/hooks";
import ReceiptInfo from "./ReceiptInfo";

const Receipts: React.FC = () => {
  const { data, isError } = useReceipts();
  if (isError) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-8 pt-6 pb-4 text-subtitle font-bold">Kaikki kuitit</div>
      <div className="px-10">
        {data?.map((receipt, index) => (
          <ReceiptInfo key={index} receipt={receipt} />
        ))}
      </div>
    </div>
  );
};

export default Receipts;
