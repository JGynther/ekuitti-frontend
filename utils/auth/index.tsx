import { createContext, useContext, useState } from "react";
import { User, Auth, AuthContextProvider } from "@typings/auth";

const AuthContext = createContext<undefined | AuthContextProvider>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    user: null,
    authenticated: false,
  });

  const defaultValue = {
    auth: auth,
    setAuth: setAuth,
  };

  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const useUser = () => useAuth()?.auth.user;

export { AuthProvider, useAuth, useUser };
