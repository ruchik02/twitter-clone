import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import UserProfile from "../components/UserProfile";
import { Widget } from "../components/Widget";
const Profile = () => {
  const { query } = useRouter();

  return (
    <>
      <Sidebar name={query.name} username={query.username} />
      <main className="flex min-h-screen mx-auto">
        <UserProfile name={query.name} username={query.username} />
        <Widget />
      </main>
    </>
  );
};

export default Profile;
