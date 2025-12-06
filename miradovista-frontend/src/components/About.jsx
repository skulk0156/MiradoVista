import React from 'react';
import { motion } from 'framer-motion'; // <-- IMPORT FRAMER MOTION
import './AboutUs.css'; 

// --- Animation Variants ---
// 1. Container variant for staggering cards
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15 // Delay between each child card
        }
    }
};

// 2. Card/Item variant (Fade Up)
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

// 3. Simple Fade-in for Headings/CTAs (Slide from Left)
const headingVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

// Helper component for Differentiators (Now using motion)
const DifferentiatorCard = ({ iconClass, title, description }) => (
    // Apply itemVariant to the card
    <motion.div 
        className="differentiator-card"
        variants={itemVariant} // Applies to individual card
    >
        <i className={`icon-style ${iconClass}`}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </motion.div>
);

const AboutUs = () => {
    return (
        <div className="about-us-container">
            
            {/* 1. Hero/Introduction Section - Animate Heading and Tagline on LOAD */}
            <section className="about-hero">
                <div className="hero-content">
                    <motion.h1
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                        className="hero-heading"
                    >
                        Building Careers, Empowering Businesses.
                    </motion.h1>
                    <motion.p
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hero-tagline"
                    >
                        MiradoVista HR is your trusted partner in talent acquisition and human resource consulting. We connect ambitious professionals with leading companies across India, fostering growth for both individuals and enterprises.
                    </motion.p>
                    <div className="hero-details">
                        <p><strong>Founded:</strong> 2015</p>
                        <p><strong>Headquarters:</strong> Noida, India</p>
                    </div>
                </div>
            </section>

            {/* 2. Mission, Vision, and Values Section - Animate on SCROLL */}
            <section className="mission-vision-section">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible" // Triggers on scroll
                    viewport={{ once: true, amount: 0.5 }}
                    className="section-title"
                >
                    Our Guiding Principles
                </motion.h2>

                {/* Principles Grid (Container for Mission/Vision boxes) */}
                <motion.div
                    className="principles-grid"
                    variants={containerVariant} // Staggering starts here
                    initial="hidden"
                    whileInView="visible" // Triggers on scroll
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Mission Box (Individual Item) */}
                    <motion.div 
                        className="principle-box mission"
                        variants={itemVariant}
                    >
                        <i className="fas fa-bullseye"></i>
                        <h3>Our Mission</h3>
                        <p>To redefine the recruitment landscape by offering ethical, efficient, and tailored talent solutions that drive sustainable success for our clients and candidates.</p>
                    </motion.div>
                    
                    {/* Vision Box (Individual Item) */}
                    <motion.div 
                        className="principle-box vision"
                        variants={itemVariant}
                    >
                        <i className="fas fa-eye"></i>
                        <h3>Our Vision</h3>
                        <p>To be recognized as India’s foremost HR consultancy, known for innovation, integrity, and unparalleled expertise in bridging the gap between talent and opportunity.</p>
                    </motion.div>
                </motion.div>
                
                {/* Values list - Animate on scroll */}
                <motion.div
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="values-list"
                >
                    <h3 className="values-heading">Our Core Values</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i> Integrity and Transparency</li>
                        <li><i className="fas fa-check-circle"></i> Client-Centric Approach</li>
                        <li><i className="fas fa-check-circle"></i> Professional Excellence</li>
                        <li><i className="fas fa-check-circle"></i> Continuous Innovation</li>
                    </ul>
                </motion.div>
            </section>

            {/* 3. Key Differentiators Section - Animate on SCROLL */}
            <section className="differentiators-section">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="section-title"
                >
                    Why Partner with MiradoVista HR?
                </motion.h2>
                <p className="section-subtitle">Our commitment goes beyond placements—we build lasting relationships.</p>

                {/* Differentiator Grid (Container) */}
                <motion.div
                    className="differentiator-grid"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible" // Triggers on scroll
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* DifferentiatorCard is already modified above to use itemVariant */}
                    <DifferentiatorCard
                        iconClass="fas fa-network-wired"
                        title="Vast Talent Network"
                        description="Access to a premium, curated database of top-tier talent, specialized in various domains across India's major cities."
                    />
                    <DifferentiatorCard
                        iconClass="fas fa-user-tie"
                        title="Sector Expertise"
                        description="Our consultants are specialists, not generalists, ensuring a deep understanding of industry-specific requirements and cultures."
                    />
                    <DifferentiatorCard
                        iconClass="fas fa-shield-alt"
                        title="Ethical & Confidential"
                        description="We adhere to the highest standards of professional ethics, ensuring complete confidentiality for both clients and candidates."
                    />
                    <DifferentiatorCard
                        iconClass="fas fa-chart-line"
                        title="Proven Track Record"
                        description="Over 8 years of successful placements in IT, Finance, Marketing, and Operations, contributing to client growth."
                    />
                </motion.div>
            </section>
            
            {/* 4. Statistics Section - Animate on SCROLL */}
            <motion.section
                className="stats-section"
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div className="stat-box" variants={itemVariant}>
                    <p className="stat-number">2500+</p>
                    <p className="stat-label">Successful Placements</p>
                </motion.div>
                <motion.div className="stat-box" variants={itemVariant}>
                    <p className="stat-number">50+</p>
                    <p className="stat-label">Cities Covered in India</p>
                </motion.div>
                <motion.div className="stat-box" variants={itemVariant}>
                    <p className="stat-number">8</p>
                    <p className="stat-label">Years of Expertise</p>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default AboutUs;