import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { AiFillHome } from "react-icons/ai";
import { BsHash, BsBookmark, BsThreeDots } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { IoMdNotificationsOutline, IoMdListBox } from "react-icons/io";
import { HiOutlineUser, HiDotsCircleHorizontal } from "react-icons/hi";

const Sidebar = () => {
  return (
    // xl:ml-24
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full ">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 xl:px-1">
        <Image width="40" height="40" src="/twitter.png"></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarItem text="Home" Icon={AiFillHome} active />
        <SidebarItem text="Explore" Icon={BsHash} />
        <>
          <SidebarItem text="Notifications" Icon={IoMdNotificationsOutline} />
          <SidebarItem text="Messages" Icon={BiEnvelope} />
          <SidebarItem text="Bookmarks" Icon={BsBookmark} />
          <SidebarItem text="Lists" Icon={IoMdListBox} />
          <SidebarItem text="Profile" Icon={HiOutlineUser} />
          <SidebarItem text="More" Icon={HiDotsCircleHorizontal} />
        </>
      </div>
      {/* Button */}
      <>
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Tweet
        </button>
        {/* Mini-Profile */}
        <div className="hoverEffect text-white flex items-center justify-center xl:justify-start mt-auto">
          <Image
            src="/user.jpg"
            alt="user-img"
            width="50"
            height="50"
            className="h-10 w-10 rounded-full xl:mr-2"
          ></Image>

          <div className="leading-5 hidden xl:inline mx-2">
            <h4 className="font-bold">Ruchika sharma</h4>
            <p className="text-gray-500">@RuchikaRuchikas</p>
          </div>
          <BsThreeDots className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      </>
      {/* <button
          onClick={() => router.push("/signin")}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign in
        </button> */}
    </div>
  );
};

export default Sidebar;
