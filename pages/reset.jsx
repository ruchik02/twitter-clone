import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { supabase } from "../utils/SupabaseClient";
// import { AiOutlineClose } from "react-icons/ai";
const Reset = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const notification = toast.loading("Sending Email....");
    try{
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      email,
      {
        redirectTo: "http://localhost:3000/password-reset",
      }
    );
    if (error) {
      toast.error(error.message, {
        id: notification,
      });
    } else if (data) {
      console.log(data);
      toast.success("Sent", {
        id: notification,
      });
    }
  } catch (error) {
    toast.error("Sorry Error occured", {
      id: notification,
    });
  }
  };
  return (
    <div className="bg-slate-800 flex flex-col align-middle absolute items-center inset-0 justify-center flex-shrink-1  ">
      <div className="h-4/5 lg:w-5/12 w-3/4 relative bg-black rounded-xl ">
        <div className="flex justify-center w-100 h-20 align-middle items-center ">
          {/*  bg-red-400 bg-yellow-400  */}
          {/* <AiOutlineClose className="text-white text-4xl p-2 inline-block -translate-x-32 xl:-translate-x-72   hover:cursor-pointer hover:rounded-full hover:bg-zinc-600  hover:transition hover:duration-200" /> */}
          <i className="fab fa-twitter text-white text-lg ">
            <Image
              src="/twitter-black.png"
              layout="fixed"
              width={50}
              height={50}
            ></Image>
          </i>
        </div>
        <div className="h-100 basis-full w-auto flex-shrink xl:px-20 sm:py-2 ">
          <div className="w-100 h-20 ">
            {/* bg-slate-800   bg-pink-400*/}
            <h1 className="sm:text-xl lg:text-3xl text-sm break-words font-bold font-sans text-white leading-5 tracking-wider space-x-2 indent-0 fixed">
              {" "}
              Find Your Twitter Account
            </h1>
          </div>
          <div className=" w-100 h-40  flex-col justify-evenly flex-wrap">
            {/* bg-red-600  */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your email, Phone or username"
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" text-white lg:w-96 md:w-80 sm:w-72 w-40 bg-transparent h-14 text-xl outline-none border border-2 border-solid border-zinc-600 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 placeholder:text-lg font-sans fixed "
              />
              <div className="flex h-36 w-100 xl:pt-96 pt-80 lg:pt-64 justify-center items-center flex-wrap ">
                <button className="flex items-center justify-center p-7 w-24 sm:w-36 h-12 md:w-80 lg:w-80 xl:w-4/12 bg-white outline-none font-bold font-sans md:text-xl rounded-full text-black fixed">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* bg-purple-500 */}
      </div>
    </div>
  );
};

export default Reset;
