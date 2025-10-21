import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const { addItem } = useCart();

  const menuItems = {
    coffee: [
      { id: 'coffee-1', name: 'Espresso', description: 'Rich, bold, and perfectly extracted', price: '$3.50' },
      { id: 'coffee-2', name: 'Americano', description: 'Espresso with hot water for a smooth taste', price: '$4.00' },
      { id: 'coffee-3', name: 'Latte', description: 'Espresso with steamed milk and foam', price: '$4.50' },
      { id: 'coffee-4', name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam', price: '$4.50' },
      { id: 'coffee-5', name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.00' },
      { id: 'coffee-6', name: 'Cold Brew', description: 'Smooth, refreshing cold-brewed coffee', price: '$4.00' },
      { id: 'coffee-7', name: 'Iced Coffee', description: 'Freshly brewed coffee served over ice', price: '$3.50' }
    ],
    tea: [
      { id: 'tea-1', name: 'Green Tea', description: 'Light and refreshing traditional green tea', price: '$3.00' },
      { id: 'tea-2', name: 'Chai Latte', description: 'Spiced tea with steamed milk', price: '$4.50' },
      { id: 'tea-3', name: 'Earl Grey', description: 'Classic bergamot-scented black tea', price: '$3.50' },
      { id: 'tea-4', name: 'Herbal Tea', description: 'Selection of caffeine-free herbal blends', price: '$3.00' }
    ],
    pastries: [
      { id: 'pastry-1', name: 'Croissant', description: 'Buttery, flaky French pastry', price: '$3.50' },
      { id: 'pastry-2', name: 'Muffin', description: 'Freshly baked daily - various flavors', price: '$3.00' },
      { id: 'pastry-3', name: 'Danish', description: 'Sweet pastry with fruit filling', price: '$4.00' },
      { id: 'pastry-4', name: 'Bagel & Cream Cheese', description: 'Fresh bagel with cream cheese', price: '$4.50' },
      { id: 'pastry-5', name: 'Scone', description: 'Traditional British pastry', price: '$3.50' }
    ],
    food: [
      { id: 'food-1', name: 'Avocado Toast', description: 'Smashed avocado on artisan bread', price: '$8.50' },
      { id: 'food-2', name: 'Breakfast Sandwich', description: 'Egg, cheese, and choice of meat', price: '$7.50' },
      { id: 'food-3', name: 'Quiche', description: 'Daily selection of savory quiches', price: '$6.50' },
      { id: 'food-4', name: 'Salad Bowl', description: 'Fresh mixed greens with seasonal toppings', price: '$9.00' }
    ]
  };

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'tea', name: 'Tea', icon: '🍵' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'food', name: 'Food', icon: '🥗' }
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Our Menu</h1>
          <p className="lead">Carefully crafted beverages and delicious treats</p>
        </div>

        {/* Category Navigation */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`btn ${activeCategory === category.id ? 'btn-coffee' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="coffee-card p-4">
              <h3 className="text-center mb-4">
                {categories.find(cat => cat.id === activeCategory)?.icon} 
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <div className="row">
                {menuItems[activeCategory].map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="menu-item">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="flex-grow-1">
                          <h5>{item.name}</h5>
                          <p className="text-muted mb-2">{item.description}</p>
                        </div>
                        <div className="text-end">
                          <div className="menu-price mb-2">{item.price}</div>
                          <button
                            className="btn btn-coffee btn-sm"
                            onClick={() => addItem(item)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="coffee-card p-4 text-center">
              <h4 className="mb-3">🎉 Daily Specials</h4>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <h6>Happy Hour</h6>
                    <small>2-4 PM: 20% off all drinks</small>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <h6>Student Discount</h6>
                    <small>10% off with valid ID</small>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <h6>Loyalty Program</h6>
                    <small>Buy 9, get 10th free</small>
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

export default Menu;
