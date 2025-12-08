import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaUserTie, FaBalanceScale, FaLaptopCode, FaBoxOpen, FaHandPointRight, FaArrowRight } from 'react-icons/fa';
import AnimatedPage from './AnimatedPage';

// --- 1. Sub-Component for Detailed Service Pages ---
const ServiceDetail = ({ title, description, points, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#D4AF37]/20 shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-[#D4AF37] font-[Playfair_Display] mb-6">{title}</h2>
      <p className="text-lg text-[#333333] mb-8 leading-relaxed">{description}</p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Key Focus Areas:</h3>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-[#333333]">
              <FaHandPointRight className="text-[#D4AF37] mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300">
        {buttonText}
      </button>
    </motion.div>
  );
};

// --- 2. Individual Page Components ---
const HRConsultingPage = () => {
  const points = [
    "Talent Management: Performance Appraisal Systems, Training & Development.",
    "Policy & Compliance: HR manual drafting, Statutory Compliance audits.",
    "Compensation & Benefits: Benchmarking and salary structure design.",
    "Employee Engagement: Surveys, retention strategies, and conflict resolution."
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <ServiceDetail
        title="Strategic HR Consulting Services"
        description="We partner with businesses to optimize their human resources functions, ensuring compliance, driving talent engagement, and fostering a productive workplace culture."
        points={points}
        buttonText="Request HR Consultation"
      />
    </div>
  );
};

const LegalConsultingPage = () => {
  const points = [
    "Commercial Law: Contract drafting, review, and negotiation.",
    "Labor Law Compliance: PF, ESI, Minimum Wages Act adherence.",
    "Business Registrations: Guidance on company formation and licensing.",
    "Intellectual Property: Basic advisory on trademarks and copyrights."
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <ServiceDetail
        title="Legal Consulting & Compliance Solutions"
        description="Navigate the complex legal landscape with our expert consulting. We provide proactive advice and solutions to minimize risk and ensure your operations adhere to all relevant commercial and employment laws."
        points={points}
        buttonText="Get Legal Advisory"
      />
    </div>
  );
};

const ITConsultingPage = () => {
  const points = [
    "Digital Transformation Strategy: Roadmap for technology adoption.",
    "Cloud Services: Migration planning and cloud optimization.",
    "Cybersecurity Audits: Risk assessment and policy implementation.",
    "Software Selection: Guidance on choosing the right CRM/ERP systems."
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <ServiceDetail
        title="IT Consulting Services"
        description="Leverage technology for business growth. Our IT consultants provide strategic guidance on infrastructure, digital transformation, and system optimization to enhance efficiency and security."
        points={points}
        buttonText="Discuss Your IT Roadmap"
      />
    </div>
  );
};

const StationerySuppliesPage = () => {
  const points = [
    "Paper Products: All types of printing and writing paper.",
    "Desk Essentials: Pens, markers, staplers, and folders.",
    "Printing Consumables: Printer cartridges (toner and ink).",
    "Customized Items: Branded notebooks and promotional stationery."
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <ServiceDetail
        title="Office Stationery Product Supplies"
        description="Ensure your office runs smoothly with our reliable and timely supply of high-quality stationery and consumables. We offer bulk ordering and consolidated billing for convenience."
        points={points}
        buttonText="View Product Catalog"
      />
    </div>
  );
};

// --- 3. Component for Main Services Grid ---
const ServiceGrid = () => {
  const coreServices = [
    {
      slug: "hr-consulting",
      icon: <FaUserTie className="text-3xl" />,
      title: "HR Consulting Services",
      description: "Strategic advisory on talent management, compliance, and policy development.",
    },
    {
      slug: "legal-consulting",
      icon: <FaBalanceScale className="text-3xl" />,
      title: "Legal Consulting Solutions",
      description: "Expert guidance on commercial laws, labor compliance, and corporate registrations.",
    },
    {
      slug: "it-consulting",
      icon: <FaLaptopCode className="text-3xl" />,
      title: "IT Consulting Services",
      description: "Strategy and implementation support for cloud, security, and digital transformation.",
    },
    {
      slug: "stationery-supplies",
      icon: <FaBoxOpen className="text-3xl" />,
      title: "Office Stationery Supplies",
      description: "Reliable and bulk supply of quality paper products, consumables, and desk essentials.",
    },
  ];

  return (
    <>
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] text-center mb-6"
          >
            Integrated Business Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#333333] max-w-3xl mx-auto"
          >
            Beyond HR, we offer a portfolio of essential consulting and supply services tailored to streamline your business operations and procurement needs.
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
            Our Service Verticals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-[#333333] mb-12 max-w-2xl mx-auto"
          >
            Select a service to explore how we can add value to your organization.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.slug} className="group block h-full">
                  <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#8B4513] mb-3">{service.title}</h3>
                    <p className="text-[#333333] mb-4 flex-grow">{service.description}</p>
                    <div className="flex items-center text-[#D4AF37] font-medium group-hover:text-[#8B4513] transition-colors duration-300">
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
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
      {/* Animated Gold Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<AnimatedPage><ServiceGrid /></AnimatedPage>} />
          <Route path="hr-consulting" element={<AnimatedPage><HRConsultingPage /></AnimatedPage>} />
          <Route path="legal-consulting" element={<AnimatedPage><LegalConsultingPage /></AnimatedPage>} />
          <Route path="it-consulting" element={<AnimatedPage><ITConsultingPage /></AnimatedPage>} />
          <Route path="stationery-supplies" element={<AnimatedPage><StationerySuppliesPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Services;