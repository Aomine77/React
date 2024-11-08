import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/admin/addproduct">Add Product</Link>
        </div>
    );
};

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <div className={`bg-gray-800 font-mono text-white h-screen p-2 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex justify-between items-center mb-4">
        {!isCollapsed && <h2 className="text-3xl font-semibold font-mono">Admin Panel</h2>}
        <button 
          className="text-white focus:outline-none text-2xl items-center ml-4"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <AiOutlineMenu />
        </button>
        
        
      </div>
      <hr className="border-t border-white my-4 w-full" />
      <nav className="flex flex-col space-y-4">
        <Link to="/admin/addproduct"
          className={`flex text-2xl items-center space-x-2 py-2 px-3 rounded-lg ${activeTab === 'products' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}
          onClick={() => setActiveTab('products')}
        >
          <AiFillProduct /> 
          {!isCollapsed && <span> Products</span>}
        </Link>
        <button 
          className={`flex text-2xl items-center space-x-2 py-2 px-3 rounded-lg ${activeTab === 'orders' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}
          onClick={() => setActiveTab('orders')}
        >
          <FaShoppingCart />
          {!isCollapsed && <span>Orders</span>}
        </button>
        <button 
          className={`flex text-2xl items-center space-x-2 py-2 px-3 rounded-lg ${activeTab === 'users' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}
          onClick={() => setActiveTab('users')}
        >
          <FaUsers />
          {!isCollapsed && <span>Users</span>}
        </button>
      <button 
        className={`flex text-2xl items-center space-x-2 py-2 px-3 rounded-lg ${activeTab === 'users' ? 'bg-gray-700' : 'hover:bg-gray-600'}`}
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        {!isCollapsed && <span>Logout</span>}
      </button>
      </nav>
    </div>
  );
};

export default Sidebar;
