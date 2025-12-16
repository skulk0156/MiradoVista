import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaNetworkWired, FaUserTie, FaShieldAlt, FaChartLine, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import aboutpiv from '../assets/Aboutpiv.png'; // Update this path to match your image location

// --- Animation Variants ---
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const headingVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const DifferentiatorCard = ({ icon, title, description }) => (
    <motion.div 
        className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all h-full"
        variants={itemVariant}
    >
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#8B4513] mb-2 leading-relaxed">{title}</h3>
        <p className="text-[#333333] leading-relaxed">{description}</p>
    </motion.div>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        error: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        setStatus(prev => ({ ...prev, submitting: true }));
        
        try {
            // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
            const response = await fetch('https://formspree.io/f/xyzraelk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setStatus({
                    submitted: true,
                    submitting: false,
                    error: false
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setStatus({
                submitted: false,
                submitting: false,
                error: true
            });
            console.error('Error submitting form:', error);
        }
    };

    return (
        <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            variants={itemVariant}
        >
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6">Get In Touch</h3>
            
            {status.submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                        ></textarea>
                    </div>
                    
                    {status.error && (
                        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                            <p>There was an error submitting your form. Please try again later.</p>
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        disabled={status.submitting}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#c9a231] hover:to-[#e6b73f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status.submitting ? 'Submitting...' : 'Send Message'}
                    </button>
                </form>
            )}
        </motion.div>
    );
};

const AboutUs = () => {
    return (
        <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
            {/* Animated Gold Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
            
            {/* Hero/Introduction Section */}
            <section 
                className="relative px-6 py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${aboutpiv})` }}
            >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                
                <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h1
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-[#EFBF04] bg-clip-text text-transparent font-[Playfair_Display] mb-6 pb-2"
                    >
                        Building Careers, Empowering Businesses.
                    </motion.h1>
                    <motion.p
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-white mb-8 max-w-3xl leading-relaxed"
                    >
                        MiradoVista HR is a people-focused talent and HR consulting firm, enabling businesses to build high-performing teams while supporting professionals in achieving meaningful career growth.
                    </motion.p>
                    <motion.div
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-wrap gap-6"
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#D4AF37]/20 shadow-md">
                            <p className="text-[#8B4513] font-semibold leading-relaxed"><span className="text-[#D4AF37]">Founded:</span> 2025</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#D4AF37]/20 shadow-md">
                            <p className="text-[#8B4513] font-semibold leading-relaxed"><span className="text-[#D4AF37]">Headquarters:</span> Pune, India</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, and Values Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display] mb-12 leading-relaxed"
                    >
                        Our Guiding Principles
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8 mb-16"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div 
                            className="p-8 rounded-3xl bg-gradient-to-br from-[#F5DFB0]/30 to-[#D4AF37]/20 border border-[#D4AF37]/30 shadow-lg"
                            variants={itemVariant}
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                                <FaBullseye className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 leading-relaxed">Our Mission</h3>
                            <p className="text-[#333333] leading-relaxed">To redefine the recruitment landscape by offering ethical, efficient, and tailored talent solutions that drive sustainable success for our clients and candidates.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="p-8 rounded-3xl bg-gradient-to-br from-[#F5DFB0]/30 to-[#D4AF37]/20 border border-[#D4AF37]/30 shadow-lg"
                            variants={itemVariant}
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                                <FaEye className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 leading-relaxed">Our Vision</h3>
                            <p className="text-[#333333] leading-relaxed">To be recognized as India's foremost HR consultancy, known for innovation, integrity, and unparalleled expertise in bridging the gap between talent and opportunity.</p>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#D4AF37]/20 shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6 text-center leading-relaxed">Our Core Values</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-[#D4AF37] mt-1" />
                                <span className="text-[#333333] leading-relaxed">Integrity and Transparency</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-[#D4AF37] mt-1" />
                                <span className="text-[#333333] leading-relaxed">Client-Centric Approach</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-[#D4AF37] mt-1" />
                                <span className="text-[#333333] leading-relaxed">Professional Excellence</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-[#D4AF37] mt-1" />
                                <span className="text-[#333333] leading-relaxed">Continuous Innovation</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Differentiators Section */}
            <section 
                className="py-24 text-white"
                style={{
                    background: "linear-gradient(to right, #0b0e10, #36454f)"
                }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-4xl font-bold text-center text-[#F0C14B] font-[Playfair_Display] mb-4 leading-relaxed"
                    >
                        Why partner with MiradoVista HR?
                    </motion.h2>
                    <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">Our commitment goes beyond placements—we build lasting relationships.</p>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <DifferentiatorCard
                            icon={<FaNetworkWired className="text-white text-xl" />}
                            title="Vast Talent Network"
                            description="Access to a premium, curated database of top-tier talent, specialized in various domains across India's major cities."
                        />
                        <DifferentiatorCard
                            icon={<FaUserTie className="text-white text-xl" />}
                            title="Sector Expertise"
                            description="Our consultants are specialists, not generalists, ensuring a deep understanding of industry-specific requirements and cultures."
                        />
                        <DifferentiatorCard
                            icon={<FaShieldAlt className="text-white text-xl" />}
                            title="Ethical & Confidential"
                            description="We adhere to the highest standards of professional ethics, ensuring complete confidentiality for both clients and candidates."
                        />
                        <DifferentiatorCard
                            icon={<FaChartLine className="text-white text-xl" />}
                            title="Proven Track Record"
                            description="Over 8 years of successful placements in IT, Finance, Marketing, and Operations, contributing to client growth."
                        />
                    </motion.div>
                </div>
            </section>
            
            {/* Statistics Section */}
            <section className="py-24 bg-gradient-to-br from-[#FFF9E5] to-[#FAF8F3]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center" variants={itemVariant}>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">2500+</p>
                            <p className="text-lg text-[#333333] leading-relaxed">Successful Placements</p>
                        </motion.div>
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center" variants={itemVariant}>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">50+</p>
                            <p className="text-lg text-[#333333] leading-relaxed">Cities Covered in India</p>
                        </motion.div>
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center" variants={itemVariant}>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">8</p>
                            <p className="text-lg text-[#333333] leading-relaxed">Years of Expertise</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section - NEW */}
            <section className="py-24 bg-gradient-to-br from-[#F5DFB0]/20 to-[#D4AF37]/10">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display] mb-12 leading-relaxed"
                    >
                        Connect With Us
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            variants={containerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-6"
                        >
                            <motion.div variants={itemVariant} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#8B4513] mb-1">Email Us</h3>
                                    <p className="text-[#333333]">contact@miradovistahr.com</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariant} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#8B4513] mb-1">Call Us</h3>
                                    <p className="text-[#333333]">+91 98765 43210</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariant} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#8B4513] mb-1">Visit Us</h3>
                                    <p className="text-[#333333]">MiradoVista HR Solutions<br />
                                    123 Business Park, Sector 15<br />
                                    Pune, Maharashtra 411001<br />
                                    India</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
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

export default AboutUs;