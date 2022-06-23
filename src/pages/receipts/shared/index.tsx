import type { NextPage } from "next";
import Head from "next/head";
import Shared from "@components/Shared";
import TopPanel from "@components/TopPanel";

const ReceiptsSharedPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <TopPanel />
      <Shared />
    </>
  );
};

export default ReceiptsSharedPage;
