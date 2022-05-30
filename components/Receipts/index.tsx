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
      {data.map((receipt, index) => (
        <ReceiptInfo key={index} receipt={receipt} />
      ))}
    </div>
  );
};

export default Receipts;
