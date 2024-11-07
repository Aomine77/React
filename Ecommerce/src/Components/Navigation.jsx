import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import CartPopup from './CartPopup';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { currentUser, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          STORE
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button 
            className="icon-button"
            onClick={() => setShowCart(true)}
          >
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          {isAuthenticated ? (
            <div className="user-menu">
              <button 
                className="icon-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <i className="fas fa-user"></i>
              </button>
              
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <div className="user-info">
                  <div className="user-name">
                    {currentUser?.displayName || 'User'}
                  </div>
                  <div className="user-email">{currentUser?.email}</div>
                </div>
                
                <Link to="/profile" onClick={() => setShowDropdown(false)}>
                  <i className="fas fa-user-circle"></i>
                  Profile
                </Link>
                <Link to="/orders" onClick={() => setShowDropdown(false)}>
                  <i className="fas fa-shopping-bag"></i>
                  Orders
                </Link>
                <button onClick={handleLogout} className="logout-button">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </div>
      </nav>

      <CartPopup 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />
    </header>
  );
};

export default Navigation;
