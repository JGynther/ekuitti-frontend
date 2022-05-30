import "global.css";
import type { AppProps } from "next/app";
import { AuthProvider, Protected } from "@utils/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Protected>
        <Component {...pageProps} />
      </Protected>
    </AuthProvider>
  );
}

export default MyApp;
