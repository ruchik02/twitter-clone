import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { AiFillHome } from "react-icons/ai";
import { BsHash, BsBookmark, BsThreeDots } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { IoMdNotificationsOutline, IoMdListBox } from "react-icons/io";
import { HiOutlineUser, HiDotsCircleHorizontal } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ name, username }) => {
  const [show, setShow] = useState(true);
  //  const ProfileHandle=async(e)=>{
  //   e.preventDefault();
  //   if (error) {
  //     alert(JSON.stringify(error));
  //  }
  //  else {
  //   router.push({
  //     pathname: "/profile",
  //     query: {
  //       email: email,
  //       name: user?.user_metadata?.name,
  //       username: user?.user_metadata?.username,
  //     },
  //   });
  // }
  return (
    // xl:ml-24
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24 ">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 xl:px-1">
        <Image width="40" height="40" src="/twitter.png"></Image>
      </div>
      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarItem text="Home"
        href={{
              pathname: "/dashboard",
              query: {
                name: name,
                username: username,
              },
            }}
         Icon={AiFillHome} active />
        <SidebarItem text="Explore" Icon={BsHash} />
        <>
          <SidebarItem text="Notifications" Icon={IoMdNotificationsOutline} />
          <SidebarItem
            text="Messages"
            href={{
              pathname: "/message",
              query: {
                name: name,
                username: username,
              },
            }}
            Icon={BiEnvelope}
          />
          <SidebarItem text="Bookmarks" Icon={BsBookmark} />
          <SidebarItem text="Lists" Icon={IoMdListBox} />
          <SidebarItem
            text="Profile"
            href={{
              pathname: "/profile",
              query: {
                name: name,
                username: username,
              },
            }}
            Icon={HiOutlineUser}
          />
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
          />

          <div
            className="leading-5 hidden xl:inline mx-2"
            onClick={() => setShow(!show)}
          >
            {/* name */}
            <h4 className="font-bold">{name}</h4>
            {/* username */}
            <p className="text-gray-500">@{username}</p>
          </div>
          <BsThreeDots className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
        {show ? (
          <div className="flex flex-col mt-2 text-white space-y-3 text-center h-24 bg-zinc-900 w-72 rounded-lg hidden">
            <Link href="/signin">
              <a className="text-lg font-sans hover:bg-gray-400 hover:opacity-50 p-2 hover:transition-all hover:duration-200">
                Add an existing account
              </a>
            </Link>
            <Link href="/signout">
              <a className="text-lg font-sans  hover:bg-gray-400 hover:opacity-50 p-2 hover:transition-all hover:duration-200">
                Log out @{username}
              </a>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col mt-2 text-white space-y-3 text-center h-24 bg-zinc-900 w-72 rounded-lg">
            <Link href="/signin">
              <a className="text-lg font-sans hover:bg-gray-400 hover:opacity-50 p-2 hover:transition-all hover:duration-200">
                Add an existing account
              </a>
            </Link>
            <Link href="/signout">
              <a className="text-lg font-sans  hover:bg-gray-400 hover:opacity-50 p-2 hover:transition-all hover:duration-200">
                Log out @{username}
              </a>
            </Link>
          </div>
        )}
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
