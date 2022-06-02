import Input from "./Input";
import { useState } from "react";
import { useLogin, usePost } from "@utils/hooks";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

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
    <div className="flex flex-col items-center">
      <div className="flex items-center hover:cursor-pointer mt-5">
          <AccountBalanceWalletIcon
            className="text-orange mr-2"
            style={{ fontSize: 75 }}
          />
          <div className="text-black titlefont font-semibold text-title">
            eKuitti
          </div>
        </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col border border-grey rounded p-10 shadow-lg max-w-md w-full"
        >
          <div className="m-auto text-subtitle font-bold">Kirjaudu sisään</div>
          {isError && 
            <div className="text-orange font-bold m-auto mt-[15px]">Virheellinen tunnus</div>
          }
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
          <button className="rounded bg-blue text-white p-2 mt-[40px] font-bold">Kirjaudu sisään</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
