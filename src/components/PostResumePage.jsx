import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBriefcase,
  FaUpload,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaSpinner
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Toast Notification Component
const Toast = ({ message, type, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-xl flex items-center gap-3 text-white font-medium text-sm ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {type === 'success' ? <FaCheck className="text-xl" /> : <FaExclamationTriangle className="text-xl" />}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const PostResumePage = () => {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    DesiredJobTitle: '',
    linkedInProfile: '',
    coverLetter: ''
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const [errors, setErrors] = useState({});

  // Cloudinary Configuration
  const CLOUDINARY_CLOUD_NAME = 'dpgjy3rs7';
  const CLOUDINARY_UPLOAD_PRESET = 'resume_uploads';

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_zgnm035';
  const EMAILJS_TEMPLATE_ID = 'template_91ejmvk';
  const EMAILJS_PUBLIC_KEY = '38Sl428DjprrRZRgT';

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const showToast = function(message, type) {
    setToast({ message, type, isVisible: true });
    setTimeout(function() {
      setToast(currentToast => ({ ...currentToast, isVisible: false }));
    }, 4000);
  };

  const handleInputChange = function(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = function(file) {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('Resume must be under 5MB', 'error');
      return;
    }
    setResumeFile(file);
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };
  
  const onFileDrop = function(e) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const onDragOver = function(e) {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = function(e) {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeFile = function() {
    setResumeFile(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = function() {
    const newErrors = {};
    // All these fields are mandatory and validated
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.DesiredJobTitle.trim()) newErrors.DesiredJobTitle = 'Desired job title is required';
    if (!formData.linkedInProfile.trim()) newErrors.linkedInProfile = 'LinkedIn profile URL is required';
    if (!resumeFile) newErrors.resume = 'Please upload your resume';
    return newErrors;
  };

  const handleSubmit = async function(e) {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', resumeFile);
      uploadFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
        { method: 'POST', body: uploadFormData }
      );
      if (!cloudinaryResponse.ok) {
        throw new Error('File upload to Cloudinary failed.');
      }
      const fileData = await cloudinaryResponse.json();
      const resumeUrl = fileData.secure_url;
      const formElement = formRef.current;
      const templateParams = {
        from_name: formElement['fullName'].value,
        from_email: formElement['email'].value,
        phone: formElement['phone'].value,
        job_title: formElement['DesiredJobTitle'].value,
        linkedin: formElement['linkedInProfile'].value,
        cover_letter: formElement['coverLetter'].value,
        resume_url: resumeUrl,
      };
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      showToast('Thank you! Your resume has been submitted successfully.', 'success');
      setFormData({ fullName: '', email: '', phone: '', DesiredJobTitle: '', linkedInProfile: '', coverLetter: '' });
      setResumeFile(null);
      formRef.current.reset();
    } catch (error) {
      console.error("Submission error:", error);
      showToast('Failed to submit resume. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black min-h-screen">
      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-b from-[#22282c] to-[#36454f] rounded-3xl border border-[#D4AF37]/20 shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <FaBriefcase className="text-5xl text-[#D4AF37] mx-auto mb-4" />
            <h1 className="text-4xl font-bold font-[Playfair_Display] text-[#D4AF37] mb-3">
              Join Our Talent Network
            </h1>
            <p className="text-lg text-gray-200">
              Submit your resume and we'll contact you for matching opportunities.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Floating Label Input */}
              <div className="relative group">
                <input
                  id="fullName"
                  name="fullName"
                  required // This field is mandatory
                  placeholder=" "
                  className={`input peer ${errors.fullName ? 'border-red-500' : ''}`}
                  onChange={handleInputChange}
                />
                <label htmlFor="fullName" className="floating-label">Full Name</label>
                <FaUser className="input-icon" />
                {errors.fullName && <p className="mt-1 text-sm text-red-300">{errors.fullName}</p>}
              </div>

              <div className="relative group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required // This field is mandatory
                  placeholder=" "
                  className={`input peer ${errors.email ? 'border-red-500' : ''}`}
                  onChange={handleInputChange}
                />
                <label htmlFor="email" className="floating-label">Email Address</label>
                <FaEnvelope className="input-icon" />
                {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
              </div>

              <div className="relative group">
                <input
                  id="phone"
                  name="phone"
                  required // This field is mandatory
                  placeholder=" "
                  className={`input peer ${errors.phone ? 'border-red-500' : ''}`}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone" className="floating-label">Phone Number</label>
                <FaPhone className="input-icon" />
                {errors.phone && <p className="mt-1 text-sm text-red-300">{errors.phone}</p>}
              </div>

              <div className="relative group">
                <input
                  id="DesiredJobTitle"
                  name="DesiredJobTitle"
                  required // This field is mandatory
                  placeholder=" "
                  className={`input peer ${errors.DesiredJobTitle ? 'border-red-500' : ''}`}
                  onChange={handleInputChange}
                />
                <label htmlFor="DesiredJobTitle" className="floating-label">Desired Job Title</label>
                <FaBriefcase className="input-icon" />
                {errors.DesiredJobTitle && <p className="mt-1 text-sm text-red-300">{errors.DesiredJobTitle}</p>}
              </div>
            </div>

            <div className="relative group">
              <input
                id="linkedInProfile"
                name="linkedInProfile"
                required // This field is mandatory
                placeholder=" "
                className={`input w-full peer ${errors.linkedInProfile ? 'border-red-500' : ''}`}
                onChange={handleInputChange}
              />
              <label htmlFor="linkedInProfile" className="floating-label">LinkedIn Profile URL</label>
              <FaLinkedin className="input-icon" />
              {errors.linkedInProfile && <p className="mt-1 text-sm text-red-300">{errors.linkedInProfile}</p>}
            </div>

            {/* Enhanced File Upload - PDF ONLY */}
            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                id="resume"
                accept=".pdf" // ✅ CHANGE: Accepts PDF files only
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
              <label
                htmlFor="resume"
                onDrop={onFileDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                className={`block text-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  errors.resume
                    ? 'border-red-500 bg-red-900/20 text-red-300'
                    : isDragging
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                    : 'border-gray-600 bg-gray-800/40 text-gray-300 hover:border-[#D4AF37]'
                }`}
              >
                <FaUpload className="mx-auto text-3xl mb-2" />
                <p className="text-sm">
                  {resumeFile ? resumeFile.name : 'Click to upload or drag and drop your resume'}
                </p>
                <p className="text-xs text-gray-400 mt-1">✅ CHANGE: (PDF only - Max 5MB)</p>
              </label>
              {resumeFile && (
                <div className="flex items-center justify-between mt-2 p-2 bg-gray-800/40 rounded text-sm text-gray-300">
                  <span>{resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                  <button type="button" onClick={removeFile} className="text-red-400 hover:text-red-300"><FaTimes /></button>
                </div>
              )}
              {errors.resume && <p className="mt-1 text-sm text-red-300">{errors.resume}</p>}
            </div>

            {/* Textarea with Character Counter - Optional Field */}
            <div className="relative group">
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="5"
                placeholder=" "
                maxLength="500"
                className="input w-full peer resize-none"
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="coverLetter" className="floating-label">Cover Letter / Additional Info (Optional)</label>
              <span className="absolute bottom-2 right-3 text-xs text-gray-400 peer-focus:text-[#D4AF37] transition-colors">
                {formData.coverLetter.length}/500
              </span>
            </div>

            {/* Submit Button with Spinner */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] hover:scale-105 hover:shadow-lg'
              }`}
            >
              {isSubmitting ? <FaSpinner className="animate-spin" /> : null}
              {isSubmitting ? 'Submitting...' : 'Submit Resume'}
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground {
          animation: gradientBackground 30s ease infinite;
        }
        .input {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 16px 16px 16px 45px; /* Left padding for icon */
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .input:focus {
          outline: none;
          border-color: #D4AF37;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }
        .input::placeholder {
          color: transparent;
        }
        .input:focus::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        .floating-label {
          position: absolute;
          left: 45px;
          top: 16px;
          color: rgba(255, 255, 255, 0.6);
          pointer-events: none;
          transition: all 0.2s ease;
          background-color: transparent;
        }
        .input:focus ~ .floating-label,
        .input:not(:placeholder-shown) ~ .floating-label {
          top: -10px;
          left: 12px;
          font-size: 12px;
          color: #D4AF37;
          background-color: #22282c;
          padding: 0 4px;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.3s ease;
        }
        .input:focus ~ .input-icon {
          color: #D4AF37;
        }
      `}</style>
    </div>
  );
};

export default PostResumePage;