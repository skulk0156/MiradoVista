import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane, FaClock } from 'react-icons/fa';
import logo from "../assets/miradovista-logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact Us", href: "/contact" },
    ];

    const services = [
        { name: "HR Consulting", href: "/services/hr-consulting" },
        { name: "Legal Solutions", href: "/services/legal-consulting" },
        { name: "IT Services", href: "/services/it-consulting" },
        { name: "Office Supplies", href: "/services/stationery-supplies" },
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, href: "#" },
        { icon: <FaTwitter />, href: "#" },
        { icon: <FaLinkedinIn />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-[Poppins] overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
                }}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* Column 1: About & Logo */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4 group">
                            <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <img src={logo} alt="MiradoVista HR Logo" className="h-12 bg-gray-800 rounded-full p-1 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <span className="text-2xl font-bold tracking-wider text-white">MiradoVista HR</span>
                        </Link>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            India's leading placement consultant, connecting top talent with premier opportunities. We are your dedicated partner in growth.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F0C14B] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                                    aria-label="Social Media Link"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        
                        {/* Newsletter Signup */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <FaPaperPlane className="text-[#D4AF37]" />
                                Stay Updated
                            </h4>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="flex-1 px-4 py-2 rounded-lg bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-gray-700 transition-all"
                                />
                                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-gray-900 font-medium hover:shadow-lg transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold font-[Playfair_Display] text-[#D4AF37] mb-4 relative">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B]"></span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href} 
                                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 transition-all duration-300 group-hover:w-6 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div>
                        <h4 className="text-xl font-bold font-[Playfair_Display] text-[#D4AF37] mb-4 relative">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B]"></span>
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link 
                                        to={service.href} 
                                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 transition-all duration-300 group-hover:w-6 group-hover:mr-2"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold font-[Playfair_Display] text-[#D4AF37] mb-4 relative">
                            Get In Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B]"></span>
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-[#D4AF37]" />
                                </div>
                                <p className="text-gray-300">
                                    Sector-76, Noida, <br />
                                    Uttar Pradesh, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                                    <FaPhone className="text-[#D4AF37]" />
                                </div>
                                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                                    +91 98765 43210
                                </a>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                                    <FaEnvelope className="text-[#D4AF37]" />
                                </div>
                                <a href="mailto:info@miradovista.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                                    info@miradovista.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                                    <FaClock className="text-[#D4AF37]" />
                                </div>
                                <p className="text-gray-300">
                                    Mon-Fri: 9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © {currentYear} MiradoVista HR. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link to="/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Powered by <a 
                            href="https://wordlanetech.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#D4AF37] hover:text-[#F0C14B] transition-colors duration-300"
                        >
                            Word Lane Tech
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;