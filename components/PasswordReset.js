import { useState, useEffect } from "react";
import Img from "../public/twitter.png";
import Image from "next/image";
import toast from "react-hot-toast";
import Home from "./Home";
const PasswordReset = () => {
  const [password, setPassword] = useState(null);
  const[hash, setHash] = useState(null);
  useEffect(() => {
    setHash(window.location.hash);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const notification = toast.loading("Changing Password");

    try {
      if (!hash) {
        return toast.error("Sorry, Invalid token", {
          id: notification,
        });
      } else if (hash) {
        const hashArr = hash
          .substring(1)
          .split("&")
          .map((param) => param.split("="));

        let type;
        let accessToken;
        for (const [key, value] of hashArr) {
          if (key === "type") {
            type = value;
          } else if (key === "access_token") {
            accessToken = value;
          }
        }

        if (
          type !== "recovery" ||
          !accessToken ||
          typeof accessToken === "object"
        ) {
          toast.error("Invalid access token or type", {
            id: notification,
          });
          return;
        }

        //   now we will change the password
        const { error } = await supabase.auth.updateUser(accessToken, {
          password: password,
        });

        if (error) {
          toast.error(error.message, {
            id: notification,
          });
        } else if (!error) {
          toast.success("Password Changed", {
            id: notification,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Sorry Error occured", {
        id: notification,
      });
      console.log(error);
    }
  };
  return (
    <>
    <Home/>
    <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm fixed">
      <div className="relative w-80 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
        <div className="flex items-center w-72 h-60 flex-col justify-evenly ">
        <h2 className="text-3xl font-bold font-sans">Reset Password</h2>
          <i className="fab fa-twitter text-sky-500 text-2xl ">
            <Image src={Img} layout="fixed" width={60} height={60}></Image>
          </i>
        </div>
        <div className=" flex-col justify-evenly px-5 py-5">
          <form onSubmit={handleSubmit}>
            <label htmlFor="password" className="text-gray-400">
              Password
            </label>
            <input
              className=" w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="flex items-center w-72 h-10 bg-sky-500 outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-sky-400 text-black hover:bg-sky-500">
               Submit
              </button>
          </form>

        </div>
      </div>
    </div>
    </>
  );
};

export default PasswordReset;
