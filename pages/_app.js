import "../styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { SessionProvider } from "next-auth/react";
import { supabase } from "../utils/supabaseClient";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
     {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
    {/* // </SessionProvider> */}
    </SessionContextProvider>
  );
}

export default MyApp;
