type User = {
  username: string;
  name: string;
};

type Auth = {
  user: null | User;
  authenticated: boolean;
};

type AuthContextProvider = {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
};

export type { User, Auth, AuthContextProvider };
