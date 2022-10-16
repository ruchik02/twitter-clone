import { useEffect, useState } from "react";
import { supabase } from "../utils/SupabaseClient";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Widget } from "../components/Widget";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const LoginUser = supabase.auth.getUser();
  console.log(LoginUser);
  const handleLogOut = async (e) => {
    e.preventDefault();

    const { data: LoginUser, error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/");
      console.log(LoginUser);
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
      <main className="flex min-h-screen mx-auto">
        {/* sidebar  component */}
        <Sidebar />
        {/* Feed component  */}
        <Feed />
        {/* widget component */}
        <Widget />
      </main>
    </>
  );
};

export default Dashboard;
