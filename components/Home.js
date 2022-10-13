import Head from "next/head";
import Link from "next/link";
// import { useState } from "react";
const Home = () => {
  // const [modal,setModal]=useState(false);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        />
        <title>Twitter. It's What's happening / Twitter</title>
      </Head>
      <div className="flex flex-wrap h-screen">
        <div className="image h-full bg-center bg-no-repeat bg-cover relative bg-fixed">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="-translate-x-2/4 -translate-y-2/4 absolute fill-white w-64 top-2/4 left-2/4 "
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>

        <div className="content flex flex-col  justify-around items-start p-12">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="small-bird w-14 fill-sky-500 "
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>

          <h1 className=" text-white font-black text-8xl">Happening now</h1>
          <h3 className=" text-white font-black text-4xl ">
            Join Twitter today.
          </h3>

          <div className="button">
            <Link href="/signup">
              <a className="btn-signup flex items-center justify-center text-2xl font-bold rounded-full no-underline btn-signup bg-sky-400 mb-5 text-white hover:bg-sky-500 w-96 h-14 font-bold btn">
                Sign up
              </a>
            </Link>
            <Link href="/signin">
              <a className="flex items-center justify-center text-2xl font-bold rounded-full no-underline b-2 border-sky-400 border-solid border text-sky-500 w-96 h-14 font-bold btn" 
              // onClick={()=>setModal(true)}
              >
                Log in
              </a>
            </Link>
          </div>
        </div>

        <div className="footer">
          <nav className="flex flex-row flex-wrap justify-center items-center text-sm">
            <a href="#" className="no-underline text-stone-600 capitalize">
              About
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              help center
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              terms of service
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              privacy policy
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              cookie policy
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              ads info
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              blog
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              status
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              careers
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              brand resources
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              advertising
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              marketing
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              twitter for business
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              developers
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize">
              directory
            </a>
            <a href="#" className="no-underline text-stone-600 capitalize ">
              settings
            </a>
            <div className="no-underline text-stone-600 capitalize text-lg">
              &copy; 2021 Twitter, Inc.
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Home;
