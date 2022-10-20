import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/SupabaseClient";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Widget } from "../components/Widget";
// import Heading from "../components/Head";
import Head from "next/head";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState();

  const handleLogOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      // console.log(profile);
      if (user) {
        setUser(user);
      } else {
        router.push("/signin");
      }
    };

    getProfile();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      {/* max-w-7xl */}
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
