
const Home = () => {
  return (
    <>
    <div>
      <header className="px-5 py-5 flex flex-row items-center justify-between m-5">
      <a
        href="/"
        className="mx-2 text-xl px-4 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
      >
        Home
      </a>
      <a
        href="/signup"
        className="mx-2 text-xl px-4 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
      >
        Sign Up
      </a>
      <a
        href="/signin"
        className="mx-2 text-xl px-4 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
      >
        Sign In
      </a>
      {/* <button
        className="mx-2 text-xl px-4 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
        onClick={() => supabase.auth.signOut()}
      >
        Logout
      </button> */}
    </header>
    </div>

    </>
  )
}

export default Home