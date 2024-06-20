import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if(token){
      axios.get("http://localhost:8000/api/v1/user/home", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        navigate("/home")
      })
    }
  }, []);
  return <div className='bg-slate-900 flex justify-center items-center h-screen'>
    <div className='bg-white rounded-md shadow-md w-1/3 flex flex-col justify-center items-center p-3 gap-2'>
      <h1 className='font-bold text-4xl text-blue-500 mb-2'>SignUp</h1>
      <div className='flex flex-col w-full'>
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' className='outline-blue-500 p-2 rounded-md border-blue-300 border-2'/>
      </div>
      <div className='flex flex-col w-full'>
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' className='outline-blue-500 p-2 rounded-md border-blue-300 border-2'/>
      </div>
      <div className='flex flex-col w-full mb-2'>
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' className='outline-blue-500 p-2 rounded-md border-blue-300 border-2'/>
      </div>
      <button onClick={
        async () => {
          const res  = await axios.post("http://localhost:8000/api/v1/user/signup", {
            username,
            email,
            password
          });
          Cookies.set("token", res.data.token , {expires: 2});
          window.alert("SignedUp")
          navigate("/signin")
        }
      } className='bg-blue-500 p-2 rounded-md text-white font-bold text-xl hover:bg-blue-700'>SignUp</button>
      <div>
        <p>Already a user <Link className='text-blue-500 underline' to="/signin">Singin</Link></p>
      </div>
    </div>
  </div>
}
