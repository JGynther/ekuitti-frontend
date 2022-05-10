import type { NextPage } from "next";
import Head from "next/head";
import Receipt from "components/Receipt";

const ReceiptPage: NextPage = () => {
  return (
    <div>
      {/* Each page should have or inherit a head component. */}
      <Head>
        <title>Receipt</title>
      </Head>
        <Receipt />
    </div>
  );
};

export default ReceiptPage;
