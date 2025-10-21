import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="coffee-card p-5">
              <div className="fs-1 mb-4">☕</div>
              <h1 className="display-1 fw-bold text-muted">404</h1>
              <h2 className="mb-4">Oops! Page Not Found</h2>
              <p className="lead mb-4">
                Looks like this page went for a coffee break and never came back! 
                Don't worry, we'll help you find your way.
              </p>
              
              <div className="d-flex justify-content-center gap-3 mb-4">
                <Link to="/" className="btn btn-coffee">
                  🏠 Go Home
                </Link>
                <Link to="/menu" className="btn btn-outline-secondary">
                  ☕ View Menu
                </Link>
              </div>
              
              <div className="mt-4">
                <h5>Popular Pages:</h5>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to="/about" className="btn btn-sm btn-outline-primary">About</Link>
                  <Link to="/gallery" className="btn btn-sm btn-outline-primary">Gallery</Link>
                  <Link to="/contact" className="btn btn-sm btn-outline-primary">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
