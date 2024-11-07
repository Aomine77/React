import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";

function Signup() {

  return (
    <>
<div className='h-screen flex flex-col items-center justify-center p-2  bg-cover bg-center' >
    <form className='bg-gray-200 p-8 rounded-xl shadow-xl w-96'>
        <h1 className='text-4xl font-bold text-center mb-4'>Signup</h1>
        <div className='flex flex-col'>
            <label htmlFor='username' className='text-sm font-bold text-gray-600'>Username</label>
            <input type='text' id='username' className='p-2 border border-gray-300 rounded-md mt-1' />

            <label htmlFor='email' className='text-sm font-bold text-gray-600'>Email</label>
            <input type='email' id='email' className='p-2 border border-gray-300 rounded-md mt-1' />
            <label htmlFor='password' className='text-sm font-bold text-gray-600'>Password</label>
            <input type='password' id='password' className='p-2 border border-gray-300 rounded-md mt-1' />

            <hr className='w-full h-[2px] bg-[#000300] my-2'/>
            <div className='flex flex-row justify-center gap-1'>
            <button className='w-fit p-2 bg-transparent text-black border border-black rounded-md mt-4 hover:bg-black hover:text-white transition duration-300'><FaGoogle /></button> <br />
            <button className='w-fit  p-2 bg-transparent text-black border border-black rounded-md mt-4 hover:bg-black hover:text-white transition duration-300'><IoLogoApple /></button> <br />
            </div>
            <button className='w-full p-2 bg-transparent text-black border border-black rounded-md mt-2 hover:bg-black hover:text-white transition duration-300'>Signup</button> <br />
            <p className='text-sm text-gray-600 mt-2'>Already have an account? <a href='/login' className='text-[#dd2c2c] font-bold'>Login</a></p>
        </div>
    </form>
    </div>
    </>
  );
}

export default Signup;
