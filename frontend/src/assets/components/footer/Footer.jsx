import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Star,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Transform Your Institution?</h2>
        <p >
          Join thousands of educational institutions already using our platform to streamline their operations
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">
            <Star size={16} style={{ marginRight: "6px" }} />
            Start Free Trial
          </button>
          <button className="btn-outline">View Demo</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-line"></div>
          <p>
            Comprehensive digital management solution for educational institutions. Streamline operations,
            enhance communication, and improve learning outcomes.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Student Portal</li>
            <li>Faculty Portal</li>
            <li>Admin Panel</li>
            <li>Attendance System</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><Mail size={16} /> info@edtech.com</p>
          <p><Phone size={16} /> +1 (555) 123-4567</p>
          <p><MapPin size={16} /> 123 Education St, Learning City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 EdTech. All rights reserved. | Built with ❤️ for Education</p>
      </div>
    </div>
  );
};

export default Footer;
