import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";

const Delete = ({ name, username }) => {
  const router = useRouter();
  const handleDelete = async (e) => {
    e.preventDefault();
  };
  const handleCancel = async (e) => {
    e.preventDefault();
    router.push({
      pathname: "/dashboard",
      query: {
        name: name,
        username: username,
      },
    });
  };
  return (
    <>
      <Dashboard name={name} username={username} />
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap">
        <div className="relative w-80 h-96 bg-black rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
          <div className="flex items-center w-72 h-24 flex-col justify-evenly ">
            <i className="fab fa-twitter text-sky-500 text-2xl ">
              <Image
                src="/images.png"
                layout="fixed"
                width={40}
                className="fixed"
                height={40}
                alt="image not found"
              />
            </i>
          </div>
          <div className="flex flex-col items-start px-4">
            <h3 className="text-white text-2xl py-1 px-5 font-bold font-sans">
              Delete Tweet ?
            </h3>

            <span className=" px-5 text-gray-600 text-md  font-sans py-1 font-normal ">
              This can't be undone and it will be removed from your profile, the
              timeline of any accounts that follow you , and from Twitter search
              results.
            </span>
          </div>
          <div className="w-72 h-44 flex-col items-center justify-center py-4">
            <button
              className="flex items-center w-72 h-10 bg-red-600 hover:opacity-40 hover:transition-all hover:duration-200  font-bold justify-center font-sans text-lg rounded-full my-3 b-2 outline-none text-black "
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="flex items-center tracking-normal leading-3 w-72 h-10 hover:bg-slate-600 bg-transparent outline-none font-bold justify-center font-sans text-lg rounded-full my-3 b-2 border-white border-solid border text-white"
              onClick={handleCancel}
            >
              Cancel ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
