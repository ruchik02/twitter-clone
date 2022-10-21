import Home from "../components/Home";
import {supabase} from '../utils/supabaseClient';
import Dashboard from './dashboard';
import SignIn from './signin'
import { useState,useEffect } from "react";
const index = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
  
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <>
    {!session ? 
      <Home />
      :
      <SignIn  key={session.user.id} session={session}/>
       
    }
    </>
  );
};

export default index;
