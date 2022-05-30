import Button from "@components/Button";
import { PostRequest } from "@typings/usePost";
import React, { ChangeEvent, useState } from "react";
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

type InputProps = {
  id: string;
  type: string;
  form: {
    state: Record<string, unknown>;
    setForm: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  };
};

const Input: React.FC<InputProps> = ({ id, type, form, children }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const temp = { ...form.state };
    temp[id] = event.target.value;
    form.setForm(temp);
  };
  return (
    <div className="flex justify-between text-submenu">
      <label htmlFor={id} className="">
        {children}
      </label>
      <input
        id={id}
        type={type}
        onChange={handleChange}
        className="border border-grey bg-grey rounded px-2"
      />
    </div>
  );
};

export default LoginForm;
