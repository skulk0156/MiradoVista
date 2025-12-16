import { useState, useEffect } from 'react'; // <-- Import useEffect
import { motion } from 'framer-motion';
import { FaBriefcase, FaUpload, FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

// --- PASTE YOUR GOOGLE CLOUD CREDENTIALS HERE ---
const API_KEY = 'AIzaSyBLO3k6mIasxlVvCGOdQIFEFwFPFij2Fyk';
const CLIENT_ID = '778409427154-b3csg6v7db08t0m9l2lfnq92jrdh86l0.apps.googleusercontent.com';

// Scopes define what the file picker can access.
const SCOPE = 'https://www.googleapis.com/auth/drive.readonly';

const PostResumePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    DesiredJobTitle: '',
    linkedInProfile: '',
    coverLetter: ''
  });

  const [resumeData, setResumeData] = useState({ name: '', url: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPickerLoading, setIsPickerLoading] = useState(false);
  
  // --- NEW STATE FOR MODERN AUTH ---
  const [tokenClient, setTokenClient] = useState(null);

  // --- NEW: Initialize the Google Identity Services token client when the component mounts ---
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPE,
        callback: (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            // Once we have the token, create and show the picker
            createPicker(tokenResponse.access_token);
          } else {
            console.error('No token received from Google.');
            alert('Could not authenticate with Google. Please try again.');
            setIsPickerLoading(false);
          }
        },
      });
      setTokenClient(client);
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // --- MODIFIED: This function now requests the token ---
  const openGooglePicker = () => {
    if (!tokenClient) {
      alert('Google services are still loading. Please wait a moment and try again.');
      return;
    }
    setIsPickerLoading(true);
    tokenClient.requestAccessToken();
  };

  // --- NEW: This function creates the picker after authentication is successful ---
  const createPicker = (accessToken) => {
    // Load the Google Picker API script
    const pickerScript = document.createElement('script');
    pickerScript.src = 'https://apis.google.com/js/api.js';
    pickerScript.onload = () => {
      window.gapi.load('picker', () => {
        const picker = new window.google.picker.PickerBuilder()
          .addView(window.google.picker.ViewId.DOCS)
          .addView(window.google.picker.ViewId.PDFS)
          .setOAuthToken(accessToken) // Use the token we received
          .setDeveloperKey(API_KEY)
          .setCallback(pickerCallback);
        picker.build().setVisible(true);
      });
    };
    document.body.appendChild(pickerScript);
  };
  
  // --- MODIFIED: This callback now also revokes the token for security ---
  const pickerCallback = (data) => {
    if (data.action === window.google.picker.Action.PICKED) {
      const document = data.docs[0];
      setResumeData({
        name: document.name,
        url: document.url,
      });
    }
    setIsPickerLoading(false);
    // It's good practice to revoke the token after you're done with it
    window.google.accounts.oauth2.revoke(resumeData.accessToken);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeData.url) {
      alert('Please select your resume from Google Drive.');
      return;
    }

    setIsSubmitting(true);
    const formspreeEndpoint = 'https://formspree.io/f/xzznqeje';

    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      DesiredJobTitle: formData.DesiredJobTitle,
      linkedInProfile: formData.linkedInProfile,
      coverLetter: formData.coverLetter,
      resumeLink: resumeData.url,
      subject: `New Resume Submission from ${formData.fullName}`,
    };

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert(`Thank you, ${formData.fullName}! Your resume has been submitted successfully.`);
        setFormData({ fullName: '', email: '', phone: '', DesiredJobTitle: '', linkedInProfile: '', coverLetter: '' });
        setResumeData({ name: '', url: '' });
        e.target.reset();
      } else {
        const errorData = await response.json();
        alert(`Failed to submit resume: ${errorData.error || 'Please check the form and try again.'}`);
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
      alert('An error occurred while submitting. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // --- Your JSX remains the same ---
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
                Resume from Google Drive *
              </label>
              <button
                type="button"
                onClick={openGooglePicker}
                disabled={isPickerLoading}
                className="w-full px-4 py-3 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 text-gray-300"
              >
                {isPickerLoading ? 'Loading...' : resumeData.name ? `Selected: ${resumeData.name}` : 'Choose file from Google Drive'}
              </button>
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