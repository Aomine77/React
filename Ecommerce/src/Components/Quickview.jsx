import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Quickview.css';

const Quickview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = location.state?.product;

  if (!product) {
    navigate('/shop');
    return null;
  }

  return (
    <div className="quickview-page">
      <div className="quickview-content">
        <div className="quickview-grid">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-details">
            <h2>{product.name}</h2>
            <p className="product-brand">{product.brand}</p>
            <p className="product-price">${product.price}</p>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description || 'No description available.'}</p>
            </div>

            <div className="product-features">
              <h3>Features</h3>
              <ul>
                <li>Premium Quality Materials</li>
                <li>Comfortable Fit</li>
                <li>Durable Construction</li>
                <li>Stylish Design</li>
              </ul>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={() => {
                  addToCart(product);
                  navigate('/cart');
                }}
              >
                <i className="fas fa-shopping-cart"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickview;
