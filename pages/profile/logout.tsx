import type { NextPage } from "next";
import { useLogout } from "@utils/auth";
import { useEffect } from "react";

const LogoutPage: NextPage = () => {
  const logout = useLogout();
  useEffect(() => {
    logout();
  }, [logout]);

  return (<div>moi</div>);
};

// Export at the end of the file.
export default LogoutPage;