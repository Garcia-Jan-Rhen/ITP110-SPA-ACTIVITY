import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Contact Us</h1>
          <p className="lead">We'd love to hear from you! Get in touch with us.</p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-5">
            <div className="coffee-card p-4 h-100">
              <h4 className="mb-4">📍 Visit Us</h4>
              <div className="mb-4">
                <h6>Address</h6>
                <p className="text-muted">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>
              
              <div className="mb-4">
                <h6>Hours</h6>
                <p className="text-muted">
                  Monday - Friday: 6:00 AM - 8:00 PM<br />
                  Saturday: 7:00 AM - 9:00 PM<br />
                  Sunday: 8:00 AM - 6:00 PM
                </p>
              </div>

              <div className="mb-4">
                <h6>Contact Info</h6>
                <p className="text-muted">
                  📞 (555) 123-COFFEE<br />
                  📧 hello@kopi.com<br />
                  🌐 www.kopi.com
                </p>
              </div>

              <div>
                <h6>Follow Us</h6>
                <div className="d-flex gap-2">
                  <span className="fs-4">📘</span>
                  <span className="fs-4">📷</span>
                  <span className="fs-4">🐦</span>
                  <span className="fs-4">📌</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="coffee-card p-4">
              <h4 className="mb-4">💬 Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-coffee">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="coffee-card p-4">
              <h4 className="text-center mb-4">🗺️ Find Us</h4>
              <div className="text-center">
                <div className="bg-light p-5 rounded">
                  <div className="fs-1 mb-3">📍</div>
                  <h5>Interactive Map</h5>
                  <p className="text-muted">
                    Click to get directions to KOPI Coffee Shop
                  </p>
                  <button className="btn btn-outline-secondary">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="coffee-card p-4">
              <h4 className="text-center mb-4">❓ Frequently Asked Questions</h4>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                      Do you offer Wi-Fi?
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! We provide free high-speed Wi-Fi for all our customers. Perfect for remote work or studying.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                      Do you have outdoor seating?
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we have a beautiful garden area with outdoor seating, perfect for enjoying your coffee in the fresh air.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                      Can I host events at KOPI?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely! We offer private event hosting for meetings, parties, and special occasions. Contact us for more details.
                    </div>
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

export default Contact;
