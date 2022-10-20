import { AiOutlineGif } from "react-icons/ai";
import { BiCalendar, BiPoll } from "react-icons/bi";
import { HiEmojiHappy, HiLocationMarker, HiPhotograph } from "react-icons/hi";
import Img from "../public/user.jpg";
import Image from "next/image";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
export const InputFeed = ({reload,setReload}) => {
  const user = supabase.auth.getUser();
  // const[user,setUser]=useState(null);
  // const getUser =async()=>{
  //   setUser(user.data.user);
  // }
  // useEffect(()=>{
  //   getUser();
  // },[])
  console.log("input Feed ", user);
  const [tweet, setTweet] = useState("");
  const[loading,setLoading]=useState(false);
  const sendTweet = async (e) => {
    // if (loading) return;
    // setLoading(true);
    e.preventDefault();
    const { data, error } = await supabase.from("tweets").insert({
      body: tweet,
      profile_id: user.id,

      // profile_id:'fcf1856f-953c-440e-9496-a34e4ecb2450',
      // id:uuidv4()
    });
    console.log("text", data, error);
    setReload((prev)=>!prev)
    setTweet('');
  };
  return (
    <div className="flex border-b border-gray-600 p-3  space-x-3">
      <Image
        // src={
        //   user ? Img :"https://links.papareact.com/gll"
        // }
        src="/user.jpg"
        alt="image not found "
        height={50}
        width={50}
        layout="fixed"
        className="hover:brightness-95 rounded-full cursor-pointer "
      />
      <div className="w-full divide-y divide-gray-600">
        <div>
          <textarea
            rows="2"
            className="w-full bg-black resize-none border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-12 text-gray-700"
            placeholder="what's happening ?"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <div className=" flex items-center justify-between pt-2.5">
          <div className="flex ">
            <HiPhotograph className="h-9 w-9 hover:rounded-full hover:bg-gray-600 p-2 text-sky-500" />
            <AiOutlineGif className="h-9 w-9 hover:rounded-full hover:bg-gray-600 p-2 text-sky-500" />
            <BiPoll className=" h-9 w-9 hover:rounded-full hover:bg-gray-600 p-2 text-sky-500" />
            <HiEmojiHappy className="h-9 w-9 hover:rounded-full hover:bg-gray-600 p-2 text-sky-500" />
            <BiCalendar className="h-9 w-9 hover:rounded-full hover:bg-gray-600 p-2 text-sky-500" />
            <HiLocationMarker className="h-9 w-9 hover:rounded-full hover:bg-gray-600 p-2 text-sky-500" />
          </div>

          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
            // disabled
            onClick={sendTweet}
            // disabled={!input.trim()}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
