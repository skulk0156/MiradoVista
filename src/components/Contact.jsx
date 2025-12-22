import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaCheckCircle,
    FaExclamationCircle,
    FaSpinner
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

/**
 * A professional contact form component with validation and email submission.
 * Includes success/error feedback and loading states.
 */
const Contact = () => {
    // --- State Management ---
    // Manages all form data, submission status, errors, and UI states.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // --- Configuration ---
    // EmailJS credentials. It's best practice to store these in environment variables for production.
    const EMAILJS_SERVICE_ID = 'service_xq8cl85';
    const EMAILJS_TEMPLATE_ID = 'template_dfjjfm5';
    const EMAILJS_PUBLIC_KEY = '38Sl428DjprrRZRgT';

    // --- Effects ---
    // Initialize EmailJS service when the component mounts.
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

    // --- Handlers ---
    /**
     * Validates the form data against a set of rules.
     * @returns {object} An object containing any validation errors.
     */
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        return newErrors;
    };

    /**
     * Handles input changes and updates the form state.
     * @param {object} e - The event object from the input element.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    /**
     * Handles the form submission process, including validation, API calls, and UI feedback.
     * @param {object} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        
        setIsSubmitting(true);
        setErrors({});
        
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                service: formData.service,
                message: formData.message,
            };
            
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            console.log("Email sent successfully");
            setIsSubmitted(true);
            setFormData({ name: '', email: '', service: '', message: '' });
            
            // Hide success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error) {
            console.error("Error sending email:", error);
            setErrors({ submit: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Animation Variants ---
    // Defines the animation for the fade-in effect.
    const fadeUp = { 
        hidden: { opacity: 0, y: 20 }, 
        visible: { opacity: 1, y: 0 } 
    };

    // --- Render ---
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

            {/* Contact Form & Details Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* --- Contact Form --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all duration-500 text-white"
                        style={{
                            backgroundImage: "linear-gradient(to right, #0b0e10, #36454f)"
                        }}
                    >
                        <h2 className="text-3xl font-bold text-[#D4AF37] font-[Playfair_Display] mb-6">
                            Send Us a Message
                        </h2>

                        {/* --- Success/Error Feedback --- */}
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-6 p-4 bg-green-100 text-green-900 rounded-xl text-center shadow-md flex items-center justify-center gap-2"
                                >
                                    <FaCheckCircle className="text-green-600" />
                                    <span>Thank you! Your message has been received. We'll get back to you shortly.</span>
                                </motion.div>
                            )}
                            {errors.submit && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-100 text-red-900 rounded-xl text-center shadow-md flex items-center justify-center gap-2"
                                >
                                    <FaExclamationCircle className="text-red-600" />
                                    <span>{errors.submit}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* --- Form Fields --- */}
                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                                <input
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required
                                    aria-invalid={errors.name ? 'true' : 'false'}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    className={`w-full px-5 py-3 rounded-2xl bg-white/20 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors duration-300`}
                                />
                                {errors.name && (
                                    <p id="name-error" className="mt-1 text-sm text-red-300 flex items-center gap-1">
                                        <FaExclamationCircle className="text-xs" />
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                                <input
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className={`w-full px-5 py-3 rounded-2xl bg-white/20 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors duration-300`}
                                />
                                {errors.email && (
                                    <p id="email-error" className="mt-1 text-sm text-red-300 flex items-center gap-1">
                                        <FaExclamationCircle className="text-xs" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="service" className="block mb-2 font-medium">I am interested in...</label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        name="service" 
                                        value={formData.service} 
                                        onChange={handleChange} 
                                        required
                                        aria-invalid={errors.service ? 'true' : 'false'}
                                        aria-describedby={errors.service ? 'service-error' : undefined}
                                        className={`w-full px-5 py-3 rounded-2xl bg-white/20 border ${errors.service ? 'border-red-500' : 'border-white/20'} text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] appearance-none focus:bg-[#0b0e10] transition-colors duration-300`}
                                    >
                                        <option value="" disabled className="bg-[#0b0e10]">Select a Sector</option>
                                        <option value="it" className="bg-[#0b0e10]">IT</option>
                                        <option value="real-estate" className="bg-[#0b0e10]">Real Estate</option>
                                        <option value="bfsi" className="bg-[#0b0e10]">BFSI</option>
                                        <option value="edtech" className="bg-[#0b0e10]">EdTech</option>
                                        <option value="automotive-manufacturing" className="bg-[#0b0e10]">Automobile &  Manufacturing</option>
                                        <option value="retail-fmcg" className="bg-[#0b0e10]">Retail & FMCG</option>
                                        <option value="logistics-ecommerce" className="bg-[#0b0e10]">Logistic & E-commerce</option>
                                        <option value="general" className="bg-[#0b0e10]">General Inquiry</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="fill-current h-4 w-4 text-[#D4AF37]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                                {errors.service && (
                                    <p id="service-error" className="mt-1 text-sm text-red-300 flex items-center gap-1">
                                        <FaExclamationCircle className="text-xs" />
                                        {errors.service}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message" 
                                    rows="5" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required
                                    aria-invalid={errors.message ? 'true' : 'false'}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    className={`w-full px-5 py-3 rounded-2xl bg-white/20 border ${errors.message ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none transition-colors duration-300`}
                                />
                                {errors.message && (
                                    <p id="message-error" className="mt-1 text-sm text-red-300 flex items-center gap-1">
                                        <FaExclamationCircle className="text-xs" />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* --- Submit Button --- */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                                    isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] hover:scale-105 hover:shadow-lg'
                                }`}
                            >
                                {isSubmitting ? <FaSpinner className="animate-spin" /> : null}
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </button>
                        </form>
                    </motion.div>

                    {/* --- Contact Details --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all duration-500 space-y-6 text-white"
                        style={{
                            backgroundImage: "linear-gradient(to right, #0b0e10, #36454f)"
                        }}
                    >
                        <h2 className="text-3xl font-bold text-[#D4AF37] font-[Playfair_Display] mb-6">
                            Our Details
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#D4AF37] mb-1">Corporate Office</h3>
                                    <p className="text-gray-200">Office No. 41/42 Tejaswani HSG,<br/> Baner Gaon, Haveli , Pune <br/>Maharashtra - 411045</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#D4AF37] mb-1">Phone</h3>
                                    <p className="text-gray-200">+91-8669667854</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#D4AF37] mb-1">Email</h3>
                                    <p>
                                        <a href="mailto:contact@miradovistahr.com" className="text-[#F0C14B] hover:underline">contact@miradovistahr.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#D4AF37] mb-1">Business Hours</h3>
                                    <p className="text-gray-200">Monday - Friday : 9 AM - 6 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Gradient Animation --- */}
            <style jsx>{`
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