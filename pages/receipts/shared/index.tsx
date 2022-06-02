import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Shared from "@components/Shared";

const ReceiptsSharedPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <Navigation />
      <Shared />
    </>
  );
};

export default ReceiptsSharedPage;