import React from 'react';
import about from '../assets/image.png';
  
const About = () => {
  return (
    <div className="w-full h-screen bg-white font-mono">
      <div className="flex justify-center items-center p-10">
        <div className="w-1/2 h-1/2">
      <h1 className="text-4xl font-bold font-mono text-black p-4">About Our Shop</h1>
          <h2 className="text-4xl font-mono text-black pt-2 pl-4">
            We are a team of coffee enthusiasts who are passionate about coffee.
          </h2>
            <button className="bg-transparent border border-black text-black px-4 py-2 rounded-3xl mt-10 mx-10
             hover:bg-[#000300] hover:text-white transition-all duration-300">
              Learn More
            </button>
        </div>
        <div className="w-1/2 h-1/2">
          <img src={about} alt="about" className="w-full h-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
