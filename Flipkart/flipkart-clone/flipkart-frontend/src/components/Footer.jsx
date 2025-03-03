import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1 - About & Help */}
        <div className="footer-column">
          <h4>ABOUT</h4>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>HELP</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Section 2 - Social & Consumer Policy */}
        <div className="footer-column">
          <h4>SOCIAL</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li>Return Policy</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Section 3 - Payment & Address */}
        <div className="footer-column">
          <h4>PAYMENT METHODS</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Visa_logo.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Flipkart Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
