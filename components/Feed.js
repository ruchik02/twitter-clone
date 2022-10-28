import { HiOutlineSparkles } from "react-icons/hi";
import { InputFeed } from "./InputFeed";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
const Feed = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const user = supabase.auth.getUser();
  const [reload, setReload] = useState(false);
  console.log("Feed section", user);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data: tweets, error } = await supabase
          .from("tweet")
          .select("*, profiles:profile_id (name,username)")
          .order("created_at", { ascending: false });
        if (error) {
          throw error;
        }
        setTweets(tweets);
        console.log("tweets", tweets, error);
      } catch (error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [reload]);
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <div className="text-white xl:ml-96 border-gray-600 border-l border-r xl:min-w-xl sm:ml-20 flex-grow max-w-xl">
      <div className=" flex sticky top-0 px-2 py-3 justify-between z-50 border-b border-gray-600">
        <h2 className="font-bold text-center cursor-pointer sm:text-xl">
          Home
        </h2>
        <div className="flex items-center justify-center px-0 ml-auto hover:rounded-full hover:bg-gray-600 h-7 w-7 ">
          <HiOutlineSparkles className="h-5 w-5" />
        </div>
      </div>
      <InputFeed reload={reload} setReload={setReload} />
      {tweets?.map((tweet) => (
        <Post key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
