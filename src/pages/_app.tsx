import "../global.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { AuthProvider, Protected, useTriggerAuthCheck } from "@utils/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ConfigLayer>
        <Protected>
          <Component {...pageProps} />
        </Protected>
      </ConfigLayer>
    </AuthProvider>
  );
}

// Global config "layer" to have configuration inside authentication context
const ConfigLayer: React.FC = ({ children }) => {
  const triggerAuthCheck = useTriggerAuthCheck();
  return (
    <>
      <SWRConfig
        value={{
          onError: (error, _key) => {
            // Globally trigger an authentication status check on 401 errors
            if (error.status === 401) {
              triggerAuthCheck();
            }
          },
        }}
      >
        {children}
      </SWRConfig>
    </>
  );
};

export default MyApp;
