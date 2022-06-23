import { createContext, useContext, useState, Context } from "react";
import { Auth, AuthContextProvider } from "@typings/auth";
import { useSafeRouter } from "@utils/hooks";
import { useEffect } from "react";
import setToken, { removeToken, checkToken } from "@utils/auth/setToken";
import { useRouter } from "next/router";

// This avoids typescript thinking authcontext might be undefined
// AuthContext is always defined if AuthProvider is properly used
let AuthContext: Context<AuthContextProvider>;

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

const useLogin = () => {
  const { auth, setAuth } = useAuth();
  const { authenticated } = auth;

  const login = (username: string, name: string, token: string) => {
    setToken(token);
    setAuth({
      user: { username: username, name: name },
      authenticated: true,
    });
  };

  useEffect(() => {
    if (checkToken() && !authenticated) {
      setAuth({
        user: { username: "", name: "" },
        authenticated: true,
      });
    }
  }, [authenticated, setAuth]);

  return login;
};

const useLogout = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  return () => {
    removeToken();
    setAuth({ user: null, authenticated: false });
    router.push("/login");
  };
};

// Hook for handling (client-side) redirect to login on pages that require authentication
// Should not be used directly but via Protected wrapper component
const useProtected = () => {
  const router = useSafeRouter();
  const { authenticated } = useAuth().auth;
  useEffect(() => {
    authenticated
      ? router.pathname === "/login" && router.push("/")
      : router.push("/login");
  }, [router, authenticated]);
  return router.pathname;
};

const Protected: React.FC = ({ children }) => {
  const path = useProtected();
  const user = useUser();
  return <>{(user || path === "/login") && children}</>;
};

export { AuthProvider, useAuth, useUser, useLogin, useLogout, Protected };
