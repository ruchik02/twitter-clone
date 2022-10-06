import React, {  useState } from 'react';

import { useRouter } from 'next/router';

import { supabase } from '../utils/SupabaseClient';

const SignIn = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const {data, error } = await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/dashboard');
    }
    console.log(error,data);
  };
  return (
    <>

       <div className='flex flex-col align-middle items-center absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap'>
        <div className="relative w-96 bg-white rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
        <div className="flex items-center w-72 h-60 flex-col justify-evenly ">
        <h1 className="text-xl font-bold text-center text-black font-sans">
          Sign in to your account
        </h1>
            <i className="fab fa-twitter text-sky-500 text-2xl " ><img src="https://img.icons8.com/color/50/000000/twitter--v1.png"/></i>
            <button className='flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQejVR8oObnhHs228rCMMzglk3rruf9UMa7tT7qJQiw&s" width="25" className='m-2'/>
                <span>Sign in with Google</span>
            </button>
            <button className='flex items-center w-72 h-10 bg-white outline-none font-bold border border-solid border-2 border-zinc-300 justify-center font-serif rounded-full font-sans '>
                <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png" width="25"  className='m-2'/>
                <span>Sign in with Apple</span>
            </button>
        </div>
        <h5>Or</h5>
        <div className="w-72 h-60 flex-col justify-evenly">
            <form  onSubmit={handleSignIn}>
            <label htmlFor="email" className="text-gray-400 font-sans">
              Email
            </label>
                <input type="text" placeholder="Phone,email, or username" 
                    id='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                
            <button className="flex items-center w-72 h-10 bg-white outline-none justify-center font-sans rounded-full text-lg font-bold my-3 bg-[#1da1f2] text-white hover:bg-[#1f94dd]">Sign in with Email</button>
            </form>
            <button className='flex items-center w-72 h-10 bg-white outline-none font-bold justify-center font-sans text-lg rounded-full my-3 b-2 border-[#1da1f2] border-solid border text-[#1da1f2]'>Forget password?</button>
        </div>
        <p className='text-black text-xl font-sans my-8'>Don't have an account ? <a href="/signup" className='hover:text-blue-400'>Sign Up</a></p>
    </div>
       </div>
    
    </>
  )
}

export default SignIn