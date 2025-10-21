import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Our Cozy Interior',
      description: 'Warm and inviting atmosphere perfect for work or relaxation',
      emoji: '🏠'
    },
    {
      id: 2,
      title: 'Fresh Brewing',
      description: 'Our baristas crafting the perfect cup with precision',
      emoji: '☕'
    },
    {
      id: 3,
      title: 'Artisan Pastries',
      description: 'Freshly baked goods made daily with love',
      emoji: '🥐'
    },
    {
      id: 4,
      title: 'Coffee Beans',
      description: 'Premium beans sourced from sustainable farms',
      emoji: '🌱'
    },
    {
      id: 5,
      title: 'Latte Art',
      description: 'Beautiful designs created by our skilled baristas',
      emoji: '🎨'
    },
    {
      id: 6,
      title: 'Outdoor Seating',
      description: 'Enjoy your coffee in our beautiful garden area',
      emoji: '🌿'
    },
    {
      id: 7,
      title: 'Coffee Equipment',
      description: 'State-of-the-art brewing equipment for perfect extraction',
      emoji: '⚙️'
    },
    {
      id: 8,
      title: 'Community Events',
      description: 'Regular coffee tastings and community gatherings',
      emoji: '👥'
    }
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Gallery</h1>
          <p className="lead">Take a peek inside KOPI and see what makes us special</p>
        </div>

        <div className="row">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="coffee-card p-4 h-100 text-center">
                <div className="fs-1 mb-3">{item.emoji}</div>
                <h5 className="mb-3">{item.title}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour Section */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="coffee-card p-5 text-center">
              <h3 className="mb-4">🏛️ Virtual Tour</h3>
              <p className="lead mb-4">
                Can't visit us in person? Take a virtual tour of our coffee shop 
                and experience the KOPI atmosphere from anywhere!
              </p>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-2 mb-2">📱</div>
                    <h6>Mobile Friendly</h6>
                    <small>Optimized for all devices</small>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-2 mb-2">🎧</div>
                    <h6>Audio Guide</h6>
                    <small>Listen to our story</small>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-2 mb-2">🔄</div>
                    <h6>360° View</h6>
                    <small>Interactive experience</small>
                  </div>
                </div>
              </div>
              <button className="btn btn-coffee mt-3">
                Start Virtual Tour
              </button>
            </div>
          </div>
        </div>

        {/* Customer Photos */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="coffee-card p-4">
              <h4 className="text-center mb-4">📸 Customer Photos</h4>
              <p className="text-center text-muted mb-4">
                Share your KOPI experience with us! Tag us on social media with #KOPICoffee
              </p>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">📷</div>
                    <small>Instagram</small>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">📘</div>
                    <small>Facebook</small>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">🐦</div>
                    <small>Twitter</small>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">📌</div>
                    <small>Pinterest</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
