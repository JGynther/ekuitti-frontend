import type { NextPage } from "next";
import Head from "next/head";
import Forwarded from "@components/Forwarded";
import TopPanel from "@components/TopPanel";

const ReceiptsForwardedPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <TopPanel />
      <Forwarded />
    </>
  );
};

export default ReceiptsForwardedPage;
