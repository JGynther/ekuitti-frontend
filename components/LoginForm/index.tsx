import Button from "@components/Button";
import usePost from "@utils/usePost";
import { PostRequest } from "@typings/usePost";
import { useState } from "react";
import setToken from "@utils/auth/setToken";
import { useAuth } from "@utils/auth";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const handleUser = (res: {
    token: string;
    username: string;
    name: string;
  }) => {
    setToken(res.token);
    auth?.setAuth({
      user: { username: res.username, name: res.name },
      authenticated: true,
    });
  };

  // usePost hook with callback
  const { response, setRequest } = usePost({
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
      {/* NOTE: Temporary */}
      <div>{JSON.stringify(auth?.auth, null, 2)}</div>
    </div>
  );
};

export default LoginForm;
