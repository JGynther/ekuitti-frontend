import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import { useLogin } from "@utils/hooks";
import Receipts from "@components/Receipts";

const Home: NextPage = () => {
  useLogin();
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <Navigation />
      <Receipts />
    </>
  );
};

export default Home;
