import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import Input from "../components/Input";
import Home from "../components/Home";

import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";

const SignIn = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  useEffect(() => {
    if (session) {
      setName(user?.user_metadata?.name);
      setEmail(user?.username);
      router.push({
        pathname: "/dashboard",
        query: {
          name: user?.user_metadata?.name,
          username: user?.user_metadata?.username,
        },
      });
    }
  }, [session, user]);

  useEffect(() => {
    if (session) {
      router.push({
        pathname: "/dashboard",
        query: {
          name: user?.user_metadata?.name,
          username: user?.user_metadata?.username,
        },
      });
    }
  }, [session, user]);

  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { data, profile, session, error } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        refreshToken: session?.refresh_token,
      });
    await supabase.auth.setSession(data.session.refresh_token);
    console.log(
      "user",
      data,
      data.user?.user_metadata?.username,
      data.user?.user_metadata?.name
    );
    if (error) {
      alert(JSON.stringify(error));
      setLoading(false);
    } else {
      router.push({
        pathname: "/dashboard",
        query: {
          name: data.user?.user_metadata?.name,
          username: data.user?.user_metadata?.username,
        },
      });
    }
    console.log("error and data", error, data);
  };
  return (
    <>
      <Home />
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
        <div className="relative w-96 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
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
                alt="image not found"
              />
            </i>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans ">
              <Image
                src="/google.png"
                width={25}
                height={25}
                alt="image not found"
              />
              <span className="mx-2">Sign in with Google</span>
            </button>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans ">
              <Image
                src="/apple.png"
                width={20}
                height={20}
                alt="image not found"
              />
              <span className="mx-2">Sign in with Apple</span>
            </button>
          </div>
          <h5>Or</h5>
          <div className="w-72 h-60 flex-col justify-evenly">
            <form onSubmit={handleSignIn}>
              <label htmlFor="email" className="text-gray-400 font-sans">
                Email
              </label>
              <Input
                type="email"
                placeholder="Phone,email, or username"
                id="email"
                label="Email"
                value={email}
                required
                maxLength={30}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="text-gray-400 font-sans">
                Password
              </label>
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                placeholder="Enter Your Password"
                required
                minLength={6}
                maxLength={20}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="flex items-center w-72 h-10 bg-white outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-sky-400 text-white hover:bg-sky-500">
                {loading ? "Loading....." : "Sign in with Email"}
              </button>
            </form>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold justify-center font-sans text-lg rounded-full my-3 b-2 border-sky-400 border-solid border text-sky-500">
              Forget password?
            </button>
          </div>
          <p className="text-black text-xl font-sans my-8">
            Don't have an account ?&nbsp;
            <Link href="/signup">
              <a className="hover:text-blue-400">Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
