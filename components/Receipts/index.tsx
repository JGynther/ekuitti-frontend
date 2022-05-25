import { useReceipts } from "@utils/hooks";

const Receipts: React.FC = () => {
  const { receipts, isError } = useReceipts();
  if (isError) {
    return <div>Error!</div>;
  }

  if (!receipts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {receipts.map((receipt, index) => (
        <pre key={index}>{JSON.stringify(receipt, null, 2)}</pre>
      ))}
    </div>
  );
};

export default Receipts;
