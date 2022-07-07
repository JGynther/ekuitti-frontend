import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import { useTokenRequest } from "@utils/hooks";

const ProfilePage: NextPage = () => {
  const { data } = useTokenRequest("/users");
  return (
    <div>
      <Head>
        <title>eKuitti</title>
      </Head>
      <Header />
      <Navigation />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Export at the end of the file.
export default ProfilePage;
