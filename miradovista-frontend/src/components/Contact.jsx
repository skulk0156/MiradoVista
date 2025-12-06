import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <div className="bg-gradient-to-b from-[#fdf6e3] to-[#f7f0db] text-gray-800 font-[Poppins] py-24 relative overflow-x-hidden">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-center px-6 mb-24"
            >
                <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#d1b06b] to-[#f5e1b0]">
                    Let's Discuss Your Business Needs
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
                    We're ready to partner with you. Fill out the form or use the contact details below.
                </p>
            </motion.section>

            {/* Contact Grid */}
            <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="p-10 bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500"
                >
                    <h2 className="text-2xl font-[Playfair_Display] font-bold text-[#a5864d] mb-6">
                        Send Us a Message
                    </h2>

                    {isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mb-4 p-4 bg-green-100 text-green-900 rounded-xl text-center shadow-md"
                        >
                            ✅ Thank you! Your message has been received.
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                            <input
                                type="text" name="name" value={formData.name} onChange={handleChange} required
                                className="w-full px-5 py-3 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#d1b06b] shadow-inner transition duration-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange} required
                                className="w-full px-5 py-3 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#d1b06b] shadow-inner transition duration-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">I am interested in...</label>
                            <select
                                name="service" value={formData.service} onChange={handleChange} required
                                className="w-full px-5 py-3 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#d1b06b] shadow-inner transition duration-300"
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
                            <label className="block mb-1 font-medium text-gray-700">Your Message</label>
                            <textarea
                                name="message" rows="5" value={formData.message} onChange={handleChange} required
                                className="w-full px-5 py-3 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#d1b06b] shadow-inner transition duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-[#d1b06b] to-[#f5e1b0] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(213,184,106,0.7)] transition duration-300"
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
                    className="p-10 bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500 space-y-6"
                >
                    <h2 className="text-2xl font-[Playfair_Display] font-bold text-[#a5864d]">Our Details</h2>
                    
                    <div className="flex items-start gap-4">
                        <i className="fas fa-map-marker-alt text-[#c6a25d] text-2xl mt-1"></i>
                        <p>
                            <strong>Corporate Office</strong><br/>
                            123, Stellar Business Park, 5th Floor<br/>
                            New Delhi, India 110001
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <i className="fas fa-phone text-[#c6a25d] text-2xl mt-1"></i>
                        <p>
                            <strong>Phone</strong><br/>
                            +91-98765 43210 (Sales)<br/>
                            +91-99887 76655 (Support)
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <i className="fas fa-envelope text-[#c6a25d] text-2xl mt-1"></i>
                        <p>
                            <strong>Email</strong><br/>
                            <a href="mailto:info@miradovistahr.com" className="text-[#8c6a32] hover:underline">info@miradovistahr.com</a><br/>
                            <a href="mailto:support@miradovistahr.com" className="text-[#8c6a32] hover:underline">support@miradovistahr.com</a>
                        </p>
                    </div>

                    <div className="map-placeholder w-full h-64 bg-gradient-to-r from-[#f5e1b0] to-[#dfc07a] rounded-2xl shadow-inner flex items-center justify-center text-gray-700 font-semibold">
                        Map Placeholder
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
