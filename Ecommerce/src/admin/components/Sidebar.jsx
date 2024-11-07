import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2>{!isCollapsed && 'Admin Panel'}</h2>
        <button 
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className={`fas fa-${isCollapsed ? 'chevron-right' : 'chevron-left'}`}></i>
        </button>
      </div>
      <nav className="sidebar-nav">
        <button 
          className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          <i className="fas fa-box"></i>
          {!isCollapsed && 'Products'}
        </button>
        <button 
          className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          <i className="fas fa-shopping-bag"></i>
          {!isCollapsed && 'Orders'}
        </button>
        <button 
          className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <i className="fas fa-users"></i>
          {!isCollapsed && 'Users'}
        </button>
      </nav>
      <button 
        className="logout-button"
        onClick={handleLogout}
      >
        <i className="fas fa-sign-out-alt"></i>
        {!isCollapsed && 'Logout'}
      </button>
    </div>
  );
};

export default Sidebar; 