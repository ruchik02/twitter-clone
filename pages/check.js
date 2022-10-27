import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
const check = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setName(router.query.name);
    setEmail(router.query.email);
    setUserName(router.query.username);
    console.log("router", router.query.name, router.query.username);
  }, [router.query.name]);

  return <Sidebar name={name} email={email} username={username} />;
};

export default check;
