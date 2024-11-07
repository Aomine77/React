import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
import CartPopup from './CartPopup';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Coffee', path: '/coffee' },
    { id: 4, text: 'Shop', path: '/shop' },
    { id: 5, text: 'Contact', path: '/contact' },
    { id: 6, text: 'Blog', path: '/blog' },
    { id: 7, text: 'Login', path: '/login' },
  ];

  return (
    <>
      <div className='bg-white flex justify-between items-center h-24 px-5 text-black border-b border-gray-200 sticky top-0 z-40'>
        {/* Logo */}
        <h1 className='w-full text-3xl font-bold text-[#000300]'>COFFO</h1>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <Link to={item.path} key={item.id}>
              <li className='p-4 hover:bg-[#dd2c2c] rounded-xl m-2 cursor-pointer duration-300'>
                {item.text}
              </li>
            </Link>
          ))}
          <li 
            onClick={toggleCart}
            className='p-4 hover:bg-[#dd2c2c] rounded-xl m-2 cursor-pointer duration-300'
          >
            <FaShoppingCart />
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }>
          <h1 className='w-full text-3xl font-bold text-[#dd2c2c] m-4'>Coffee</h1>

          {navItems.map(item => (
            <Link to={item.path} key={item.id}>
              <li className='p-4 border-b rounded-xl hover:bg-[#dd2c2c] duration-300 hover:text-black cursor-pointer border-gray-600'>
                {item.text}
              </li>
            </Link>
          ))}
          <li 
            onClick={toggleCart}
            className='p-4 border-b rounded-xl hover:bg-[#dd2c2c] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <FaShoppingCart />
          </li>
        </ul>
      </div>

      {/* Cart Popup */}
      <CartPopup 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Navbar;