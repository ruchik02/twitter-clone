import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { supabase } from "../utils/supabaseClient";

import Image from "next/image";

import Link from "next/link";

import Input from "../components/Input";

import Home from "../components/Home";
const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const UserSignIN = async (e) => {
  //   e.preventDefault();
  //   //router.push("/check");
  //   router.push({
  //     pathname: "/check",
  //     query: { name: name, username: username },
  //   });
  // };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      name: name,
      username: username,
      email: email,
      password: password,
      options: {
        data: {
          username: username,
          name: name,
        },
      },
    });
    await supabase.auth.setSession(data.session.refresh_token);
    if (error) {
      alert(JSON.stringify(error));
      setLoading(false);
    } else {
      setName(
        data.user?.user_metadata?.username,
        data.user?.user_metadata?.name
      );
      router.push("/signin");
    }
  };

  return (
    <>
      <Home />
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
        <div className="relative w-96 h-3/4 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
          <div className="flex items-center  flex-col justify-evenly ">
            <h1 className="text-xl font-bold text-center text-black font-sans">
              Create your account
            </h1>
            <i className="fab fa-twitter text-sky-500 text-2xl ">
              <Image
                src="/twitter.png"
                layout="fixed"
                width={60}
                height={60}
                alt="image not found"
              />
            </i>
          </div>
          <div className="w-72 flex-col justify-evenly">
            <form onSubmit={handleSubmit}>
              <label htmlFor="Name" className="text-gray-400 font-sans">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your Name "
                id="name"
                value={name}
                required
                maxLength={20}
                onChange={(e) => setName(e.target.value)}
                className="relative w-72 h-10 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <label htmlFor="username" className="text-gray-400 font-sans">
                UserName
              </label>
              <Input
                type="text"
                placeholder="username"
                id="username"
                value={username}
                required
                maxLength={20}
                onChange={(e) => setUserName(e.target.value)}
                className="relative w-72 h-10 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <label htmlFor="email" className="text-gray-400 font-sans">
                Email
              </label>
              <Input
                type="email"
                placeholder="Phone,email, or username"
                id="email"
                value={email}
                required
                maxLength={20}
                onChange={(e) => setEmail(e.target.value)}
                className="relative w-72 h-10 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <label htmlFor="password" className="text-gray-400">
                Password
              </label>
              <Input
                className="relative w-72 h-10 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1"
                type="password"
                id="password"
                value={password}
                placeholder="Enter Your Password"
                required
                minLength={6}
                maxLength={20}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="flex items-center w-72 h-10 bg-white outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-sky-400 text-white hover:bg-sky-500">
                {loading ? "Loading ..." : " Sign Up "}
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
