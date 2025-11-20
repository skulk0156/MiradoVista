import { useState } from "react";
import logo from "../assets/miradovista-logo.png"; // update if named differently

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#FAF9F6] shadow-md border-b border-[#E6E2D9]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="MiradoVista Logo"
            className="h-14 drop-shadow-sm"
          />
          <h1 className="text-2xl font-semibold tracking-wide"
            style={{ color: "#B5904F" }}>
            MiradoVista HR
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#3B3B3B] font-medium">
          <li className="hover:text-[#B5904F] transition">Home</li>
          <li className="hover:text-[#B5904F] transition">Jobs</li>
          <li className="hover:text-[#B5904F] transition">Services</li>
          <li className="hover:text-[#B5904F] transition">About</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 rounded-lg border border-[#C9A86A] text-[#B5904F] hover:bg-[#EDE3C9] transition">
            Login
          </button>
          <button className="px-5 py-2 rounded-lg bg-[#C9A86A] text-white hover:bg-[#B5904F] transition">
            Register
          </button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-3xl text-[#3B3B3B]" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FAF9F6] px-6 pb-6 space-y-5 text-lg border-t border-[#E6E2D9]">
          <a className="block text-[#3B3B3B] hover:text-[#B5904F]" href="#">Home</a>
          <a className="block text-[#3B3B3B] hover:text-[#B5904F]" href="#">Jobs</a>
          <a className="block text-[#3B3B3B] hover:text-[#B5904F]" href="#">Services</a>
          <a className="block text-[#3B3B3B] hover:text-[#B5904F]" href="#">About</a>

          <button className="w-full mt-4 py-2 rounded-lg border border-[#C9A86A] text-[#B5904F] hover:bg-[#EDE3C9] transition">
            Login
          </button>
          <button className="w-full py-2 rounded-lg bg-[#C9A86A] text-white hover:bg-[#B5904F] transition">
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
