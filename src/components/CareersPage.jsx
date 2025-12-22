import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBook, FaUsers, FaRocket, FaHandshake, FaArrowLeft } from 'react-icons/fa';
import jobsVideo from "../assets/jobs_page.mp4";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

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

// Button animation variants
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

// Form input animation variants
const inputVariant = {
    focus: { 
        borderColor: "#D4AF37",
        boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.2)"
    }
};

// Main Careers component
const Careers = () => {
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-16 sm:pt-20 md:pt-24 text-black min-h-screen">
      {/* Animated Gold Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
      
      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            variants={headingVariant}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6 sm:mb-8 text-center md:text-left"
          >
            Careers
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg hover:scale-105 transition-all text-white"
              variants={itemVariant}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                <FaBriefcase className="text-white text-xl sm:text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Join Our Team</h2>
              <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">Explore opportunities to grow your career with us.</p>
              <Link to="/careers/jobs" className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm sm:text-base">
                View Open Positions
              </Link>
            </motion.div>
            
            <motion.div 
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg hover:scale-105 transition-all text-white"
              variants={itemVariant}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4">
                <FaGraduationCap className="text-white text-xl sm:text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">Internship Program</h2>
              <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">Kickstart your career with our internship opportunities.</p>
              <Link to="/careers/internships" className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm sm:text-base">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 text-center">
        <motion.h1 
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#263037] to-[#36454f] bg-clip-text text-transparent font-[Playfair_Display] mb-4 sm:mb-6 pb-2"
        >
          Career Opportunities
        </motion.h1>
        <motion.p 
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-black mb-6 sm:mb-8 max-w-xl sm:max-w-2xl leading-relaxed"
        >
          Join our team and build a rewarding career with us.
        </motion.p>
        <motion.div 
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/contact" 
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-black font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 inline-block text-sm sm:text-base"
          >
            Contact Recruiter
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// Internship Application Form Component
const InternshipForm = () => {
  const navigate = useNavigate();
  const { internshipType } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    university: '',
    graduationYear: '',
    experience: '',
    coverLetter: '',
    resume: null,
    resumeUrl: '',
    recruitmentType: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [emailError, setEmailError] = useState('');
  
  // Set default recruitment type based on URL parameter
  useEffect(() => {
    if (internshipType === 'it-recruitment') {
      setFormData(prev => ({ ...prev, recruitmentType: 'IT' }));
    } else if (internshipType === 'non-it-recruitment') {
      setFormData(prev => ({ ...prev, recruitmentType: 'Non-IT' }));
    } else if (internshipType === 'business-development') {
      setFormData(prev => ({ ...prev, recruitmentType: 'Business Development Executive' }));
    }
  }, [internshipType]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };
  
  // Function to upload file to Cloudinary using Fetch API
  const uploadFileToCloudinary = async (file) => {
    const cloudName = 'your-cloud-name'; // Replace with your Cloudinary cloud name
    const uploadPreset = 'internship_resumes'; // Replace with your Cloudinary upload preset
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        {
          method: 'POST',
          body: formData
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to upload file');
      }
      
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
      throw error;
    }
  };
  
  // Function to send email using Fetch API
  const sendEmail = async (resumeUrl) => {
    const emailData = {
      to: 'hr@yourcompany.com', // Replace with your HR email
      from: formData.email,
      subject: `New Internship Application: ${getInternshipTitle()}`,
      html: generateEmailHTML(resumeUrl),
      replyTo: formData.email
    };
    
    try {
      // Using Formspree as example (you'll need to create a free account)
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          resumeUrl,
          internshipType: getInternshipTitle(),
          submission_date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send application. Please try again later.');
      throw error;
    }
  };
  
  // Generate HTML email content
  const generateEmailHTML = (resumeUrl) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4AF37, #F0C14B); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .section { margin-bottom: 20px; }
          .label { font-weight: bold; color: #8B4513; }
          .value { margin-left: 10px; }
          .resume-link { display: inline-block; background: #D4AF37; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Internship Application</h1>
          <p>${getInternshipTitle()}</p>
        </div>
        <div class="content">
          <div class="section">
            <span class="label">Name:</span>
            <span class="value">${formData.firstName} ${formData.lastName}</span>
          </div>
          <div class="section">
            <span class="label">Email:</span>
            <span class="value">${formData.email}</span>
          </div>
          <div class="section">
            <span class="label">Phone:</span>
            <span class="value">${formData.phone}</span>
          </div>
          <div class="section">
            <span class="label">Education:</span>
            <span class="value">${formData.education} at ${formData.university} (${formData.graduationYear})</span>
          </div>
          <div class="section">
            <span class="label">Recruitment Focus:</span>
            <span class="value">${formData.recruitmentType}</span>
          </div>
          <div class="section">
            <span class="label">Experience:</span>
            <div style="margin-top: 10px; padding: 10px; background: #f9f9f9; border-radius: 5px;">${formData.experience}</div>
          </div>
          <div class="section">
            <span class="label">Cover Letter:</span>
            <div style="margin-top: 10px; padding: 10px; background: #f9f9f9; border-radius: 5px;">${formData.coverLetter}</div>
          </div>
          <div class="section">
            <span class="label">Resume:</span>
            <a href="${resumeUrl}" class="resume-link" target="_blank">Download Resume</a>
          </div>
        </div>
      </body>
      </html>
    `;
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.education.trim()) errors.education = 'Education level is required';
    if (!formData.university.trim()) errors.university = 'University is required';
    if (!formData.graduationYear.trim()) errors.graduationYear = 'Graduation year is required';
    if (!formData.experience.trim()) errors.experience = 'Please describe your relevant experience';
    if (!formData.coverLetter.trim()) errors.coverLetter = 'Cover letter is required';
    if (!formData.resume) errors.resume = 'Please upload your resume';
    
    if (!formData.recruitmentType) {
      errors.recruitmentType = 'Please select a recruitment focus';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setEmailError('');
      
      try {
        // Upload resume to Cloudinary
        setUploadProgress(25);
        const resumeUrl = await uploadFileToCloudinary(formData.resume);
        setUploadProgress(75);
        
        // Update form data with resume URL
        setFormData(prev => ({ ...prev, resumeUrl }));
        
        // Send email
        await sendEmail(resumeUrl);
        setUploadProgress(100);
        
        // Show success message
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            education: '',
            university: '',
            graduationYear: '',
            experience: '',
            coverLetter: '',
            resume: null,
            resumeUrl: '',
            recruitmentType: ''
          });
          setSubmitSuccess(false);
          navigate('/careers/internships');
        }, 3000);
      } catch (error) {
        setIsSubmitting(false);
        setUploadProgress(0);
        console.error('Error submitting application:', error);
      }
    }
  };
  
  const getInternshipTitle = () => {
    switch(internshipType) {
      case 'it-recruitment':
        return 'IT Recruitment Internship';
      case 'non-it-recruitment':
        return 'Non-IT Recruitment Internship';
      case 'business-development':
        return 'Business Development Executive Internship';
      default:
        return 'Internship Application';
    }
  };
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins]">
      {/* Golden Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
      
      <div className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-12 lg:px-24 pb-8 sm:pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={itemVariant}
          >
            <Link 
              to="/careers/internships" 
              className="inline-flex items-center text-[#8B4513] hover:text-[#D4AF37] transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Internships
            </Link>
          </motion.div>
          
          <motion.h1 
            variants={headingVariant}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6 sm:mb-8 leading-tight pb-2 text-center"
            style={{ lineHeight: '1.2' }}
          >
            {getInternshipTitle()}
          </motion.h1>
          
          {submitSuccess ? (
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                <FaHandshake className="text-white text-3xl" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-white mb-4">Application Submitted!</h2>
              <p className="text-white/90 mb-6">Thank you for your interest. Our team will review your application and contact you soon.</p>
              <p className="text-white/70 text-sm">You will be redirected back to internships page...</p>
            </motion.div>
          ) : (
            <motion.div 
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariant}>
                    <label htmlFor="firstName" className="block text-white/90 mb-2 text-sm font-medium">First Name *</label>
                    <motion.input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.firstName ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                      placeholder="Enter your first name"
                      whileFocus={inputVariant.focus}
                    />
                    {formErrors.firstName && <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>}
                  </motion.div>
                  
                  <motion.div variants={itemVariant}>
                    <label htmlFor="lastName" className="block text-white/90 mb-2 text-sm font-medium">Last Name *</label>
                    <motion.input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.lastName ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                      placeholder="Enter your last name"
                      whileFocus={inputVariant.focus}
                    />
                    {formErrors.lastName && <p className="text-red-400 text-xs mt-1">{formErrors.lastName}</p>}
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariant}>
                    <label htmlFor="email" className="block text-white/90 mb-2 text-sm font-medium">Email *</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.email ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                      whileFocus={inputVariant.focus}
                    />
                    {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
                  </motion.div>
                  
                  <motion.div variants={itemVariant}>
                    <label htmlFor="phone" className="block text-white/90 mb-2 text-sm font-medium">Phone Number *</label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.phone ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                      placeholder="+1 (555) 123-4567"
                      whileFocus={inputVariant.focus}
                    />
                    {formErrors.phone && <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>}
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <motion.div variants={itemVariant}>
                    <label htmlFor="education" className="block text-white/90 mb-2 text-sm font-medium">Education Level *</label>
                    <motion.select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.education ? 'border-red-400' : 'border-white/20'} text-white focus:outline-none transition-all duration-300`}
                      whileFocus={inputVariant.focus}
                    >
                      <option value="" className="text-[#263037]">Select Education</option>
                      <option value="high-school" className="text-[#263037]">High School</option>
                      <option value="undergraduate" className="text-[#263037]">Undergraduate</option>
                      <option value="graduate" className="text-[#263037]">Graduate</option>
                      <option value="postgraduate" className="text-[#263037]">Postgraduate</option>
                    </motion.select>
                    {formErrors.education && <p className="text-red-400 text-xs mt-1">{formErrors.education}</p>}
                  </motion.div>
                  
                  <motion.div variants={itemVariant}>
                    <label htmlFor="university" className="block text-white/90 mb-2 text-sm font-medium">University *</label>
                    <motion.input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.university ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                      placeholder="University name"
                      whileFocus={inputVariant.focus}
                    />
                    {formErrors.university && <p className="text-red-400 text-xs mt-1">{formErrors.university}</p>}
                  </motion.div>
                  
                  <motion.div variants={itemVariant}>
                    <label htmlFor="graduationYear" className="block text-white/90 mb-2 text-sm font-medium">Graduation Year *</label>
                    <motion.input
                      type="text"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.graduationYear ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                      placeholder="e.g., 2024"
                      whileFocus={inputVariant.focus}
                    />
                    {formErrors.graduationYear && <p className="text-red-400 text-xs mt-1">{formErrors.graduationYear}</p>}
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariant} className="mb-6">
                  <label htmlFor="recruitmentType" className="block text-white/90 mb-2 text-sm font-medium">Recruitment Focus *</label>
                  <motion.select
                    id="recruitmentType"
                    name="recruitmentType"
                    value={formData.recruitmentType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.recruitmentType ? 'border-red-400' : 'border-white/20'} text-white focus:outline-none transition-all duration-300`}
                    whileFocus={inputVariant.focus}
                  >
                    <option value="" className="text-[#263037]">Select Recruitment Focus</option>
                    <option value="IT" className="text-[#263037]">IT Recruitment</option>
                    <option value="Non-IT" className="text-[#263037]">Non-IT Recruitment</option>
                    <option value="Business Development Executive" className="text-[#263037]">Business Development Executive</option>
                  </motion.select>
                  {formErrors.recruitmentType && <p className="text-red-400 text-xs mt-1">{formErrors.recruitmentType}</p>}
                </motion.div>
                
                <motion.div variants={itemVariant} className="mb-6">
                  <label htmlFor="experience" className="block text-white/90 mb-2 text-sm font-medium">Relevant Experience *</label>
                  <motion.textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.experience ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                    placeholder="Describe any relevant experience, projects, or skills that make you a good fit for this internship..."
                    whileFocus={inputVariant.focus}
                  ></motion.textarea>
                  {formErrors.experience && <p className="text-red-400 text-xs mt-1">{formErrors.experience}</p>}
                </motion.div>
                
                <motion.div variants={itemVariant} className="mb-6">
                  <label htmlFor="coverLetter" className="block text-white/90 mb-2 text-sm font-medium">Cover Letter *</label>
                  <motion.textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.coverLetter ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none transition-all duration-300`}
                    placeholder="Tell us why you're interested in this internship and what you hope to gain from the experience..."
                    whileFocus={inputVariant.focus}
                  ></motion.textarea>
                  {formErrors.coverLetter && <p className="text-red-400 text-xs mt-1">{formErrors.coverLetter}</p>}
                </motion.div>
                
                <motion.div variants={itemVariant} className="mb-6">
                  <div className="relative">
                    <motion.input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#D4AF37] file:to-[#F0C14B] file:text-white hover:file:from-[#D4AF37]/90 hover:file:to-[#F0C14B]/90 focus:outline-none transition-all duration-300"
                      whileFocus={inputVariant.focus}
                    />
                  </div>
                  {formErrors.resume && <p className="text-red-400 text-xs mt-1">{formErrors.resume}</p>}
                  {formData.resume && (
                    <p className="text-white/70 text-xs mt-1">Selected file: {formData.resume.name}</p>
                  )}
                </motion.div>
                
                {isSubmitting && uploadProgress > 0 && (
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <motion.div 
                        className="bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>
                    <p className="text-white/70 text-xs mt-1">Uploading and submitting... {uploadProgress}%</p>
                  </motion.div>
                )}
                
                {emailError && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-red-400 text-sm">{emailError}</p>
                  </motion.div>
                )}
                
                <motion.div 
                  className="flex justify-center mt-8"
                  variants={itemVariant}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    variants={buttonVariant}
                    while="hover"
                    whileTap="tap"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Internships subpage with enhanced animations
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
      
      <div className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-12 lg:px-24 pb-8 sm:pb-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            variants={headingVariant}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6 sm:mb-8 leading-tight pb-2 text-center"
            style={{ lineHeight: '1.2' }}
          >
            Internship Program
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {/* Business Development Executive */}
            <motion.div 
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
              variants={cardVariant}
              whileHover="hover"
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4"
                variants={iconVariant}
                whileHover="hover"
              >
                <FaRocket className="text-white text-xl sm:text-2xl" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Business Development Executive</h2>
              <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">Join our business development team and gain hands-on experience in market research, client relations, and strategic planning.</p>
              <Link 
                to="/careers/internships/apply/business-development" 
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm sm:text-base"
              >
                Apply Now
              </Link>
            </motion.div>
            
            {/* Talent Acquisition Specialist */}
            <motion.div 
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
              variants={cardVariant}
              whileHover="hover"
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center mb-4"
                variants={iconVariant}
                whileHover="hover"
              >
                <FaUsers className="text-white text-xl sm:text-2xl" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Talent Acquisition Specialist</h2>
              <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">Learn the art of recruitment and talent management while working with our HR team to identify and attract top talent.</p>
              
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
                  <Link 
                    to="/careers/internships/apply/it-recruitment" 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm"
                  >
                    Apply for IT
                  </Link>
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
                  <Link 
                    to="/careers/internships/apply/non-it-recruitment" 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm"
                  >
                    Apply for Non-IT
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#263037] to-[#36454f] shadow-lg text-white"
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-white mb-4 sm:mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Why Intern With Us?
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center shadow-lg"
                  variants={iconVariant}
                  whileHover="hover"
                >
                  <FaBook className="text-white text-xl sm:text-2xl" />
                </motion.div>
                <h4 className="text-base sm:text-lg font-medium text-white mb-2">Hands-on Experience</h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">Work on real projects and gain practical skills in your chosen field.</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center shadow-lg"
                  variants={iconVariant}
                  whileHover="hover"
                >
                  <FaUsers className="text-white text-xl sm:text-2xl" />
                </motion.div>
                <h4 className="text-base sm:text-lg font-medium text-white mb-2">Mentorship</h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">Learn from industry experts who guide you throughout your internship journey.</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] flex items-center justify-center shadow-lg"
                  variants={iconVariant}
                  whileHover="hover"
                >
                  <FaHandshake className="text-white text-xl sm:text-2xl" />
                </motion.div>
                <h4 className="text-base sm:text-lg font-medium text-white mb-2">Career Opportunities</h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">Outstanding interns may receive full-time employment offers upon completion.</p>
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
      <Route path="internships/apply/:internshipType" element={<InternshipForm />} />
    </Routes>
  );
};

export default CareersPage;