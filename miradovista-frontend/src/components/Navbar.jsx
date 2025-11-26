import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/miradovista-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      submenu: [
        { name: "HR Consulting Services", link: "/services/hr-consulting" },
        { name: "Legal Consulting Solutions", link: "/services/legal-consulting" },
        { name: "IT Consulting Services", link: "/services/it-consulting" },
        { name: "Office Stationery Product Supplies", link: "/services/office-stationery" },
      ],
    },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-700
        backdrop-blur-2xl border-b border-white/20
        ${scrolled ? "bg-white/30 shadow-xl" : "bg-white/10"}
      `}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r 
      from-transparent via-mvgold/20 to-transparent blur-xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 animate-[float_5s_ease-in-out_infinite]" />
          <span className="text-2xl font-bold tracking-wide text-mvgold">MiradoVista HR</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => item.submenu ? handleMenuToggle(item.name) : null}
                className={`transition-all duration-300 flex items-center gap-2 ${
                  openMenu === item.name ? "text-mvgold" : "text-mvblack hover:text-mvgold"
                }`}
              >
                {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
                
                {item.submenu && (
                  <span
                    className={`
                      transition-all duration-300 
                      ${openMenu === item.name ? "rotate-180 text-mvgold" : "text-mvblack"}
                    `}
                  >
                    ▼
                  </span>
                )}
              </button>

              {/* Submenu */}
              {item.submenu && (
                <ul
                  className={`
                    absolute left-0 mt-3 w-64 bg-white/90 backdrop-blur-xl shadow-lg rounded-xl py-3
                    transition-all duration-500 overflow-hidden
                    ${openMenu === item.name ? "opacity-100 max-h-80" : "opacity-0 max-h-0 pointer-events-none"}
                  `}
                >
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.link}
                        onClick={() => setOpenMenu(null)}
                        className="block px-5 py-2 text-mvblack hover:text-mvgold hover:bg-mvgold/10 duration-300"
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-mvgold"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <ul className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl px-6 py-4 space-y-4 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between items-center">
                <Link
                  to={item.link || "#"}
                  className="text-xl text-mvblack"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>

                {item.submenu && (
                  <button
                    className={`transition duration-300 ${
                      openMenu === item.name ? "rotate-180 text-mvgold" : "text-mvblack"
                    }`}
                    onClick={() => handleMenuToggle(item.name)}
                  >
                    ▼
                  </button>
                )}
              </div>

              {/* Mobile submenu */}
              {item.submenu && openMenu === item.name && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.link}
                        className="block text-mvblack hover:text-mvgold"
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileOpen(false);
                        }}
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
      )}
    </nav>
  );
}
