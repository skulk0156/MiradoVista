import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/miradovista-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

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
      ${scrolled ? "bg-white/50 shadow-xl" : "bg-white/10"}
    `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 animate-[float_5s_ease-in-out_infinite]"
          />
          <span className="text-2xl font-semibold tracking-wider text-mvgold">
            MiradoVista HR
          </span>
        </Link>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">

              {item.link ? (
                <Link
                  to={item.link}
                  className="nav-link text-mvblack tracking-wide"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  className="flex items-center gap-1 nav-link text-mvblack tracking-wide"
                  onClick={() =>
                    setOpenMenu(openMenu === item.name ? null : item.name)
                  }
                >
                  {item.name}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      openMenu === item.name ? "rotate-180 text-mvgold" : ""
                    }`}
                  />
                </div>
              )}

              {/* Hover Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-mvgold transition-all duration-300 group-hover:w-full"></span>

              {/* Dropdown */}
              {item.submenu && (
                <ul
                  className={`absolute right-0 mt-4 bg-white/95 backdrop-blur-xl shadow-xl 
                  rounded-2xl py-3 w-64 transition-all duration-500 overflow-hidden
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
                        className="block px-5 py-3 text-mvblack hover:text-mvgold 
                        hover:bg-mvgold/10 rounded-xl transition-all duration-300"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))}
        </ul>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-4xl text-mvgold"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl px-6 py-6 space-y-4 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link || "#"}
                onClick={() => setMobileOpen(false)}
                className="text-xl text-mvblack"
              >
                {item.name}
              </Link>

              {item.submenu && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.link}
                      className="block text-mvblack hover:text-mvgold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
