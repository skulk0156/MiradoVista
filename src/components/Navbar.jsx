import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Add useLocation
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/miradovista-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      submenu: [
        { name: "HR Consulting Services", link: "/services/hr-consulting" },
        { name: "Legal Consulting Solutions", link: "/services/legal-consulting" },
        { name: "IT Consulting Services", link: "/services/it-consulting" },
        { name: "Stationery Supplies", link: "/services/stationery-supplies" },
      ],
    },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700
      backdrop-blur-xl border-b border-white/20
      ${scrolled ? "bg-gradient-to-r from-[#FAF8F3]/90 to-[#FFF9E5]/90 shadow-xl" : "bg-gradient-to-r from-[#FAF8F3]/80 to-[#FFF9E5]/80"}
    `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-[#D4AF37] to-[#F0C14B]">
            <img
              src={logo}
              alt="Logo"
              className="h-12 bg-white rounded-full p-1 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent">
            MiradoVista HR
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">

              {item.link ? (
                <Link
                  to={item.link}
                  className="text-[#333333] hover:text-[#D4AF37] tracking-wide transition-all duration-300 flex items-center gap-1"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  className="flex items-center gap-1 text-[#333333] hover:text-[#D4AF37] tracking-wide transition-all duration-300"
                  onClick={() =>
                    setOpenMenu(openMenu === item.name ? null : item.name)
                  }
                >
                  {item.name}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      openMenu === item.name ? "rotate-180 text-[#D4AF37]" : ""
                    }`}
                  />
                </div>
              )}

              {/* Hover Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] transition-all duration-300 group-hover:w-full"></span>

              {/* Dropdown */}
              {item.submenu && (
                <ul
                  className={`absolute right-0 mt-4 bg-white/95 backdrop-blur-xl shadow-xl 
                  rounded-2xl py-3 w-64 transition-all duration-500 overflow-hidden border border-[#D4AF37]/20
                  ${
                    openMenu === item.name
                      ? "opacity-100 max-h-80"
                      : "opacity-0 max-h-0 pointer-events-none"
                  }`}
                >
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.link}
                        onClick={() => setOpenMenu(null)}
                        className="block px-5 py-3 text-[#333333] hover:text-[#D4AF37] 
                        hover:bg-gradient-to-r hover:from-[#D4AF37]/10 hover:to-[#F0C14B]/10 rounded-xl transition-all duration-300"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))}
          
          {/* CTA Button */}
          <li>
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-[#D4AF37] hover:text-[#8B4513] transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-gradient-to-r from-[#FAF8F3]/95 to-[#FFF9E5]/95 backdrop-blur-xl shadow-xl px-6 py-6 space-y-4 font-medium border-t border-[#D4AF37]/20">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link
                  to={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 block"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  className="text-lg text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 block"
                  onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                >
                  {item.name}
                </div>
              )}

              {item.submenu && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.link}
                      className="block text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          
          {/* Mobile CTA Button */}
          <li className="pt-4">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}