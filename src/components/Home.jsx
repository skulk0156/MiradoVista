import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroLogo from "../assets/miradovista-logo.png";
import heroLogo1 from "../assets/hero1.jpeg";
import managementImg from "../assets/employeeRep.jpeg";
import heroBg from "../assets/1218.mp4";
// Import your custom industry icons
import retailIcon from "../assets/side-view-woman-working-as-real-estate-agent.jpg";
import logisticsIcon from "../assets/Logistics Made Easy_ Enhancing Supply Chain Management through Warehousing in Ukraine.jfif";
import itIcon from "../assets/Logistics Made Easy_ Enhancing Supply Chain Management through Warehousing in Ukraine.jfif";
import realEstateIcon from "../assets/side-view-woman-working-as-real-estate-agent.jpg";
import bfsiIcon from "../assets/technology-concept-with-futuristic-element.jpg";
import edTechIcon from "../assets/city-committed-education.jpg";
import automobileIcon from "../assets/Dream car menufecturing.jfif";
import { motion } from "framer-motion";
import { FaUserTie, FaLaptopCode, FaBoxes, FaGavel, FaQuoteLeft, FaStar, FaArrowRight, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIndustry, FaBuilding, FaUniversity, FaCar, FaShoppingCart, FaShippingFast, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const counters = [
    { id: "clients", end: 320, label: "Clients" },
    { id: "placements", end: 240, label: "Placements" },
    { id: "years", end: 3.5, label: "Years" },
  ];

  const [values, setValues] = useState(counters.map(() => 0));
  const doneRef = useRef(false);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Auto-scroll functionality for the slider with infinite loop
  useEffect(() => {
    if (!sliderRef.current || isPaused) return;
    
    const slider = sliderRef.current;
    const scrollAmount = 1;
    
    const scrollInterval = setInterval(() => {
      // When reaching the end of the first set, jump to the beginning of the second set
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }, 30);
    
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerParent = { visible: { transition: { staggerChildren: 0.2 } } };

  const industries = [
    {
      title: "Retail & FMCG",
      desc: "Retail management, fast-moving consumer goods, and supply chain solutions.",
      icon: retailIcon,
      features: ["Retail Management", "Consumer Goods", "Supply Chain"],
      learnMoreLink: "/industries/retail-fmcg"
    },
    {
      title: "Logistic & E-commerce",
      desc: "Logistics management, e-commerce platforms, and delivery solutions.",
      icon: logisticsIcon,
      features: ["Logistics Management", "E-commerce Platforms", "Delivery Solutions"],
      learnMoreLink: "/industries/logistics-ecommerce"
    },
    {
      title: "IT",
      desc: "Software development, cloud services, cybersecurity, and tech innovation.",
      icon: itIcon,
      features: ["Software Development", "IT Infrastructure", "Tech Support"],
      learnMoreLink: "/industries/it"
    },
    {
      title: "Real Estate",
      desc: "Property management, real estate development, and construction services.",
      icon: realEstateIcon,
      features: ["Property Management", "Real Estate Development", "Construction"],
      learnMoreLink: "/industries/real-estate"
    },
    {
      title: "BFSI",
      desc: "Banking, financial services, and insurance solutions for modern businesses.",
      icon: bfsiIcon,
      features: ["Banking Services", "Financial Planning", "Insurance Solutions"],
      learnMoreLink: "/industries/bfsi"
    },
    {
      title: "EdTech",
      desc: "Educational technology solutions, e-learning platforms, and digital training.",
      icon: edTechIcon,
      features: ["E-Learning Platforms", "Educational Software", "Digital Training"],
      learnMoreLink: "/industries/edtech"
    },
    {
      title: "Automobile & Manufacturing",
      desc: "Automotive engineering, manufacturing processes, and industrial solutions.",
      icon: automobileIcon,
      features: ["Automotive Engineering", "Manufacturing", "Industrial Solutions"],
      learnMoreLink: "/industries/automobile-manufacturing"
    }
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
      title: "Quality-First Hiring",
      desc: "We focus on precision, not volume — delivering only well-screened, role-ready candidates who align with your business needs and culture."
    },
    {
      title: "Wide Talent Network",
      desc: "With a strong presence across Tier 1 & Tier 2 cities, our network helps clients access diverse talent and candidates access nationwide opportunities."
    },
    {
      title: "Fast Turnaround Time",
      desc: "Our structured sourcing and screening process ensures timely delivery without compromising on candidate quality."
    },
    {
      title: "Transparent & Ethical Approach",
      desc: "No hidden terms, no unclear processes. We maintain complete transparency, confidentiality, and integrity throughout the hiring cycle"
    }
  ];

  // Reduced number of particles for less golden effect
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  // Function to handle manual slider navigation
  const handleSliderNavigation = (direction) => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const scrollAmount = 320; // Width of one card plus gap
    
    if (direction === 'left') {
      slider.scrollLeft -= scrollAmount;
    } else {
      slider.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
      {/* Reduced opacity of Animated Gold Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-5"></div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 overflow-hidden">
        {/* Hero Background Video - Replaced image with video element */}
        <div className="absolute inset-0 -z-5">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Reduced overlay opacity for clearer background video */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20"></div>
        </div>
        
        {/* Reduced opacity and size of Floating Gold Glow */}
        <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-10 blur-[200px] rounded-full pointer-events-none"></div>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: `${p.x}%`, y: `${p.y}%`, scale: 0.5 }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 8 + Math.random() * 4, delay: p.delay }}
            className="absolute rounded-full bg-[#D4AF37] w-[2px] h-[2px] md:w-[3px] md:h-[3px] shadow-md"
          />
        ))}
        <motion.div initial="hidden" animate="visible" className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div variants={fadeUp} className="text-left">
            <motion.h1 variants={fadeUp} className="text-12xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display]">
              Creating Meaningful Connections Between Talent & Employment
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-white">
              Connecting top talent with leading companies across Pune, Delhi, Mumbai, Bangalore & more.
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
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Reduced opacity of Animated glow effect behind logo */}
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
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] opacity-10 blur-xl rounded-3xl"
              />
              <img src={heroLogo1} alt="MiradoVista HR" className="h-80 w-80 rounded-3xl relative z-10 object-cover" />
              {/* Reduced number of sparkle effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 0.5, 0],
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
            We operate as a hassle-free and fee-free recruitment partner for candidates, ensuring a seamless experience at every stage of the hiring process. Recognized as one of India's trusted placement consultants with a strong presence across key cities, we are committed to delivering excellence.
          </p>
          <p className="mt-4 text-lg text-[#333333] leading-relaxed">
           Our focus is on connecting high-quality talent with the right opportunities while maintaining transparency, integrity, and a candidate-first approach.
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
          <img src={managementImg} className="object-cover w-full h-[350px]" />
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-[#263037] to-[#36454f] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#ffffff] font-[Playfair_Display]">Why Choose MiradoVista HR ?</motion.h2>
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

      {/* Industries We Serve Section - Horizontal Slider with Infinite Loop */}
      <section id="industries" className="max-w-6xl mx-auto py-24 px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display]">Industries We Serve</motion.h2>
        <p className="mt-4 text-center text-[#333333] max-w-2xl mx-auto">Connecting talent across diverse sectors with industry-specific recruitment solutions.</p>
        
        <div className="relative mt-14">
          {/* Navigation buttons */}
          <button 
            onClick={() => handleSliderNavigation('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#D4AF37] rounded-full p-3 shadow-lg"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={() => handleSliderNavigation('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#D4AF37] rounded-full p-3 shadow-lg"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xl" />
          </button>
          
          {/* Slider container with infinite loop */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate the industries array for seamless looping */}
            {[...industries, ...industries].map((industry, i) => (
              <motion.div 
                key={`${industry.title}-${i}`} 
                variants={fadeUp} 
                className="min-w-[300px] p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg text-center h-full flex flex-col relative overflow-hidden"
                style={{
                  backgroundImage: `url(${industry.icon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                {/* Add a semi-transparent overlay */}
                <div className="absolute inset-0 bg-white/80 rounded-3xl"></div>
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-[#D4AF37]">{industry.title}</h4>
                  <p className="mt-3 text-sm text-[#333333] flex-grow">{industry.desc}</p>
                  <ul className="mt-4 text-left space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-[#333333] flex items-start gap-2">
                        <FaCheckCircle className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <Link to="/contact" className="px-4 py-2 rounded-full border border-[#D4AF37] bg-white text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition">Contact</Link>
                  </div>
                </div>
                
                {/* Sparkle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 0.5, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.8 + i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                    className="absolute w-2 h-2 bg-[#D4AF37] rounded-full z-20"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
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

      {/* Rudrapur Office Section - Centered Card */}
      <section className="py-24 bg-gradient-to-br from-[#FFF9E5] to-[#FAF8F3]">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display] mb-12">Our Office</motion.h2>
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6 text-center">Pune </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                <p className="text-[#333333]">Office No. 41/42 Tejaswani HSG, Baner Gaon, Haveli, Pune Maharashtra - 411045</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#D4AF37]" />
                <p className="text-[#333333]">+91 8669667854</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37]" />
                <p className="text-[#333333]">contact@miradovista.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#263037] to-[#36454f] text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold font-[Playfair_Display] text-[#D4AF37]">Searching for a Job?</motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-[#ffffff] max-w-xl mx-auto">
          We're here to help you every step of the way. Connect with us to post your resume or get in touch with our recruiters.
        </motion.p>
        <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/post-resume" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition flex items-center gap-2">
            Post Your Resume
            <FaArrowRight className="text-sm" />
          </Link>
          <Link to="/contact" className="px-8 py-3 rounded-full border border-[#D4AF37] bg-white text-[#000000] hover:bg-[#D4AF37] hover:text-white transition flex items-center gap-2">
            Contact Recruiter
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </section>
      
      {/* Gradient animation - Fixed warning by removing jsx attribute */}
      <style>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground {
          animation: gradientBackground 30s ease infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}