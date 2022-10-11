import Image from "next/image";
import { BiComment, BiDotsHorizontal, BiHeart } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsBoxArrowUp,BsTriangle } from "react-icons/bs";
export const Post = ({ post }) => {
  return (
    <>
      <div className="flex cursor-pointer border-b border-gray-300 p-3">
        {/* user image */}
        <Image src={post.userImg} layout="fixed" height={50} width={50} className="rounded-[50%]"></Image>
        {/* right side */}
        <div className="flex-1">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className=" flex items-center space-x-1 whitespace-nowrap">
              {/* user info */}
              <h4 className="font-bold text-lg sm:text-md capitalize hover:underline">{post.name}</h4>
              <span className="text-sm  sm:text-md text-gray-500">@{post.username} .</span>
              <span className="text-sm sm:text-md text-gray-500 hover:underline">{post.timestamp}</span>
            </div>
            {/* dot icon */}
            <BiDotsHorizontal className="h-9 w-9 hoverEffect p-2 rounded-full  hover:text-sky-500"/>
          </div>
          {/* text */}
          <p className="text-white text-lg sm:text-md mb-3">{post.text}</p>
          {/* image */}
          <Image src={post.img} layout="fixed" height={300} width={480} className="rounded-2xl  "  alt="image not found"></Image>
          {/* icons */}
          <div className="flex justify-between items-center my-2 p-2">
            <BiComment className="h-10 w-10 hover:text-blue-600 hoverEffect"/>
            <AiOutlineRetweet className="h-10 w-10 hoverEffect hover:text-green-400"/>
            <BiHeart className="h-10 w-10 hoverEffect hover:text-pink-500"/>
            <BsBoxArrowUp className="h-10 w-10 hoverEffect hover:text-blue-600"/>
            <BsTriangle className="h-10 w-10 hoverEffect hover:text-blue-600"/>

          </div>

        </div>
      </div>
    </>
  );
};
