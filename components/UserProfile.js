import Cookies from "js-cookie";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  return (
    <div className="max-[500px] p-4">
      <header className="flex items-center mb-5">
        <div className="flex-1">
          <img
            src="/user.jpg"
            alt="Profile Pic"
            className="w-[150px] h-[150px] rounded-full cursor-pointer"
          />
        </div>
        <button className="py-2 px-4 border-2 rounded-3xl bg-white">Edit Profile</button>
      </header>
      <div className="flex items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Ruchika Sharma</h1>
          <h4 className="text-xl text-gray-600">@RuchikaRuchikas</h4>
        </div>
        <button
        //   onClick={() => {
        //     Cookies.remove("token");
        //     router.push("/");
        //   }}
          className="py-2 px-4 text-white font-bold rounded-3xl bg-red-700 hover:bg-opacity-90"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
