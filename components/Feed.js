import { HiOutlineSparkles } from "react-icons/hi";
import { InputFeed } from "./InputFeed";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
const Feed = () => {
  const router = useRouter();
  const [tweets, setTweets] = useState([]);
  const user = supabase.auth.getUser();
  const [reload, setReload] = useState(false);
  console.log("Feed section", user);
  useEffect(() => {
    (async () => {
      const { data: tweets, error } = await supabase
        .from("tweets")
        .select("*, profiles:profile_id (name,username)")
        .order("created_at", { ascending: false });

      setTweets(tweets);
      console.log(tweets, error);
    })();
  }, [reload]);
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  // const posts = [
  //   {
  //     id: "1",
  //     name: "Ruchika sharma",
  //     username: "RuchikaRuchikas",
  //     userImg: "/user.jpg",
  //     img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  //     text: "nice view!",
  //     timestamp: "1h",
  //   },
  //   {
  //     id: "2",
  //     name: "Ruchika sharma",
  //     username: "RuchikaRuchikas",
  //     userImg: "/user.jpg",
  //     img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
  //     text: "wow!",
  //     timestamp: "Oct 6",
  //   },
  //   {
  //     id: "3",
  //     name: "Ruchika sharma",
  //     username: "RuchikaRuchikas",
  //     userImg: "/user.jpg",
  //     img: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //     text: "nice!",
  //     timestamp: "Sep 21",
  //   },
  // ];
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
