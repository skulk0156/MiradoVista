import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroLogo from "../assets/miradovista-logo.png";
import heroLogo1 from "../assets/hero1.jpeg";
import managementImg from "../assets/image.png";
import heroBg from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { FaUserTie, FaLaptopCode, FaBoxes, FaGavel, FaQuoteLeft, FaStar, FaArrowRight, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const counters = [
    { id: "clients", end: 320, label: "Clients" },
    { id: "placements", end: 240, label: "Placements" },
    { id: "years", end: 3.5, label: "Years" },
  ];

  const [values, setValues] = useState(counters.map(() => 0));
  const doneRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doneRef.current) {
            doneRef.current = true;
            counters.forEach((c, idx) => {
              const duration = 1500;
              const frameRate = 30;
              const totalFrames = Math.round(duration / frameRate);
              let frame = 0;
              const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const val = Math.round(c.end * progress);
                setValues((prev) => {
                  const copy = [...prev];
                  copy[idx] = val;
                  return copy;
                });
                if (frame >= totalFrames) clearInterval(counter);
              }, frameRate);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    const statEl = document.querySelector("#statistics");
    if (statEl) observer.observe(statEl);
    return () => observer.disconnect();
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerParent = { visible: { transition: { staggerChildren: 0.2 } } };

  const services = [
    {
      title: "HR Solutions",
      desc: "End-to-end recruitment, onboarding & employee relations.",
      icon: <FaUserTie className="w-10 h-10 text-[#D4AF37]" />,
      features: ["Talent Sourcing", "Skill Assessment", "Interview Coordination"],
      learnMoreLink: "/services/hr-consulting"
    },
    {
      title: "IT Services",
      desc: "Software solutions, app development & IT staffing.",
      icon: <FaLaptopCode className="w-10 h-10 text-[#D4AF37]" />,
      features: ["Custom Development", "IT Staffing", "Tech Consulting"],
      learnMoreLink: "/services/it-consulting"
    },
    {
      title: "Office Supplies",
      desc: "Stationery, electronics & more delivered on demand.",
      icon: <FaBoxes className="w-10 h-10 text-[#D4AF37]" />,
      features: ["Bulk Ordering", "Fast Delivery", "Quality Products"],
      learnMoreLink: "/services/stationery-supplies"
    },
    {
      title: "Legal & Compliance",
      desc: "Corporate legal advice and accounting services.",
      icon: <FaGavel className="w-10 h-10 text-[#D4AF37]" />,
      features: ["Legal Advisory", "Compliance Management", "Documentation"],
      learnMoreLink: "/services/legal-consulting"
    },
  ];

  const offices = [
    { city: "Pune", address: "Office No. 41/42 Tejaswani HSG, Baner Gaon, Haveli, Pune Maharashtra - 411045", phone: "+91 8669667854", email: "noida@miradovista.com" },
    { city: "Rudrapur", address: "Rudrapur, Uttarakhand, India", phone: "+91 0987654321", email: "rudrapur@miradovista.com" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, Tech Solutions",
      content: "MiradoVista helped us find perfect candidates for our growing company. Their recruitment process is efficient and professional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Marketing Manager",
      content: "I found my dream job through MiradoVista. The team was supportive throughout the entire process and helped me land a position that matches my skills perfectly.",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "HR Director",
      content: "We've been working with MiradoVista for over 3 years now. They consistently provide high-quality candidates that fit our company culture.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: "Extensive Network",
      desc: "Access to a vast pool of talented professionals across various industries."
    },
    {
      title: "Personalized Approach",
      desc: "Tailored solutions to meet your specific recruitment needs."
    },
    {
      title: "Quick Turnaround",
      desc: "Efficient processes that reduce hiring time without compromising quality."
    },
    {
      title: "Industry Expertise",
      desc: "Deep understanding of different sectors and their unique requirements."
    }
  ];

  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
      {/* Animated Gold Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-5">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Floating Gold Glow */}
        <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: `${p.x}%`, y: `${p.y}%`, scale: 0.5 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 8 + Math.random() * 4, delay: p.delay }}
            className="absolute rounded-full bg-[#D4AF37] w-[4px] h-[4px] md:w-[6px] md:h-[6px] shadow-md"
          />
        ))}
        <motion.div initial="hidden" animate="visible" className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div variants={fadeUp} className="text-left">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display]">
              Best Placement Consultant in India
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-white">
              Connecting top talent with leading companies across Noida, Delhi, Mumbai, Pune, Hyderabad & more.
            </motion.p>
            <motion.div variants={staggerParent} className="mt-10 flex flex-wrap gap-6">
              {["Get Started Now", "Learn More"].map((btn, i) => (
                <motion.a key={i} variants={fadeUp} href="#contact" className={`px-8 py-3 font-semibold rounded-full shadow-lg border transition-all flex items-center gap-2 ${i === 0 ? "bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] border-[#D4AF37]" : "bg-white text-[#20292f] border-[#D4AF37] hover:shadow-xl"}`}>
                  {btn}
                  {i === 0 && <FaArrowRight className="text-sm" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Square Logo with Pop-up Animation */}
          <motion.div 
            initial={{ scale: 0, rotate: -180, opacity: 0 }} 
            animate={{ 
              scale: [0, 1.2, 1], 
              rotate: [-180, 10, 0], 
              opacity: [0, 1, 1] 
            }} 
            transition={{ 
              duration: 1.2,
              ease: "easeOut",
              times: [0, 0.6, 1]
            }} 
            className="flex justify-center"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Animated glow effect behind logo */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ 
                  duration: 1.5,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] opacity-20 blur-xl rounded-3xl"
              />
              <img src={heroLogo1} alt="MiradoVista HR" className="h-80 w-80 rounded-3xl relative z-10 object-cover" />
              {/* Sparkle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.8 + i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                  className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-[#D4AF37] font-[Playfair_Display]">Who We Are</h2>
          <p className="mt-4 text-lg text-[#333333] leading-relaxed">
            We are hassle-free and fee-free for candidates! Known as India's best placement consultant with a strong presence across major cities.
          </p>
          <p className="mt-4 text-lg text-[#333333] leading-relaxed">
            We genuinely care about providing excellent services and match best talent with right opportunities.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Hassle-free Hiring", "Top-Tier Talent"].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-inner hover:scale-105 transition-all">
                <h4 className="font-semibold text-[#333333] flex items-center gap-2">
                  <FaCheckCircle className="text-[#D4AF37]" />
                  {item}
                </h4>
                <p className="mt-2 text-sm text-[#333333]">Transparent, timely, and efficient hiring solutions for businesses and candidates alike.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all">
          <img src={managementImg} className="object-cover w-full h-[400px]" />
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-[#263037] to-[#36454f] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#ffffff] font-[Playfair_Display]">Why Choose MiradoVista HR</motion.h2>
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#F0C14B]/30 shadow-lg hover:scale-105 transition-all h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#F0C14B] to-[#D4AF37] flex items-center justify-center mb-4">
                  <span className="text-[#20292f] font-bold text-xl">{i + 1}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-24 bg-gradient-to-br from-[#FFF9E5] to-[#FAF8F3]">
        <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto px-6">
          {counters.map((c, idx) => (
            <motion.div key={c.id} variants={fadeUp} className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all">
              <div className="text-5xl md:text-6xl font-extrabold text-[#D4AF37]">{values[idx]}+</div>
              <div className="mt-2 text-lg text-[#333333]">{c.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto py-24 px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display]">Services We Offer</motion.h2>
        <p className="mt-4 text-center text-[#333333] max-w-2xl mx-auto">Professional solutions tailored for your business needs.</p>
        <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">
          {services.map((svc, i) => (
            <motion.div key={i} variants={fadeUp} className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center hover:scale-105 transition-all h-full flex flex-col">
              <div className="flex justify-center mb-4">{svc.icon}</div>
              <h4 className="text-lg font-semibold text-[#D4AF37]">{svc.title}</h4>
              <p className="mt-3 text-sm text-[#333333] flex-grow">{svc.desc}</p>
              <ul className="mt-4 text-left space-y-2">
                {svc.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-[#333333] flex items-start gap-2">
                    <FaCheckCircle className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-center gap-3">
                <Link to={svc.learnMoreLink} className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium hover:scale-105 transition">Learn More</Link>
                <Link to="/contact" className="px-4 py-2 rounded-full border border-[#D4AF37] bg-white text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition">Contact</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-[#263037] to-[#36454f] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#F0C14B] font-[Playfair_Display]">What Our Clients Say</motion.h2>
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-[#F0C14B]/30 shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <FaQuoteLeft className="text-4xl text-[#F0C14B] opacity-30" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#F0C14B]" />
                  ))}
                </div>
                <p className="text-white/90 italic flex-grow">"{testimonial.content}"</p>
                <div className="mt-6 text-center">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display]">Our Offices</motion.h2>
        <p className="mt-4 text-center text-[#333333] max-w-2xl mx-auto">Find us across India.</p>
        <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {offices.map((office, i) => (
            <motion.div key={i} variants={fadeUp} className="p-6 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold text-[#333333] mb-4">{office.city}</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                  <p className="text-[#333333]">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#D4AF37]" />
                  <p className="text-[#333333]">{office.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#D4AF37]" />
                  <p className="text-[#333333]">{office.email}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium hover:scale-105 transition">
                  Get Directions
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-[#263037] to-[#36454f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-[#F0C14B] font-[Playfair_Display]">Stay Updated</motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-white">
            Subscribe to our newsletter for latest job openings and industry insights.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#F0C14B] text-white placeholder-white/60 w-full sm:w-auto" />
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F0C14B] to-[#D4AF37] text-[#20292f] font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(240,193,75,0.6)] transition-all">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#FFF9E5] to-[#FAF8F3] text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold font-[Playfair_Display] text-[#D4AF37]">Searching for a Job?</motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-[#333333] max-w-xl mx-auto">
          We're here to help you every step of the way. Connect with us to post your resume or get in touch with our recruiters.
        </motion.p>
        <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/post-resume" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition flex items-center gap-2">
            Post Your Resume
            <FaArrowRight className="text-sm" />
          </Link>
          <Link to="/contact" className="px-8 py-3 rounded-full border border-[#D4AF37] bg-white text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition flex items-center gap-2">
            Contact Recruiter
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
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
}