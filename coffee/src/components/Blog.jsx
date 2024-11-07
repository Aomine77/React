import React from 'react';
import blog from '../assets/blog.jpg';
const Blog = () => {
  return (
    <>
    <div className='w-full h-fit p-10'>
      <h1 className='text-4xl font-bold font-mono text-black p-4'>Blog</h1>
      <div className='flex flex-row items-center justify-center gap-10'>
        <div className='w-[500px] h-fit shadow-xl rounded-3xl p-4'>
          <img src={blog} alt="blog" className='w-full h-full rounded-3xl' />
          <h2 className='text-4xl font-mono text-black pt-2 pl-4'>
            Blog Title
          </h2>
          <p className='text-sm font-mono text-black pt-2 pl-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <button className='bg-transparent border border-black text-black px-4 py-2 rounded-3xl mt-10 mx-10
             hover:bg-[#000300] hover:text-white transition-all duration-300'>
              Learn More
            </button>
        </div>
        <div className='w-[500px] h-fit shadow-xl rounded-3xl p-4'>
        <img src={blog} alt="blog" className='w-full h-full rounded-3xl' />
        <h2 className='text-4xl font-mono text-black pt-2 pl-4'>
            Blog Title
          </h2>
          <p className='text-sm font-mono text-black pt-2 pl-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <button className='bg-transparent border border-black text-black px-4 py-2 rounded-3xl mt-10 mx-10
             hover:bg-[#000300] hover:text-white transition-all duration-300'>
              Learn More
            </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
