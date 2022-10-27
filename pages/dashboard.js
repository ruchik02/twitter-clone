import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Widget } from "../components/Widget";
import Head from "next/head";
const Dashboard = ({name,username}) => {

  
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
          <Sidebar 
          name={name}
          username={username}
           />
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
