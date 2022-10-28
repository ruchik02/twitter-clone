import React from "react";
import Messages from "../components/Messages";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
const Message = () => {
  const { query } = useRouter();
  return (
    <div>
      <Sidebar name={query.name} username={query.username} />
      <Messages name={query.name} username={query.username} />
    </div>
  );
};

export default Message;
