import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    // Function to get the current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-content-wrapper">
                {/* Column 1: Company Info / Logo */}
                <div className="footer-column footer-info">
                    <h3 className="footer-logo">MiradoVista HR</h3>
                    <p className="footer-tagline">
                        Strategic partnership for HR, Legal, IT Consulting, and essential business supply.
                    </p>
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/blogs">Blog & Insights</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services Hub */}
                <div className="footer-column footer-services">
                    <h4>Our Expertise</h4>
                    <ul>
                        <li><Link to="/services/hr-consulting">HR Consulting</Link></li>
                        <li><Link to="/services/legal-consulting">Legal & Compliance</Link></li>
                        <li><Link to="/services/it-consulting">IT Consulting</Link></li>
                        <li><Link to="/services/stationery-supplies">Office Supplies</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact Information */}
                <div className="footer-column footer-contact">
                    <h4>Get In Touch</h4>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> 123, Stellar Business Park, New Delhi, India
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> +91-98765 43210
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> <a href="mailto:info@miradovistahr.com">info@miradovistahr.com</a>
                    </p>
                </div>
            </div>

            {/* Bottom Bar: Copyright and Legal */}
            <div className="footer-bottom-bar">
                <p>&copy; {currentYear} MiradoVista HR. All Rights Reserved.</p>
                <div className="legal-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <span>|</span>
                    <Link to="/terms">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;