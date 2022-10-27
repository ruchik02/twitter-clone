import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import { Widget } from "../components/Widget";
const Profile = () => {
  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen mx-auto">
        <UserProfile />
        <Widget />
      </main>
    </>
  );
};

export default Profile;
