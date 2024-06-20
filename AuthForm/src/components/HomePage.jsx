import axios from 'axios';
import React, { useEffect } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if(!token){
      navigate("/signin")
    }
  }, [])
  return <div className='h-screen flex flex-col gap-10 justify-center items-center bg-slate-900'>
    <button onClick={
         () => {
          Cookies.remove("token");
          navigate("/signin")
        }
      } className='bg-blue-500 p-2 rounded-md text-white font-bold text-xl hover:bg-blue-700'>LogOut</button>
    <div className='bg-blue-500 w-1/2 p-4 text-white font-bold text-4xl rounded-md flex justify-center items-center shadow-lg'>
      <h1>HomePage</h1>
    </div>
  </div>
}
