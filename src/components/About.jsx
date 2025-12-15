import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaNetworkWired, FaUserTie, FaShieldAlt, FaChartLine, FaCheckCircle } from 'react-icons/fa';
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
                        className="text-lg text-white mb-8 max-w-3xl leading-relaxed" // Changed text color to white for better contrast
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

            {/* Key Differentiators Section — UPDATED */}
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