import { useRouter } from "next/router";
import { useRequest } from "@utils/hooks";

const Receipt: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useRequest(`/receipts/${id}`);

  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Receipt;
