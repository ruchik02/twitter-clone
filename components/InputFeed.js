import { AiOutlineGif } from "react-icons/ai";
import { BiCalendar, BiPoll } from "react-icons/bi";
import { HiEmojiHappy, HiLocationMarker, HiPhotograph } from "react-icons/hi";
import Img from "../public/user.jpg";
import Image from "next/image";
export const InputFeed = () => {
  return (
    <div className="flex border-gray-200 p-3  space-x-3">
      <Image
        src={Img}
        alt="image not found "
        layout="fixed"
        className="h-11 w-11 hover:brightness-95 rounded-full cursor-pointer "
      ></Image>
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            rows="2"
            className="w-full bg-black resize-none border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-12 text-white"
            placeholder="what's happening ?"
          ></textarea>
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
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
