import React, { useState } from "react";

// import {Dialog} from '@headlessui/react';

import { useRouter } from "next/router";

import { supabase } from "../utils/SupabaseClient";

import Image from "next/image";

import Link from "next/link";
import Home from "../components/Home";
// {open,onClose}
const SignIn = ({name,username}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[forget,setForgetPassword]=useState()

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      name:name,
      username:username,
      password: password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/dashboard");
    }
    console.log(error, data);
  };
  const ForgetPassword=async(e)=>{
    e.preventDefault();
    router.push('/reset')
  }
  
  return (
    <>
    <Home/>
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
    {/* <Dialog
    open={open}
      onClose={onClose}
    > */}
        <div className="relative w-96 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
      {/* <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
          <div className="flex items-center w-72 h-60 flex-col justify-evenly ">
            <h1 className="text-xl font-bold text-center text-black font-sans">
              Sign in to your account
            </h1>
            <i className="fab fa-twitter text-sky-500 text-2xl ">
              <Image
                src="/twitter.png"
                layout="fixed"
                width={60}
                height={60}
              ></Image>
            </i>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans ">
              <Image src="/google.png" width={25} height={25}></Image>
              <span className="mx-2">Sign in with Google</span>
            </button>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans ">
              <Image src="/apple.png" width={20} height={20}></Image>
              <span className="mx-2">Sign in with Apple</span>
            </button>
          </div>
          <h5>Or</h5>
          <div className="w-72 h-60 flex-col justify-evenly">
            <form onSubmit={handleSignIn}>
              <label htmlFor="email" className="text-gray-400 font-sans">
                Email
              </label>
              <input
                type="text"
                placeholder="Phone,email, or username"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <label htmlFor="password" className="text-gray-400">
                Password
              </label>
              <input
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="flex items-center w-72 h-10 bg-white outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-sky-400 text-white hover:bg-sky-500">
                Sign in with Email
              </button>
            </form>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold justify-center font-sans text-lg rounded-full my-3 b-2 border-sky-400 border-solid border text-sky-500"
             onClick={ForgetPassword}
            >
              Forget password?
            </button>
          </div>
          <p className="text-black text-xl font-sans my-8">
            Don't have an account ?
          <Link href="/signup">
            <a  className="hover:text-blue-400">
              Sign Up
            </a>
          </Link>
          </p>
        </div>
      {/* </Dialog> */}
      </div>
    </>
  );
};

export default SignIn;
