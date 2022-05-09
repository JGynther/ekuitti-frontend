import type { NextPage } from "next";
import Head from "next/head";
import Receipts from "components/Receipts";
import { useRouter } from "next/router";
import useRequest from "@utils/useRequest";

const ReceiptPage: NextPage = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useRequest(`/receipts/${id}`);
  console.log(id, data);
  return (
    <div>
      {/* Each page should have or inherit a head component. */}
      <Head>
        <title>Receipt</title>
      </Head>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ReceiptPage;
