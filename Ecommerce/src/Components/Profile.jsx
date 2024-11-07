import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { userService } from '../services/userService';
import { orderService } from '../services/orderService';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [userProfile, setUserProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        // Load user profile
        const profile = await userService.getUserProfile(currentUser.uid);
        setUserProfile(profile);

        // Load user orders
        const userOrders = await orderService.getUserOrders(currentUser.uid);
        setOrders(userOrders);
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser?.uid) {
      loadUserData();
    }
  }, [currentUser]);

  const handleUpdateProfile = async (updatedData) => {
    try {
      await userService.saveUserProfile(currentUser.uid, updatedData);
      setUserProfile(prev => ({ ...prev, ...updatedData }));
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const renderProfile = () => (
    <div className="profile-info">
      <div className="profile-header">
        <div className="profile-avatar">
          {currentUser?.photoURL ? (
            <img src={currentUser.photoURL} alt="Profile" />
          ) : (
            <div className="avatar-placeholder">
              {currentUser?.displayName?.[0] || currentUser?.email?.[0] || 'U'}
            </div>
          )}
        </div>
        <div className="profile-details">
          <h2>{currentUser?.displayName || 'User'}</h2>
          <p>{currentUser?.email}</p>
          <button className="edit-profile-btn">
            <i className="fas fa-edit"></i> Edit Profile
          </button>
        </div>
      </div>

      <div className="profile-sections">
        <div className="info-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              <p>{currentUser?.displayName || 'Not set'}</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>{currentUser?.email}</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>{currentUser?.phoneNumber || 'Not set'}</p>
            </div>
            <div className="info-item">
              <label>Member Since</label>
              <p>{new Date(currentUser?.metadata?.creationTime).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="orders-section">
      <h3>Order History</h3>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <div className="order-info">
              <h4>{order.id}</h4>
              <span className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <p className="order-date">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSettings = () => (
    <div className="settings-section">
      <h3>Account Settings</h3>
      <div className="settings-group">
        <h4>Notifications</h4>
        <div className="setting-item">
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
          <div className="setting-info">
            <p>Email Notifications</p>
            <span>Receive updates about your orders and promotions</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-container">
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <>
          <div className="profile-sidebar">
            <div className="profile-nav">
              <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="fas fa-user"></i>
                Profile
              </button>
              <button
                className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <i className="fas fa-shopping-bag"></i>
                Orders
              </button>
              <button
                className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <i className="fas fa-cog"></i>
                Settings
              </button>
            </div>
          </div>

          <div className="profile-content">
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
