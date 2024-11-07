import { useCart } from '../context/CartContext';
import './CartPopup.css';

const CartPopup = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Shopping Cart</h3>
          <button className="close-button" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-bag empty-cart-icon"></i>
              <p>Your cart is empty</p>
              <button className="start-shopping-btn" onClick={onClose}>
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image-container">
                  <img src={item.image} alt={item.name} className="item-image" />
                </div>
                <div className="item-details">
                  <div className="item-header">
                    <h4>{item.name}</h4>
                    <button 
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                  <div className="item-info">
                    <p className="item-price">${item.price}</p>
                    <p className="item-quantity">Qty: {item.quantity}</p>
                  </div>
                  <p className="item-total">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-button">
              <span>Proceed to Checkout</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="continue-shopping" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup; 