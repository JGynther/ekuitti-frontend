import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "@components/Dashboard";
import Content from "@components/Content";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import Header from "@components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <Content
        sidebar={<Sidebar />}
        navigation={<Navigation />}
        footer={<Footer />}
      >
        <Dashboard />
      </Content>
    </div>
  );
};

export default Home;
