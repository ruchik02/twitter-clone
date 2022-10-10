import { HiOutlineSparkles } from "react-icons/hi";

const Feed = () => {
  return <div className="text-white xl:ml-96 border-gray-200 border-l border-r xl:min-w-xl sm:ml-20 flex-grow max-w-xl">
    <div className=" flex sticky top-0 px-2 py-3 justify-between z-50 border-b border-gray-500">
        <h2 className="font-bold text-center cursor-pointer sm:text-xl">Home</h2>
        <div className="flex items-center justify-center px-0 ml-auto hover:rounded-full hover:bg-gray-600 h-7 w-7 ">
            <HiOutlineSparkles className="h-5 w-5"/>
        </div>
    </div>
  </div>;
};

export default Feed;
