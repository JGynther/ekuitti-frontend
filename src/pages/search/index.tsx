import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Search from "@components/Search";

const SendPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eKuitti</title>
      </Head>
      <Header />
      <Navigation />
      <Search />
    </div>
  );
};

// Export at the end of the file.
export default SendPage;
