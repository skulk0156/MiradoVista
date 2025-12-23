import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaNetworkWired, FaUserTie, FaShieldAlt, FaChartLine, FaCheckCircle, FaClock, FaSearch, FaHandshake, FaLightbulb, FaUsers, FaAward, FaRocket } from 'react-icons/fa';
import aboutpiv from '../assets/Aboutpiv.png';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/config';

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

// New component for Core Values
const CoreValueCard = ({ icon, title, description, index }) => (
    <motion.div 
        className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#FAF8F3] border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center"
        variants={itemVariant}
        custom={index}
    >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#8B4513] mb-3 leading-relaxed">{title}</h3>
        <p className="text-[#333333] leading-relaxed flex-grow">{description}</p>
    </motion.div>
);

const AboutUs = () => {
    // State for unique visitor counter display only
    const [uniqueVisitorCount, setUniqueVisitorCount] = useState(0);
    const [loading, setLoading] = useState(true);

    // Only listen for real-time updates, don't increment
    useEffect(() => {
        try {
            // Listen for real-time updates to unique visitor count
            const totalRef = ref(database, 'unique_visitors/total');
            const unsubscribe = onValue(totalRef, (snapshot) => {
                const count = snapshot.val() || 0;
                setUniqueVisitorCount(count);
                setLoading(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.error("Error fetching unique visitor count:", error);
            setLoading(false);
            setUniqueVisitorCount(0);
        }
    }, []);

    // New data for why choose us section
    const whyChooseUs = [
        {
            title: "Quality-First Hiring",
            desc: "We focus on precision, not volume — delivering only well-screened, role-ready candidates who align with your business needs and culture.",
            icon: <FaHandshake className="text-white text-xl" />
        },
        {
            title: "Wide Talent Network",
            desc: "With a strong presence across Tier 1 & Tier 2 cities, our network helps clients access diverse talent and candidates access nationwide opportunities.",
            icon: <FaNetworkWired className="text-white text-xl" />
        },
        {
            title: "Fast Turnaround Time",
            desc: "Our structured sourcing and screening process ensures timely delivery without compromising on candidate quality.",
            icon: <FaClock className="text-white text-xl" />
        },
        {
            title: "Transparent & Ethical Approach",
            desc: "No hidden terms, no unclear processes. We maintain complete transparency, confidentiality, and integrity throughout the hiring cycle",
            icon: <FaShieldAlt className="text-white text-xl" />
        }
    ];

    // Core Values data
    const coreValues = [
        {
            title: "Integrity and Transparency",
            desc: "We operate with complete honesty and openness in all our dealings, ensuring trust and long-term relationships with clients and candidates.",
            icon: <FaShieldAlt className="text-white text-xl" />
        },
        {
            title: "Client-Centric Approach",
            desc: "Your success is our priority. We tailor our solutions to meet your unique needs and exceed your expectations at every step.",
            icon: <FaUsers className="text-white text-xl" />
        },
        {
            title: "Professional Excellence",
            desc: "We maintain the highest standards of professionalism, expertise, and quality in every aspect of our recruitment process.",
            icon: <FaAward className="text-white text-xl" />
        },
        {
            title: "Continuous Innovation",
            desc: "We constantly evolve our methods and embrace new technologies to provide cutting-edge recruitment solutions.",
            icon: <FaRocket className="text-white text-xl" />
        }
    ];

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
                        className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-[#F0C14B] bg-clip-text text-transparent font-[Playfair_Display] mb-6 pb-2"
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
                            <p className="text-[#333333] leading-relaxed">To build meaningful connections between people and organizations by delivering thoughtful, ethical, and insight-driven recruitment solutions—helping professionals find roles where they can grow with confidence, and enabling businesses to build teams that are aligned, capable, and future-ready</p>
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
                    
                    {/* Core Values Section - Enhanced */}
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h3 
                            className="text-3xl font-bold text-center text-[#D4AF37] font-[Playfair_Display] mb-12 leading-relaxed"
                            variants={headingVariant}
                        >
                            Our Core Values
                        </motion.h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreValues.map((value, index) => (
                                <CoreValueCard
                                    key={index}
                                    icon={value.icon}
                                    title={value.title}
                                    description={value.desc}
                                    index={index}
                                />
                            ))}
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
                        {whyChooseUs.map((item, index) => (
                            <DifferentiatorCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.desc}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Statistics Section */}
            <section id="visitor-stats" className="py-24 bg-gradient-to-br from-[#FFF9E5] to-[#FAF8F3]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="grid md:grid-cols-4 gap-8"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center" variants={itemVariant}>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">250+</p>
                            <p className="text-lg text-[#333333] leading-relaxed">Successful Placements</p>
                        </motion.div>
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center" variants={itemVariant}>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">10+</p>
                            <p className="text-lg text-[#333333] leading-relaxed">Cities Covered in India</p>
                        </motion.div>
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center" variants={itemVariant}>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">4</p>
                            <p className="text-lg text-[#333333] leading-relaxed">Years of Expertise</p>
                        </motion.div>
                        <motion.div className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center relative" variants={itemVariant}>
                            <div className="absolute top-2 right-2">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-green-500 rounded-full"
                                    title="Unique visitor count"
                                />
                            </div>
                            <p className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 leading-relaxed">
                                {loading ? (
                                    <span className="inline-block animate-pulse">...</span>
                                ) : (
                                    <>
                                        {uniqueVisitorCount}+
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [0, 1.2, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="inline-block ml-2"
                                            title="Unique visitors"
                                        >
                                            <FaUsers className="text-2xl text-[#D4AF37]" />
                                        </motion.div>
                                    </>
                                )}
                            </p>
                            <p className="text-lg text-[#333333] leading-relaxed flex items-center justify-center gap-2">
                                Unique Visitors
                                <span className="text-xs text-green-600 font-semibold animate-pulse">LIVE</span>
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Unique visitors only (no refreshes)</p>
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