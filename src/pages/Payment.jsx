import React, { useState } from 'react';
import '../styles/Payment.css'; // Your custom CSS file
import PaymentModal from '../components/PaymentModal'; // Import the new PaymentModal component

function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
  });

  // Handle input changes to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // Basic validation
    if (!formData.amount || !formData.name || !formData.email) {
      alert('Please fill in all fields.'); // Use a custom modal/toast in a real app
      return;
    }

    // You would typically send this data to a backend here
    console.log('Payment form submitted:', formData);

    setShowModal(true); // Open the payment modal
  };

  // Close modal handler
  const handleCloseModal = () => {
    setShowModal(false);
    // Optionally clear form data after closing modal
    setFormData({ amount: '', name: '', email: '' });
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-heading">Make a Payment</h2>
        <p className="payment-description">Securely process your payments for our services.</p>

        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Amount (INR)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="e.g., 5000"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="payment-button">Pay Now</button>
        </form>

        <div className="payment-note">
          <p>For any payment related queries, please contact our <a href="/contact" className="payment-link">support team</a>.</p>
        </div>
      </div>

      {/* Payment Modal Component */}
      {showModal && (
        <PaymentModal
          show={showModal}
          handleClose={handleCloseModal}
          paymentDetails={formData}
        />
      )}
    </div>
  );
}

export default Payment;