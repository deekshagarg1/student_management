import React from 'react';
import './FeesDashboard.css';

const FeesDashboard = () => {
  return (
    <div className="fees-container">
      <h2>Fees</h2>
      <p>Welcome back, John Smith! Here's your academic overview.</p>

      <div className="cards">
        <div className="card total">
          <span>💲</span>
          <h4>Total Fee</h4>
          <h3>₹15,000</h3>
        </div>
        <div className="card paid">
          <span>✅</span>
          <h4>Paid Amount</h4>
          <h3>₹10,000</h3>
        </div>
        <div className="card pending">
          <span>❗</span>
          <h4>Pending Amount</h4>
          <h3>₹5,000</h3>
        </div>
      </div>

      <div className="installments">
        <h3>Fee Installments</h3>

        <div className="installment">
          <div>
            <strong>1st Installment</strong>
            <p>Due: 2024-01-15</p>
          </div>
          <div className="status paid-status">₹5,000 - Paid</div>
        </div>

        <div className="installment">
          <div>
            <strong>2nd Installment</strong>
            <p>Due: 2024-02-15</p>
          </div>
          <div className="status paid-status">₹5,000 - Paid</div>
        </div>

        <div className="installment">
          <div>
            <strong>3rd Installment</strong>
            <p>Due: 2024-03-15</p>
          </div>
          <div className="status pending-status">₹5,000 - Pending</div>
        </div>

        <div className="payment-due">
          <div>
            <p><strong>Payment Due</strong></p>
            <p>Next payment due: 2024-02-15</p>
          </div>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>

      <div className="web-dev-links">
        <h3>Web Development Courses</h3>
        <ul>
          <li><a href="https://www.w3schools.com/html/" target="_blank">HTML Basics</a></li>
          <li><a href="https://www.w3schools.com/css/" target="_blank">CSS Guide</a></li>
          <li><a href="https://javascript.info/" target="_blank">JavaScript Mastery</a></li>
          <li><a href="https://react.dev/learn" target="_blank">React Official Docs</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FeesDashboard;
