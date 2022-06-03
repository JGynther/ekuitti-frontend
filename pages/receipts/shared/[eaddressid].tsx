import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import SharedBy from "@components/Shared/SharedBy";
import { useRouter } from "next/router";

const SharedByPage: NextPage = () => {
  const router = useRouter();
  const { eaddressid } = router.query;
  return (
    <>
      <Head>
        <title>eKuitti</title>
      </Head>
      <Header />
      <Navigation />
      <SharedBy eaddressid={eaddressid}/>
    </>
  );
};

export default SharedByPage;