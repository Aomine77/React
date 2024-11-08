import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";

function AdminLogin() {
  return (
    <>
<div className='h-screen flex flex-col items-center justify-center p-2  bg-cover bg-center' >
    <form className='bg-[#ebe8e8] p-8 rounded-xl shadow-xl w-96'>
        <h1 className='text-4xl font-bold text-center mb-4'>Admin Login</h1>
        <hr className='w-full h-[2px] bg-[#000300] my-2'/>
        <div className='flex flex-col'>
            <label htmlFor='email' className='text-sm font-bold text-gray-600'>Email</label>
            <input type='email' id='email' className='p-2 border border-gray-300 rounded-md mt-1' />
            <label htmlFor='password' className='text-sm font-bold text-gray-600'>Password</label>
            <input type='password' id='password' className='p-2 border border-gray-300 rounded-md mt-1' />
            <hr className='w-full h-[2px] bg-[#000300] my-2'/>
           

            <button className='w-full p-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300 rounded-md mt-4'>Login</button> <br />
        </div>
    </form>
    </div>
    </>
  );
}

export default AdminLogin;
