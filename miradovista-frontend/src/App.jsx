// src/App.js

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import AnimatedPage from './components/AnimatedPage';
import ScrollToTop from './components/ScrollToTop';
import VideoSplash from './components/VideoSplash';
import introVideo from './assets/intro.mp4';

export default function App() {
    const [showSplash, setShowSplash] = useState(true);

    const handleVideoEnd = () => {
        setShowSplash(false);
    };

    return (
        <>
            {/* Video Splash Screen - This is an overlay */}
            {showSplash && <VideoSplash videoSrc={introVideo} onVideoEnd={handleVideoEnd} />}

            {/* Main Application */}
            <Router>
                <ScrollToTop />
                
                {/* 
                  Navbar is now CONDITIONALLY RENDERED.
                  It will only appear AFTER the splash screen is finished.
                */}
                {!showSplash && <Navbar />}
                
                {/* Prevent content hiding behind navbar */}
                <div className="pt-24">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/services/*" element={<Services />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/privacy" element={<AnimatedPage><h2>Privacy Policy Page</h2></AnimatedPage>} />
                        <Route path="/terms" element={<AnimatedPage><h2>Terms of Use Page</h2></AnimatedPage>} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    );
}