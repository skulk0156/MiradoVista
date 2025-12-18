import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ NO BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedPage from "./components/AnimatedPage";
import ScrollToTop from "./components/ScrollToTop";
import VideoSplash from "./components/VideoSplash";
import introVideo from "./assets/intro.mp4";
import PostResumePage from "./components/PostResumePage";
import CareersPage from "./components/CareersPage";
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleVideoEnd = () => {
    setShowSplash(false);
  };

  return (
    <>
      {/* Video Splash Screen */}
      {showSplash && (
        <VideoSplash videoSrc={introVideo} onVideoEnd={handleVideoEnd} />
      )}

      {/* App Content */}
      <ScrollToTop />

      {!showSplash && <Navbar />}

      <div className="pt-23">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers/*" element={<CareersPage />} />
          <Route path="/post-resume" element={<PostResumePage />} />
          <Route
            path="/privacy"
            element={
              <AnimatedPage>
                <h2>Privacy Policy Page</h2>
              </AnimatedPage>
            }
          />
          <Route
            path="/terms"
            element={
              <AnimatedPage>
                <h2>Terms of Use Page</h2>
              </AnimatedPage>
            }
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
