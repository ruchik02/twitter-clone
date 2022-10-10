import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/SupabaseClient";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

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
    {/* sidebar  component */}
      <Sidebar />
      {/* Feed component  */}
      <Feed/>
    </>
  );
};

export default Dashboard;
