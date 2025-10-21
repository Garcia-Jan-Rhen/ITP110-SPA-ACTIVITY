import React from 'react';

const About = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h1 className="section-title">About KOPI</h1>
              <p className="lead">Our story of passion, quality, and community</p>
            </div>
            
            <div className="coffee-card p-5 mb-5">
              <h3 className="text-center mb-4">Our Story</h3>
              <p className="lead">
                Founded in 2020, KOPI began as a small dream to bring exceptional coffee 
                to our community. What started as a passion project has grown into a 
                beloved local institution, where every cup tells a story of dedication, 
                quality, and the perfect blend of tradition and innovation.
              </p>
              <p>
                Our journey began when our founder, after years of traveling and tasting 
                coffee from around the world, decided to bring those incredible flavors 
                back home. We source our beans directly from sustainable farms, ensuring 
                fair trade practices and the highest quality in every sip.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="coffee-card p-4 h-100">
                  <h4 className="text-center mb-3">🌍 Our Mission</h4>
                  <p>
                    To create a welcoming space where coffee lovers can enjoy 
                    exceptional beverages made with the finest ingredients, 
                    while supporting sustainable farming practices and our local community.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="coffee-card p-4 h-100">
                  <h4 className="text-center mb-3">⭐ Our Values</h4>
                  <ul className="list-unstyled">
                    <li>✓ Quality in every cup</li>
                    <li>✓ Sustainable sourcing</li>
                    <li>✓ Community support</li>
                    <li>✓ Innovation & tradition</li>
                    <li>✓ Customer satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="coffee-card p-5 mt-5">
              <h3 className="text-center mb-4">Meet Our Team</h3>
              <div className="row">
                <div className="col-md-4 text-center mb-4">
                  <div className="fs-1 mb-3">👨‍🍳</div>
                  <h5>Alex Chen</h5>
                  <p className="text-muted">Head Barista</p>
                  <small>5+ years of coffee expertise</small>
                </div>
                <div className="col-md-4 text-center mb-4">
                  <div className="fs-1 mb-3">👩‍🍳</div>
                  <h5>Maria Rodriguez</h5>
                  <p className="text-muted">Pastry Chef</p>
                  <small>Artisan baker with 8+ years experience</small>
                </div>
                <div className="col-md-4 text-center mb-4">
                  <div className="fs-1 mb-3">👨‍💼</div>
                  <h5>David Kim</h5>
                  <p className="text-muted">Manager</p>
                  <small>Customer service excellence</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
