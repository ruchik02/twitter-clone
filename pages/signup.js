import { useState } from "react";

import { useRouter } from "next/router";

import { supabase } from "../utils/supabaseClient";

import Image from "next/image";

import Link from "next/link";

import Input from "../components/Input";

import Home from "../components/Home";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      name: name,
      username: username,
      email: email,
      password: password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/signin");
    }
  };

  return (
    <>
      <Home />
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
        <div className="relative w-96 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
          <div className="flex items-center  flex-col justify-evenly ">
            <h1 className="text-xl font-bold text-center text-black font-sans">
              Create your account
            </h1>
            <i className="fab fa-twitter text-sky-500 text-2xl ">
              <Image src="/twitter.png" layout="fixed" width={60} height={60} />
            </i>
          </div>

          <div className="w-72 flex-col justify-evenly">
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Enter your Name "
                label="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <Input
                type="text"
                placeholder="username"
                label="UserName"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <Input
                type="text"
                placeholder="Phone,email, or username"
                label="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <Input
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1"
                type="password"
                label="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="flex items-center w-72 h-10 bg-white outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-sky-400 text-white hover:bg-sky-500">
                Sign Up
              </button>
            </form>
          </div>
          <p className="text-black text-xl font-sans">
            Already have an account?
          </p>
          <button className="flex items-center w-72 h-10 bg-white outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-sky-400 text-white hover:bg-sky-500">
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
