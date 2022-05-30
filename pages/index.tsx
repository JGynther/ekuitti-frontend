import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "@components/Dashboard";
import Header from "@components/Header";
import Navigation from "@components/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <Navigation />
      <Dashboard />
    </>
  );
};

export default Home;
