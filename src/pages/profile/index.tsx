import type { NextPage } from "next";
import Head from "next/head";
import TopPanel from "@components/TopPanel";

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eKuitti</title>
      </Head>
      <TopPanel />
    </div>
  );
};

// Export at the end of the file.
export default ProfilePage;
