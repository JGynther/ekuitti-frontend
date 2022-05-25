import Button from "@components/Button";
import { PostRequest } from "@typings/usePost";
import { useState } from "react";
import setToken from "@utils/auth/setToken";
import { useAuth, usePost } from "@utils/hooks";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const useLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postRequest: PostRequest = {
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      body: {
        username: username,
        password: password,
      },
    };

    setRequest(postRequest);

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={useLogin}>
        {isError && <span>Virheellinen tunnus</span>}
        <div className="py-2">
          Käyttäjänimi
          <input
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="py-2">
          Salasana
          <input
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="py-2">
          <Button type="submit">Kirjaudu</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
