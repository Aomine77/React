import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="dashboard-grid">
        <Link to="/admin/products" className="dashboard-card">
          <i className="fas fa-box"></i>
          <h2>Product Management</h2>
          <p>Manage your products inventory</p>
        </Link>

        <Link to="/admin/orders" className="dashboard-card">
          <i className="fas fa-shopping-bag"></i>
          <h2>Order Management</h2>
          <p>View and manage customer orders</p>
        </Link>

        <div className="dashboard-card">
          <i className="fas fa-users"></i>
          <h2>User Management</h2>
          <p>Manage user accounts</p>
        </div>

        <div className="dashboard-card">
          <i className="fas fa-chart-bar"></i>
          <h2>Analytics</h2>
          <p>View sales and performance metrics</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 