import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import { supabase } from "../utils/SupabaseClient";


function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated,setAuthenticatedUser]=useState(null);
  useEffect(() => {
    const {data}=supabase.auth.onAuthStateChange((event,session)=>{
      handleAuthchange(event,session);
      if(event==='SIGNED_IN'){
        setAuthenticatedUser('authenticated');
      }
      if(event==='SIGNED_OUT'){
        setAuthenticatedUser('not authenticated');
      }
      if(event==='PASSWORD_RECOVERY'){
        setAuthenticatedUser('Authenticated set passowrd');
      }

    }
    // checkUser();
    // return()=>{
    //   authListener.subscription()
    // }
    )
  }, [checkUser])

  async function handleAuthchange(event,session){
    await fetch('/api/index',{
      method:"POST",
      headers:new Headers({'Content-Type':"application/json"}),
      credentials:'same-origin',
      body:JSON.stringify({event,session})
    })

  }
  async function checkUser(){
    const user=await supabase.auth.getUser(); 

    if(user){
      setAuthenticatedUser('authenticated');
    }
    if(!user){
      setAuthenticatedUser('not-authenticated');
    }
  }
  
  return <Component {...pageProps} />
}

export default MyApp
