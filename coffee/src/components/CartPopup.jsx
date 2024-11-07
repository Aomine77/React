import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CartPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end rounded-3xl">
      <div className="bg-white w-full max-w-md h-full shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        
        <div className="p-4 h-[calc(100vh-180px)] overflow-y-auto">
          {/* Cart items will go here */}
          <div className="text-center text-gray-500 mt-10">
            Your cart is empty
          </div>
        </div>

        <div className="border-t p-4 bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">$0.00</span>
          </div>
          <button className="w-full bg-[#dd2c2c] text-white py-2 rounded-lg hover:bg-[#b91c1c] transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup; 