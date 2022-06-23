import type { NextPage } from "next";
import Head from "next/head";
import Receipts from "@components/Receipts";
import TopPanel from "@components/TopPanel";

const ReceiptsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <TopPanel />
      <Receipts />
    </>
  );
};

export default ReceiptsPage;
