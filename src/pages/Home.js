import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="coffee-bg">
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to KOPI
              </h1>
              <p className="lead mb-4">
                Experience the finest coffee crafted with passion and served with love. 
                From rich espresso to creamy lattes, we bring you the perfect cup every time.
              </p>
              <div className="d-flex gap-3">
                <Link to="/menu" className="btn btn-coffee btn-lg">
                  View Menu
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 slide-in-right">
              <div className="text-center">
                <div className="coffee-card p-5">
                  <h3 className="text-center mb-4">☕ Our Specialties</h3>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <div className="text-center">
                        <div className="fs-1 mb-2">☕</div>
                        <h6>Espresso</h6>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="text-center">
                        <div className="fs-1 mb-2">🥛</div>
                        <h6>Latte</h6>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="text-center">
                        <div className="fs-1 mb-2">🧊</div>
                        <h6>Cold Brew</h6>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="text-center">
                        <div className="fs-1 mb-2">🍰</div>
                        <h6>Pastries</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 fade-in">
              <div className="coffee-card p-4 h-100">
                <div className="fs-1 mb-3">🌱</div>
                <h5>Fresh Beans</h5>
                <p>Premium coffee beans sourced from the finest regions around the world.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 fade-in" style={{animationDelay: '0.2s'}}>
              <div className="coffee-card p-4 h-100">
                <div className="fs-1 mb-3">👨‍🍳</div>
                <h5>Expert Baristas</h5>
                <p>Skilled baristas crafting your perfect cup with precision and care.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 fade-in" style={{animationDelay: '0.4s'}}>
              <div className="coffee-card p-4 h-100">
                <div className="fs-1 mb-3">🏠</div>
                <h5>Cozy Atmosphere</h5>
                <p>Relax in our warm, inviting space perfect for work or leisure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
