import Button from "@components/Button";
import Input from "./Input";
import { useState } from "react";
import { useLogin, usePost } from "@utils/hooks";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<Record<string, unknown>>({});

  const login = useLogin();
  const loginCallback = (res: {
    username: string;
    name: string;
    token: string;
  }) => {
    const { username, name, token } = res;
    login(username, name, token);
  };

  // usePost hook with callback
  const { isError, setRequest } = usePost({
    callback: loginCallback,
  });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequest({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      body: {
        username: form.username,
        password: form.password,
      },
    });
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-5 border border-grey rounded p-10 shadow-lg max-w-md w-full"
      >
        {isError && <span>Virheellinen tunnus</span>}
        <Input
          id="username"
          type="username"
          form={{ state: form, setForm: setForm }}
        >
          Käyttäjänimi
        </Input>
        <Input
          id="password"
          type="password"
          form={{ state: form, setForm: setForm }}
        >
          Salasana
        </Input>
        <Button>Kirjaudu sisään</Button>
      </form>
    </div>
  );
};

export default LoginForm;
