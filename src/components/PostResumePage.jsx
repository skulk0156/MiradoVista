import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUpload, FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const PostResumePage = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!resumeFile) {
      alert('Please upload your resume file.');
      return;
    }

    setIsSubmitting(true);

    // --- REPLACE THIS WITH YOUR OWN FORMSPREE ENDPOINT URL ---
    const formspreeEndpoint = 'https://formspree.io/f/xyzraelk'; 

    // FormData is used to handle file uploads
    const dataToSend = new FormData();
    dataToSend.append('resume', resumeFile);
    dataToSend.append('fullName', formData.fullName);
    dataToSend.append('email', formData.email);
    dataToSend.append('phone', formData.phone);
    dataToSend.append('DesiredJobTitle', formData.DesiredJobTitle);
    dataToSend.append('linkedInProfile', formData.linkedInProfile);
    dataToSend.append('coverLetter', formData.coverLetter);
    
    // You can add a hidden 'subject' field to customize the email subject
    dataToSend.append('subject', `New Resume Submission from ${formData.fullName}`);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: dataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert(`Thank you, ${formData.fullName}! Your resume has been submitted successfully.`);
        // Reset form
        setFormData({ fullName: '', email: '', phone: '', DesiredJobTitle: '', linkedInProfile: '', coverLetter: '' });
        setResumeFile(null);
        e.target.reset(); // Resets the file input
      } else {
        const errorData = await response.json();
        alert(`Failed to submit resume: ${errorData.message || 'Please check your form fields and try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting resume:', error);
      alert('An error occurred while submitting. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Your JSX remains the same ---
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
      
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
              Submit your resume and we'll keep you in mind for future opportunities that match your profile.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... (All your form fields and JSX go here, unchanged) ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <FaUser className="text-[#D4AF37]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <FaEnvelope className="text-[#D4AF37]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <FaPhone className="text-[#D4AF37]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300"
                  placeholder="+1 234 567 8900"
                />
              </div>

              {/* Desired Job Title */}
              <div>
                <label htmlFor="DesiredJobTitle" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                  <FaBriefcase className="text-[#D4AF37]" />
                  Desired Job Title *
                </label>
                <input
                  type="text"
                  id="DesiredJobTitle"
                  name="DesiredJobTitle"
                  value={formData.DesiredJobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300"
                  placeholder="Senior Software Engineer"
                />
              </div>
            </div>
            
            {/* LinkedIn Profile */}
            <div>
              <label htmlFor="linkedInProfile" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <FaLinkedin className="text-[#D4AF37]" />
                LinkedIn Profile URL *
              </label>
              <input
                type="url"
                id="linkedInProfile"
                name="linkedInProfile"
                value={formData.linkedInProfile}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <FaUpload className="text-[#D4AF37]" />
                Upload Resume (PDF, DOC, DOCX) *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <FaUpload className="text-3xl text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-gray-300">
                      {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX (MAX. 5MB)</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="coverLetter" className="text-sm font-semibold text-gray-300 mb-2 block">
                Cover Letter / Additional Information
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300"
                placeholder="Tell us a bit about yourself and why you're interested in our company..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-10 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Resume'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PostResumePage;