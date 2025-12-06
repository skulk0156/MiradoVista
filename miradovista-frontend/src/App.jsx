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

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* Prevent content hiding behind navbar */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Route for the new About Us page */}
                <Route path="/about" element={<AboutUs />} />
               <Route path="/services/*" element={<Services />} />
               <Route path="/testimonials" element={<Testimonials />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/blogs" element={<Blogs />} />
               <Route path="/privacy" element={<AnimatedPage><h2>Privacy Policy Page</h2></AnimatedPage>} />
               <Route path="/terms" element={<AnimatedPage><h2>Terms of Use Page</h2></AnimatedPage>} />

        </Routes>
      </div>
      
    </Router>
  );
}
