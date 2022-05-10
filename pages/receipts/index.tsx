import type { NextPage } from "next";
import Head from "next/head";
import Receipts from "components/Receipts";

const ReceiptsPage: NextPage = () => {
  return (
    <div>
      {/* Each page should have or inherit a head component. */}
      <Head>
        <title>Receipts</title>
      </Head>
      <Receipts />
    </div>
  );
};

export default ReceiptsPage;