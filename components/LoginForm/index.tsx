import Button from "@components/Button";
import usePost from "@utils/usePost";
import { PostRequest } from "@typings/usePost";
import { useEffect, useState } from "react";

const LoginForm: React.FC = ({ children }) => {

  const initialPostRequest: PostRequest = {
    url: "",
    body: {}
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { response, setRequest } = usePost(initialPostRequest)

  const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  useEffect(() => {
    console.log(response)
  }, [response]);

  const useLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const postRequest: PostRequest = {
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      body: {
        username: username,
        password: password
      }
    }
    
    setRequest(postRequest)

    setUsername('')
    setPassword('')
  }
  
  return (
    <div>
      <form onSubmit={useLogin}>
        <div className="py-2">
          Käyttäjänimi
          <input
            id='username'
            type="text"
            value={username}
            name="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="py-2">
          Salasana
          <input
            id='password'
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