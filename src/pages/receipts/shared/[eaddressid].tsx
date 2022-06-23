import type { NextPage } from "next";
import Head from "next/head";
import SharedBy from "@components/Shared/SharedBy";
import { useRouter } from "next/router";
import TopPanel from "@components/TopPanel";

const SharedByPage: NextPage = () => {
  const router = useRouter();
  const { eaddressid } = router.query;
  return (
    <>
      <Head>
        <title>eKuitti</title>
      </Head>
      <TopPanel />
      <SharedBy eaddressid={eaddressid} />
    </>
  );
};

export default SharedByPage;
