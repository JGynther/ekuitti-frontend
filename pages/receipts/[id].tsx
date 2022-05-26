import type { NextPage } from "next";
import Head from "next/head";
import Receipt from "components/Receipt";

const ReceiptPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Receipt</title>
      </Head>
      <Receipt />
    </>
  );
};

export default ReceiptPage;
