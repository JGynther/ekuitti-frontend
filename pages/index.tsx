import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "@components/Wrapper";
import Dashboard from "@components/Dashboard";
import Content from "@components/Content";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import Receipts from "@components/Receipts";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <Content
        sidebar={<Sidebar />}
        navigation={<Navigation />}
        footer={<Footer />}
      >
        <Dashboard />
        <Receipts />
        <Temp />
      </Content>
    </Wrapper>
  );
};

// A filler component for dummy content
const Temp: React.FC = () => {
  return (
    <div className="divide-y divide-neutral-700">
      {["lorem", "ipsum", "dolor", "sit", "amet", "jotain", "testi"].map(
        (thing) => (
          <div key={thing} className="px-4 py-10">
            {thing}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
