import Button from "@components/Button";
import Input from "./Input";
import { useState } from "react";
import setToken from "@utils/auth/setToken";
import { useAuth, usePost } from "@utils/hooks";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<Record<string, unknown>>({});
  const { setAuth } = useAuth();

  const handleUser = (res: {
    ok: boolean;
    token: string;
    username: string;
    name: string;
  }) => {
    if (res) {
      setToken(res.token);
      setAuth({
        user: { username: res.username, name: res.name },
        authenticated: true,
      });
    }
  };

  // usePost hook with callback
  const { isError, setRequest } = usePost({
    callback: handleUser,
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
