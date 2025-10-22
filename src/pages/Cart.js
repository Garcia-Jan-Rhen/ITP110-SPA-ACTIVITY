import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="coffee-card p-5">
                <div className="fs-1 mb-4">🛒</div>
                <h2 className="mb-4">Your Cart is Empty</h2>
                <p className="lead mb-4">
                  Looks like you haven't added any items to your cart yet. 
                  Browse our menu and add some delicious items!
                </p>
                <Link to="/menu" className="btn btn-coffee btn-lg">
                  Browse Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Shopping Cart</h1>
          <p className="lead">Review your order and proceed to checkout</p>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="coffee-card p-4">
              <h3 className="mb-4">Your Items ({getTotalItems()} items)</h3>
              {items.map((item) => (
                <div key={item.id} className="row align-items-center mb-4 pb-4 border-bottom">
                  <div className="col-md-6">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                  <div className="col-md-2">
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <div className="col-md-2">
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                        style={{ width: '60px' }}
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <span className="menu-price">
₱{(parseFloat(item.price.replace('₱', '')) * item.quantity).toFixed(0)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="coffee-card p-4">
              <h4 className="mb-4">Order Summary</h4>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({getTotalItems()} items):</span>
                <span>₱{getTotalPrice().toFixed(0)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (8.5%):</span>
                <span>₱{(getTotalPrice() * 0.085).toFixed(0)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Service Fee:</span>
                <span>₱100</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong className="menu-price">₱{(getTotalPrice() + (getTotalPrice() * 0.085) + 100).toFixed(0)}</strong>
              </div>

              <div className="d-grid gap-2">
                <Link to="/checkout" className="btn btn-coffee btn-lg">
                  Proceed to Checkout
                </Link>
                <Link to="/menu" className="btn btn-outline-secondary">
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-4">
                <h6>💳 Payment Methods</h6>
                <div className="d-flex gap-2">
                  <span className="fs-4">💳</span>
                  <span className="fs-4">📱</span>
                  <span className="fs-4">💰</span>
                </div>
                <small className="text-muted">We accept all major credit cards, mobile payments, and cash</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
