import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eKuitti</title>
      </Head>
      <Header />
      <Navigation />
    </div>
  );
};

// Export at the end of the file.
export default ProfilePage;