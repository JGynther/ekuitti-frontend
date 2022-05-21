import { createContext, useContext, useState } from "react";
import { Auth, AuthContextProvider } from "@typings/auth";
import useSafeRouter from "@utils/useSafeRouter";
import { useEffect } from "react";

// This avoids typescript thinking authcontext might be undefined
// AuthContext is always defined if AuthProvider is properly used
let AuthContext: React.Context<AuthContextProvider>;

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    user: null,
    authenticated: false,
  });

  const defaultValue = {
    auth: auth,
    setAuth: setAuth,
  };

  // Default value is supplied twice but no workaround for now
  AuthContext = createContext<AuthContextProvider>(defaultValue);

  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const useUser = () => useAuth().auth.user;

// Hook for handling (client-side) redirect to login on pages that require authentication
const useLogin = () => {
  const router = useSafeRouter();
  const { authenticated } = useAuth().auth;
  useEffect(() => {
    authenticated ? router.push("/") : router.push("/login");
  }, [router, authenticated]);
};

export { AuthProvider, useAuth, useUser, useLogin };
