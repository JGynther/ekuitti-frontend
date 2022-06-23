import type { NextPage } from "next";
import Head from "next/head";
import AddReceipt from "@components/AddReceipt";
import TopPanel from "@components/TopPanel";

const SendPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eKuitti</title>
      </Head>
      <TopPanel />
      <AddReceipt />
    </div>
  );
};

// Export at the end of the file.
export default SendPage;
