import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
            {/* Animated Gold Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
            
            {/* Floating Gold Glow */}
            <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
            
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative px-6 py-24 overflow-hidden"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6">
                        Let's Discuss Your Business Needs
                    </h1>
                    <p className="text-lg text-[#333333] max-w-3xl mx-auto">
                        We're ready to partner with you. Fill out the form or use the contact details below.
                    </p>
                </div>
            </motion.section>

            {/* Contact Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all duration-500"
                    >
                        <h2 className="text-3xl font-bold text-[#D4AF37] font-[Playfair_Display] mb-6">
                            Send Us a Message
                        </h2>

                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mb-6 p-4 bg-green-100 text-green-900 rounded-xl text-center shadow-md flex items-center justify-center gap-2"
                            >
                                <FaCheckCircle className="text-green-600" />
                                Thank you! Your message has been received.
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block mb-2 font-medium text-[#333333]">Full Name</label>
                                <input
                                    type="text" name="name" value={formData.name} onChange={handleChange} required
                                    className="w-full px-5 py-3 rounded-2xl border border-[#D4AF37]/20 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-inner transition duration-300"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-[#333333]">Email Address</label>
                                <input
                                    type="email" name="email" value={formData.email} onChange={handleChange} required
                                    className="w-full px-5 py-3 rounded-2xl border border-[#D4AF37]/20 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-inner transition duration-300"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-[#333333]">I am interested in...</label>
                                <select
                                    name="service" value={formData.service} onChange={handleChange} required
                                    className="w-full px-5 py-3 rounded-2xl border border-[#D4AF37]/20 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-inner transition duration-300"
                                >
                                    <option value="" disabled>Select a Service</option>
                                    <option value="hr-consulting">HR Consulting Services</option>
                                    <option value="legal-consulting">Legal Consulting Solutions</option>
                                    <option value="it-consulting">IT Consulting Services</option>
                                    <option value="stationery">Office Stationery Supplies</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-[#333333]">Your Message</label>
                                <textarea
                                    name="message" rows="5" value={formData.message} onChange={handleChange} required
                                    className="w-full px-5 py-3 rounded-2xl border border-[#D4AF37]/20 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-inner transition duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition duration-300"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all duration-500 space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-[#D4AF37] font-[Playfair_Display] mb-6">Our Details</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#8B4513] mb-1">Corporate Office</h3>
                                    <p className="text-[#333333]">
                                        Sector-76, Noida<br/>
                                        Uttar Pradesh, India 201301
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#8B4513] mb-1">Phone</h3>
                                    <p className="text-[#333333]">
                                        +91-98765 43210 (Sales)<br/>
                                        +91-99887 76655 (Support)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#8B4513] mb-1">Email</h3>
                                    <p className="text-[#333333]">
                                        <a href="mailto:info@miradovista.com" className="text-[#D4AF37] hover:text-[#8B4513] transition-colors">info@miradovista.com</a><br/>
                                        <a href="mailto:support@miradovista.com" className="text-[#D4AF37] hover:text-[#8B4513] transition-colors">support@miradovista.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#8B4513] mb-1">Business Hours</h3>
                                    <p className="text-[#333333]">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br/>
                                        Saturday: 10:00 AM - 4:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold text-[#8B4513] mb-4">Find Us</h3>
                            <div className="w-full h-64 bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 rounded-2xl shadow-inner flex items-center justify-center text-[#8B4513] font-medium border border-[#D4AF37]/20">
                                <div className="text-center">
                                    <FaMapMarkerAlt className="text-4xl mb-2 mx-auto" />
                                    <p>Interactive Map</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gradient animation */}
            <style>{`
                @keyframes gradientBackground {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradientBackground {
                    animation: gradientBackground 30s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default Contact;