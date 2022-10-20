import { useState } from "react";

import { useRouter } from "next/router";

import { supabase } from "../utils/supabaseClient";

import Image from "next/image";

import Link from "next/link";

import Input from "../components/Input";

<<<<<<< HEAD
<<<<<<< HEAD
// import { Dialog } from "@headlessui/react";

import {AiFillCloseSquare} from 'react-icons/ai'
// import SignupModal from "../components/SignupModal";
=======
import Home from "../components/Home";
>>>>>>> 011aa396219c0ee3b0b8a98f710ad9e53e465c39
=======


import {AiFillCloseSquare} from 'react-icons/ai'
import Home from "../components/Home";

>>>>>>> 000819afab154567473d0e150f5c75619941d1f0

const SignUp = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [name,setName]=useState("");
  const [showSignupModal, setShowSignupModal] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
<<<<<<< HEAD
<<<<<<< HEAD
      name:name,
=======
      name: name,
      username: username,
>>>>>>> 011aa396219c0ee3b0b8a98f710ad9e53e465c39
=======
      name: name,
      username: username,
>>>>>>> 000819afab154567473d0e150f5c75619941d1f0
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
<<<<<<< HEAD
<<<<<<< HEAD
     {/* <SignupModal/> */}
      {/* // open={showSignupModal} */}
      {/* // onClose={() => setShowSignupModal(false)} */}
      {/* /> */}
      {/* <SignupModal/> */}
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}> */}
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap">
      {/* <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
=======
      <Home />
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
>>>>>>> 011aa396219c0ee3b0b8a98f710ad9e53e465c39
=======
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap">
      <Home />
      <div className="flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
>>>>>>> 000819afab154567473d0e150f5c75619941d1f0
        <div className="relative w-96 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
          <div className="flex items-center  flex-col justify-evenly ">
            <h1 className="text-xl font-bold text-center text-black font-sans">
            {/* <AiFillCloseSquare className="inline-block -translate-x-14 text-black items-center" onClick={setIsOpen(false)}/> */}
              Create your account
            </h1>
            <i className="fab fa-twitter text-sky-500 text-2xl ">
              <Image src="/twitter.png" layout="fixed" width={60} height={60} />
            </i>
            {/* <button className="flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans ">
              <Image src="/google.png" width={25} height={25}></Image>
              <span className="mx-2">Sign up with Google</span>
            </button>
            <button className="flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans ">
              <Image src="/apple.png" width={20} height={20}></Image>
              <span className="mx-2">Sign up with Apple</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 000819afab154567473d0e150f5c75619941d1f0
            </button>
            */}
          </div> 
         {/* <h5>Or</h5>*/}
          <div className="w-72 h-72 flex-col justify-evenly">
            <form onSubmit={handleSubmit} className="space-y-4">
            <Input
<<<<<<< HEAD
=======
            </button> */}
=======
                type="text"
                 placeholder="Enter Your Name "
                label="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                 className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
>>>>>>> 000819afab154567473d0e150f5c75619941d1f0
          </div>
          <div className="w-72 h-96 flex-col justify-evenly">
            <form onSubmit={handleSubmit}>
              <label htmlFor="Name" className="text-gray-400 font-sans">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your Name "
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              <label htmlFor="username" className="text-gray-400 font-sans">
                UserName
              </label>
              <Input
                type="text"
                placeholder="username"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
<<<<<<< HEAD
              <label htmlFor="email" className="text-gray-400 font-sans">
                Email
              </label>
              <Input
>>>>>>> 011aa396219c0ee3b0b8a98f710ad9e53e465c39
                type="text"
                 placeholder="Enter Your Name "
                label="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                 className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
              {/* <label htmlFor="email" className="text-gray-400 font-sans">
                Email
              </label> */}
=======
>>>>>>> 000819afab154567473d0e150f5c75619941d1f0
              <Input
                type="text"
                 placeholder="Phone,email, or username"
                label="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
              />
<<<<<<< HEAD
              {/* <label htmlFor="password" className="text-gray-400">
                Password
<<<<<<< HEAD
              </label> */}
=======
              </label>
>>>>>>> 011aa396219c0ee3b0b8a98f710ad9e53e465c39
=======
>>>>>>> 000819afab154567473d0e150f5c75619941d1f0
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
