import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    specialInstructions: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="coffee-card p-5">
                <div className="fs-1 mb-4">🛒</div>
                <h2 className="mb-4">Your Cart is Empty</h2>
                <p className="lead mb-4">
                  You need to add items to your cart before checking out.
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

  if (orderComplete) {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="coffee-card p-5">
                <div className="fs-1 mb-4">✅</div>
                <h2 className="mb-4 text-success">Order Confirmed!</h2>
                <p className="lead mb-4">
                  Thank you for your order! We'll prepare your items and notify you when it's ready for pickup.
                </p>
                <div className="alert alert-info">
                  <strong>Order Number:</strong> #KOPI-{Date.now().toString().slice(-6)}
                  <br />
                  <strong>Estimated Ready Time:</strong> 15-20 minutes
                </div>
                <div className="d-grid gap-2">
                  <Link to="/" className="btn btn-coffee btn-lg">
                    Back to Home
                  </Link>
                  <Link to="/menu" className="btn btn-outline-secondary">
                    Order Again
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const total = getTotalPrice() + (getTotalPrice() * 0.085) + 2.00;

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Checkout</h1>
          <p className="lead">Complete your order and we'll prepare it fresh for you</p>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="coffee-card p-4 mb-4">
                <h3 className="mb-4">Contact Information</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="coffee-card p-4 mb-4">
                <h3 className="mb-4">Pickup Information</h3>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Pickup Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value="KOPI Coffee Shop - 123 Coffee Street"
                    readOnly
                  />
                  <small className="text-muted">We'll prepare your order for pickup at our location</small>
                </div>
                <div className="mb-3">
                  <label htmlFor="specialInstructions" className="form-label">Special Instructions</label>
                  <textarea
                    className="form-control"
                    id="specialInstructions"
                    name="specialInstructions"
                    rows="3"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    placeholder="Any special requests or modifications..."
                  ></textarea>
                </div>
              </div>

              <div className="coffee-card p-4 mb-4">
                <h3 className="mb-4">Payment Information</h3>
                <div className="mb-3">
                  <label className="form-label">Payment Method</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="card"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="card">
                      💳 Credit/Debit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="cash"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="cash">
                      💰 Pay at Pickup (Cash)
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="cardNumber" className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="d-flex gap-3">
                <button
                  type="submit"
                  className="btn btn-coffee btn-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Processing...
                    </>
                  ) : (
                    'Complete Order'
                  )}
                </button>
                <Link to="/cart" className="btn btn-outline-secondary btn-lg">
                  Back to Cart
                </Link>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="coffee-card p-4">
              <h4 className="mb-4">Order Summary</h4>
              
              {items.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.name} x{item.quantity}</span>
                  <span>₱{(parseFloat(item.price.replace('₱', '')) * item.quantity).toFixed(0)}</span>
                </div>
              ))}
              
              <hr />
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
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
                <strong className="menu-price">₱{total.toFixed(0)}</strong>
              </div>

              <div className="alert alert-info">
                <small>
                  <strong>⏰ Estimated Ready Time:</strong> 15-20 minutes<br />
                  <strong>📍 Pickup Location:</strong> KOPI Coffee Shop
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
