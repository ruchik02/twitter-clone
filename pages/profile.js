import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import { Widget } from "../components/Widget";
const Profile = () => {
  return (
    <>
      <Sidebar />
      <main className="flex-grow border-x-[0.2px] ml-[60px] sm:ml-[70px] md:ml-[100px] lg:ml-[300px] max-w-2xl border-zinc-700 ">
        <UserProfile />
      </main>
      {/* <main className="flex min-h-screen mx-auto">
        <Widget />
      </main> */}
      {/* widget component */}
    </>
  );
};

export default Profile;
