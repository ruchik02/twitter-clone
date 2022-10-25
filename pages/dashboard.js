import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Widget } from "../components/Widget";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
// import Heading from "../components/Head";
import Head from "next/head";
const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  const user = useUser();
  return (
    <>
      <div>
        <Head>
          <link
            rel="icon"
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          />
          <title>Home / Twitter </title>
        </Head>
        {/* <Heading/> */}
        <main className="flex min-h-screen mx-auto">
          {/* sidebar  component */}
          <Sidebar />
          {/* Feed component  */}
          <Feed />
          {/* widget component */}
          <Widget />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
