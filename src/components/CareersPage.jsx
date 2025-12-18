import { Routes, Route, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBook, FaUsers, FaRocket, FaHandshake } from 'react-icons/fa';
import jobsVideo from "../assets/jobs_page.mp4";
import Navbar from "./Navbar";

// Animation variants
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

// Button animation variants (keeping for other components)
const buttonVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
};

// Card animation variants
const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    hover: {
        y: -5,
        transition: { duration: 0.3 }
    }
};

// Subcategory animation variants
const subcategoryVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

// Icon animation variants
const iconVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    },
    hover: {
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 }
    }
};

// Main Careers component
const Careers = () => {
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-24 text-black min-h-screen">
      {/* Animated Gold Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
      
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            variants={headingVariant}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-8"
          >
            Careers
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg hover:scale-105 transition-all text-white"
              variants={itemVariant}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Join Our Team</h2>
              <p className="text-white/90 mb-6 leading-relaxed">Explore opportunities to grow your career with us.</p>
              <Link to="/careers/jobs" className="inline-block px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                View Open Positions
              </Link>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg hover:scale-105 transition-all text-white"
              variants={itemVariant}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <h2 class="text-2xl font-semibold text-white mb-4 text-center">Internship Program</h2>
              <p className="text-white/90 mb-6 leading-relaxed">Kickstart your career with our internship opportunities.</p>
              <Link to="/careers/internships" className="inline-block px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Jobs subpage
const Jobs = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={jobsVideo} type="video/mp4" />
      </video>
      
      {/* Golden Blur Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(212, 175, 55, 0.25) 100%)',
          filter: 'blur(20px)',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Additional Golden Tint */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(240, 193, 75, 0.15) 50%, rgba(212, 175, 55, 0.15) 100%)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
        <motion.h1 
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#263037] to-[#36454f] bg-clip-text text-transparent font-[Playfair_Display] mb-6 pb-2"
        >
          Career Opportunities
        </motion.h1>
        <motion.p 
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg text-black mb-8 max-w-2xl leading-relaxed"
        >
          Join our team and build a rewarding career with us.
        </motion.p>
        <motion.button 
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-black font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
        >
          Explore Positions
        </motion.button>
      </div>
    </div>
  );
};

// Internships subpage with enhanced animations (without apply buttons)
const Internships = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins]">
      {/* Golden Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
      
      {/* Additional Golden Glow Effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(240, 193, 75, 0.08) 0%, transparent 50%)',
        }}
      />
      
      <div className="pt-24 px-6 md:px-12 lg:px-24 pb-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            variants={headingVariant}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-8 leading-tight pb-2 text-center"
            style={{ lineHeight: '1.2' }}
          >
            Internship Program
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {/* Business Development Executive */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
              variants={cardVariant}
              whileHover="hover"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4"
                variants={iconVariant}
                whileHover="hover"
              >
                <FaRocket className="text-white text-2xl" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-white mb-4">Business Development Executive</h2>
              <p className="text-white/90 mb-6 leading-relaxed">Join our business development team and gain hands-on experience in market research, client relations, and strategic planning.</p>
              {/* Apply Now button removed */}
            </motion.div>
            
            {/* Talent Acquisition Specialist */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
              variants={cardVariant}
              whileHover="hover"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4"
                variants={iconVariant}
                whileHover="hover"
              >
                <FaUsers className="text-white text-2xl" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-white mb-4">Talent Acquisition Specialist</h2>
              <p className="text-white/90 mb-6 leading-relaxed">Learn the art of recruitment and talent management while working with our HR team to identify and attract top talent.</p>
              
              {/* Subcategories */}
              <div className="mt-6 space-y-4">
                <motion.div 
                  className="bg-gradient-to-br from-[#263037] to-[#36454f] rounded-lg p-4 border border-[#D4AF37]/30"
                  variants={subcategoryVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-medium text-white mb-2">IT Recruitment</h3>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">Focus on sourcing and placing technical talent in software development, data science, and other IT roles.</p>
                  {/* Apply for IT button removed */}
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-[#263037] to-[#36454f] rounded-lg p-4 border border-[#D4AF37]/30"
                  variants={subcategoryVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-medium text-white mb-2">Non-IT Recruitment</h3>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">Work on placing candidates in business, marketing, finance, and other non-technical roles.</p>
                  {/* Apply for Non-IT button removed */}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-white mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Why Intern With Us?
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center shadow-lg"
                  variants={iconVariant}
                  whileHover="hover"
                >
                  <FaBook className="text-white text-2xl" />
                </motion.div>
                <h4 className="text-lg font-medium text-white mb-2">Hands-on Experience</h4>
                <p className="text-white/80 text-sm leading-relaxed">Work on real projects and gain practical skills in your chosen field.</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center shadow-lg"
                  variants={iconVariant}
                  whileHover="hover"
                >
                  <FaUsers className="text-white text-2xl" />
                </motion.div>
                <h4 className="text-lg font-medium text-white mb-2">Mentorship</h4>
                <p className="text-white/80 text-sm leading-relaxed">Learn from industry experts who guide you throughout your internship journey.</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center shadow-lg"
                  variants={iconVariant}
                  whileHover="hover"
                >
                  <FaHandshake className="text-white text-2xl" />
                </motion.div>
                <h4 className="text-lg font-medium text-white mb-2">Career Opportunities</h4>
                <p className="text-white/80 text-sm leading-relaxed">Outstanding interns may receive full-time employment offers upon completion.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Careers routing component
const CareersPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Careers />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="internships" element={<Internships />} />
    </Routes>
  );
};

export default CareersPage;