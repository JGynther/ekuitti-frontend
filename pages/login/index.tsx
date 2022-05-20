import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "@components/LoginForm";
import { useLogin } from "@utils/auth";

const Login: NextPage = () => {
  useLogin();
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </div>
  );
};

export default Login;
