import { useRouter } from "next/router";
import { AiOutlineArrowLeft, AiOutlineSchedule } from "react-icons/ai";
const UserProfile = () => {
  const router = useRouter();
  return (
    <div className="xl:ml-96 border-gray-600 border-l border-r xl:min-w-xl sm:ml-20 flex-grow max-w-xl">
      <div className="bg-black backdrop-blur-md h-14 flex sticky top-0 z-50 border-b border-gray-600">
        <div className="flex-row w-20 h-14 items-center px-5 flex">
          {/* arrow */}
          <AiOutlineArrowLeft className="text-white text-xl" />
        </div>
        <div className="h-full flex flex-col cursor-pointer w-full">
          <h3 className="font-bold text-2xl font-sans text-white">
            Ruchika Sharma
          </h3>
          <span className=" capitalize font-semibold font-sans text-md text-gray-700">
            3 tweets
          </span>
        </div>
      </div>
      <div className="flex w-full h-44">
        <div className="w-full h-full bg-gray-700"></div>
      </div>
      <header className="flex -mt-10 items-center mb-5 px-2">
        <div className="flex-1">
          <img
            src="/user.jpg"
            alt="Profile Pic"
            className="w-36 h-36 rounded-full cursor-pointer  border-4 border-black  border-solid"
          />
        </div>
        <button className="py-2 px-4 border rounded-3xl bg-transparent text-white">
          Edit Profile
        </button>
      </header>
      <div className="flex items-center px-2 py-2">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white">Ruchika Sharma</h1>
          <h4 className="text-lg text-gray-600">@RuchikaRuchikas</h4>
        </div>
        {/* <button
          className="py-2 px-4 text-white font-bold rounded-3xl bg-red-700 hover:bg-opacity-90"
        >
          Logout
        </button> */}
      </div>
      <div className="px-2 py-2">
        <div className="flex items-center ml-2">
          <AiOutlineSchedule className="text-white text-xl" />
          <span className="text-gray-600 px-1 ">Joined</span>
          <span className="text-gray-600 px-1">September 2022</span>
        </div>
      </div>
      <div className="px-2 py-2">
        <div className="flex items-center text-gray-600 ml-2">
          <span className="text-white">11</span>
          <span className="px-1">Following</span>
          <span className="text-white px-3">20</span>
          <span className="px-1">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
