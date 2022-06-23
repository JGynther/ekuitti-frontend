import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "@components/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
