import Image from "next/image";
import { BiDotsHorizontal } from "react-icons/bi";

const News = ({news}) => {
  return (
    <>
        <div className="hover: cursor-pointer flex items-center justify-between px-4 py-3 space-x-1 hover:bg-[#1D1F23] transition duration-200">
          <div className=" space-y-0.5">
            <h6 className="text-white text-md font-bold">{news.article}</h6>
            <p className=" text-sm font-medium text-gray-500">
              {news.source}
            </p>
          </div>
          <Image
            className="rounded-xl"
            width={70}
            height={60}
            layout="fixed"
            src={news.img}
            alt="not found"
          ></Image>
        </div>
    </>
  );
};

export default News;
