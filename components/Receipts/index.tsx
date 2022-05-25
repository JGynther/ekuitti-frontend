import { useReceipts } from "@utils/hooks";

const Receipts: React.FC = () => {
  const { data, isLoading, isError } = useReceipts();
  if (isError) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((receipt, index) => (
        <pre key={index}>{JSON.stringify(receipt, null, 2)}</pre>
      ))}
    </div>
  );
};

export default Receipts;
