import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaUserTie, FaIndustry, FaHandshake, FaUserGraduate, FaBuilding, FaArrowRight } from 'react-icons/fa';
import AnimatedPage from './AnimatedPage';

// Try importing the image with ES6 import syntax (more reliable)
import backgroundImage from '../assets/NONTECH.png';

// --- 1. Sub-Component for Detailed Service Pages ---
const ServiceDetail = ({ title, description, points, buttonText }) => {
  // MODIFIED: Added "Candidate Services" and "Talent Acquisition Services" to dark theme condition
  const isDarkTheme =
    title === 'Industry-Specific Hiring' ||
    title === 'Consulting & Advisory' ||
    title === 'Employer Support' ||
    title === 'Candidate Services' ||
    title === 'Talent Acquisition Services';

  return (
    <div className="relative min-h-screen font-[Poppins] text-black">
      {/* Full Page Background with Blur */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'blur(2px)',
          transform: 'scale(1.05)',
          width: '100vw',
          height: '100vh'
        }}
      />
      
      {/* Dark Overlay for Better Contrast */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      {/* Content Container - Modified class */}
      <div className="relative z-10 min-h-screen px-6 py-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${isDarkTheme ? 'bg-[#36454f]/70' : 'bg-white/70'} backdrop-blur-md rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-8 md:p-12 max-w-4xl w-full mx-auto`}
        >
          {/* Title with Gold Accent */}
          <div className="mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold font-[Playfair_Display] mb-2 ${isDarkTheme ? 'text-white' : 'text-[#D4AF37]'}`}>
              {title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] rounded-full" />
          </div>
          
          {/* Description */}
          <p className={`text-lg mb-8 leading-relaxed ${isDarkTheme ? 'text-white/95' : 'text-[#333333]'} drop-shadow-sm`}>
            {description}
          </p>

          {/* Key Focus Areas */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-[#8B4513]'}`}>
              Key Focus Areas:
            </h3>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className={`flex items-start gap-3 ${isDarkTheme ? 'text-white/95' : 'text-[#333333]'}`}>
                  <FaHandshake className="text-[#D4AF37] mt-1 flex-shrink-0 text-lg drop-shadow-md" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all duration-300 transform">
              {buttonText}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- 2. Individual Page Components ---
const TalentAcquisitionPage = () => {
  const points = [
    "End-to-end recruitment process management from sourcing to onboarding",
    "Candidate screening and assessment using industry-standard methodologies",
    "Interview coordination and facilitation with your hiring teams",
    "Reference checks and background verification services",
    "Offer negotiation and candidate experience management"
  ];

  return (
    <AnimatedPage>
      <ServiceDetail
        title="Talent Acquisition Services"
        description="Our comprehensive talent acquisition services help you identify, attract, and hire the right talent for your organization. We handle the entire recruitment lifecycle, allowing you to focus on your core business operations."
        points={points}
        buttonText="Start Hiring"
      />
    </AnimatedPage>
  );
};

const IndustryHiringPage = () => {
  const points = [
    "Specialized recruitment for IT, healthcare, finance, manufacturing sectors",
    "Industry-specific talent mapping and market intelligence",
    "Access to pre-vetted candidate pools tailored to your industry",
    "Understanding of unique skill requirements and compliance standards",
    "Seasoned recruiters with domain expertise in your specific industry"
  ];

  return (
    <AnimatedPage>
      <ServiceDetail
        title="Industry-Specific Hiring"
        description="Leverage our industry-specific hiring expertise to find candidates who not only have the right skills but also understand the unique challenges and opportunities in your sector. We specialize in multiple industries with dedicated recruitment teams."
        points={points}
        buttonText="Find Industry Talent"
      />
    </AnimatedPage>
  );
};

const ConsultingPage = () => {
  const points = [
    "HR strategy development and implementation",
    "Compensation and benefits benchmarking",
    "Organizational design and workforce planning",
    "Employee engagement and retention strategies",
    "Performance management system design"
  ];

  return (
    <AnimatedPage>
      <ServiceDetail
        title="Consulting & Advisory"
        description="Our consulting services provide strategic guidance to optimize your HR functions and align them with your business objectives. We help you build a strong foundation for sustainable growth through effective people management practices."
        points={points}
        buttonText="Get Consultation"
      />
    </AnimatedPage>
  );
};

const CandidateServicesPage = () => {
  const points = [
    "Resume optimization and career counseling",
    "Skill assessment and development recommendations",
    "Interview preparation and mock sessions",
    "Job matching based on skills and career aspirations",
    "Career transition guidance and support"
  ];

  return (
    <AnimatedPage>
      <ServiceDetail
        title="Candidate Services"
        description="We support job seekers in their career journey by providing personalized guidance, skill development resources, and access to exclusive opportunities. Our goal is to help candidates find roles that align with their skills, experience, and career aspirations."
        points={points}
        buttonText="Explore Opportunities"
      />
    </AnimatedPage>
  );
};

const EmployerSupportPage = () => {
  const points = [
    "Employer branding and value proposition development",
    "Job description optimization for better candidate attraction",
    "Hiring process audit and improvement recommendations",
    "Onboarding framework design and implementation",
    "Employment law compliance and documentation support"
  ];

  return (
    <AnimatedPage>
      <ServiceDetail
        title="Employer Support"
        description="Our employer support services help you create an attractive workplace that draws top talent. We assist with everything from employer branding to streamlining your hiring processes, ensuring you stand out in a competitive job market."
        points={points}
        buttonText="Enhance Your Hiring"
      />
    </AnimatedPage>
  );
};

// --- 3. Component for Main Services Grid ---
const ServiceGrid = () => {
  const coreServices = [
    {
      slug: "talent-acquisition",
      icon: <FaUserTie className="text-3xl" />,
      title: "Talent Acquisition Services",
      description: "Comprehensive recruitment solutions to find and hire the right talent for your organization.",
    },
    {
      slug: "industry-hiring",
      icon: <FaIndustry className="text-3xl" />,
      title: "Industry-Specific Hiring",
      description: "Specialized recruitment expertise tailored to your specific industry sector.",
    },
    {
      slug: "consulting-advisory",
      icon: <FaHandshake className="text-3xl" />,
      title: "Consulting & Advisory",
      description: "Strategic HR guidance to optimize your workforce and organizational effectiveness.",
    },
    {
      slug: "candidate-services",
      icon: <FaUserGraduate className="text-3xl" />,
      title: "Candidate Services",
      description: "Career support and guidance for job seekers to find their ideal opportunities.",
    },
    {
      slug: "employer-support",
      icon: <FaBuilding className="text-3xl" />,
      title: "Employer Support",
      description: "Tools and strategies to enhance your employer brand and hiring processes.",
    },
  ];

  return (
    <>
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] text-center mb-6"
          >
            HR Services & Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#333333] max-w-3xl mx-auto"
          >
            Our comprehensive HR services are designed to meet the diverse needs of both employers and job seekers, creating meaningful connections and fostering career growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display] mb-4"
          >
            Our Service Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-[#333333] mb-12 max-w-2xl mx-auto"
          >
            Select a service to explore how we can add value to your organization or career journey.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.slug} className="group block h-full">
                  {/* MODIFIED: Dark Card Background and Light Text */}
                  <div className="p-8 rounded-3xl bg-[#36454f]/80 backdrop-blur-xl border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    {/* MODIFIED: Light Text Color */}
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    {/* MODIFIED: Light Text Color */}
                    <p className="text-white/90 mb-4 flex-grow">{service.description}</p>
                    <div className="flex items-center text-[#D4AF37] font-medium group-hover:text-white transition-colors duration-300">
                      View Details
                      <FaArrowRight className="ml-2 text-sm" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// --- 4. Parent Services Component with Nested Routing ---
const Services = () => {
  const location = useLocation();

  return (
    <div className="relative overflow-x-hidden font-[Poppins] pt-10 text-black">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#FAF8F3]/90 via-white/90 to-[#FFF9E5]/90" />
      
      {/* Animated Gold Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<AnimatedPage><ServiceGrid /></AnimatedPage>} />
          <Route path="talent-acquisition" element={<TalentAcquisitionPage />} />
          <Route path="industry-hiring" element={<IndustryHiringPage />} />
          <Route path="consulting-advisory" element={<ConsultingPage />} />
          <Route path="candidate-services" element={<CandidateServicesPage />} />
          <Route path="employer-support" element={<EmployerSupportPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Services;