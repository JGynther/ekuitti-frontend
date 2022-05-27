import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";

const ReceiptsPage: NextPage = () => {
  return (
    <div>
      {/* Each page should have or inherit a head component. */}
      <Head>
        <title>Receipts</title>
      </Head>
      <Header />
      <Navigation />
    </div>
  );
};

export default ReceiptsPage;