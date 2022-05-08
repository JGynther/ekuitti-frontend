import type { NextPage } from "next";
import Head from "next/head";
import Receipts from "components/Receipts";

const ReceiptPage: NextPage = ({children}) => {
  return (
    <div>
      {/* Each page should have or inherit a head component. */}
      <Head>
        <title>Receipt</title>
      </Head>
      <Receipts />
    </div>
  );
};

export default ReceiptPage;