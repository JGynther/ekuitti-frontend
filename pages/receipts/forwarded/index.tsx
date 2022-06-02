import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Forwarded from "@components/Forwarded";

const ReceiptsForwardedPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <Navigation />
      <Forwarded />
    </>
  );
};

export default ReceiptsForwardedPage;