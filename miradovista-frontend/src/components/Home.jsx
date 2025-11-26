import { useEffect, useRef, useState } from "react";
import heroLogo from "../assets/miradovista-logo.png";
import managementImg from "../assets/image.png";

export default function Home() {
  // counters
  const counters = [
    { id: "clients", end: 320, label: "Clients" },
    { id: "placements", end: 240, label: "Successful Placements" },
    { id: "years", end: 35, label: "Years of Excellence", suffix: "+" },
  ];

  const [values, setValues] = useState(counters.map(() => 0));
  const doneRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doneRef.current) {
            doneRef.current = true;
            counters.forEach((c, idx) => {
              const duration = 1400;
              const frameRate = 30;
              const totalFrames = Math.round(duration / frameRate);
              let frame = 0;
              const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const val = Math.round(c.end * progress);
                setValues((prev) => {
                  const copy = [...prev];
                  copy[idx] = val;
                  return copy;
                });
                if (frame >= totalFrames) {
                  clearInterval(counter);
                  setValues((prev) => {
                    const copy = [...prev];
                    copy[idx] = c.end;
                    return copy;
                  });
                }
              }, frameRate);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const statEl = document.querySelector("#statistics");
    if (statEl) observer.observe(statEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 bg-[#FBF7F2] text-gray-800 font-[Poppins]">

      {/* HERO */}
      <section className="relative w-full text-center px-6 py-24 overflow-hidden">
        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
          bg-gradient-to-br from-[#f7ecd1] to-[#efe0b8] opacity-40 blur-[160px] rounded-full pointer-events-none">
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 animate-fadeIn">
          <div className="inline-block p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/40 animate-float">
            <img
              src={heroLogo}
              alt="MiradoVista HR"
              className="mx-auto h-44 drop-shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            />
          </div>

          <h1 className="mt-8 text-3xl md:text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-[#b58f4a] to-[#f3d7a0] bg-clip-text text-transparent 
            drop-shadow-sm font-[Playfair_Display] animate-slideUp">
            Best Placement Consultant in India
          </h1>

          <p className="mt-4 text-md md:text-lg text-gray-700 max-w-2xl mx-auto tracking-wide animate-fadeInSlow">
            Building careers. Empowering businesses. We connect top talent with leading companies across Noida, Delhi, Mumbai, Pune, Hyderabad, Bangalore and more.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 animate-slideUpSlow">
            <a
              href="#contact"
              className="inline-block px-10 py-3 rounded-full font-semibold 
              bg-gradient-to-r from-[#d6b36b] to-[#f3d9a4] text-white shadow-lg hover:scale-105 transition-transform">
              Get Started Now
            </a>
            <a
              href="#services"
              className="inline-block px-6 py-3 rounded-lg font-medium border border-[#e9d9a8] 
              text-[#8d6f33] bg-white/60 backdrop-blur-sm hover:shadow-md transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: Text */}
          <div className="animate-slideLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-[#a5864d] font-[Playfair_Display]">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              “We are hassle-free and fee-free for our candidates!“ We proudly serve Noida, Delhi,
              Mumbai, Pune, Hyderabad, Bangalore, Chandigarh, Mohali and more — connecting top talent
              with top companies.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 shadow animate-fadeIn">
                <h4 className="text-lg font-semibold text-[#8b6e3a]">Our Promise</h4>
                <p className="mt-2 text-gray-700 text-sm">
                  Hassle-free recruitment and fast, reliable hires for companies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 shadow animate-fadeInDelay">
                <h4 className="text-lg font-semibold text-[#8b6e3a]">Expert Reach</h4>
                <p className="mt-2 text-gray-700 text-sm">
                  Strong presence across major Indian cities with a deep candidate network.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#d6b36b] 
                to-[#f3d9a4] text-white font-semibold shadow">
                Contact Us
              </a>
              <a
                href="#"
                className="inline-block px-6 py-3 rounded-full border border-[#e9d9a8] bg-white/60 text-[#8d6f33]">
                Post Your Resume
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-slideRight">
            <img
              src={managementImg}
              alt="Company management"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section id="statistics" className="bg-gradient-to-r from-[#fff8ef] to-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">
          {counters.map((c, idx) => (
            <div key={c.id} className="py-6 animate-fadeIn">
              <div className="text-5xl md:text-6xl font-extrabold text-[#c6a25c]">
                {values[idx]}
                {c.suffix || ""}
              </div>
              <div className="mt-2 text-gray-700 text-lg">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#a5864d] font-[Playfair_Display]">
          Services We Offer
        </h2>
        <p className="text-center text-gray-600 mt-3">Get in touch with us for professional services!</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {[
            { title: "HR Solutions", desc: "End-to-end recruitment, onboarding & employee relations." },
            { title: "IT Services", desc: "Software solutions, IT staffing & managed services." },
            { title: "Office Supplies", desc: "Premium office essentials delivered on demand." },
            { title: "Legal Solutions", desc: "Corporate legal advice & compliance support." },
          ].map((svc, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 
              shadow-lg hover:-translate-y-2 transition-transform duration-300 animate-fadeIn">
              <div className="h-12 w-12 rounded-md bg-gradient-to-tr from-[#d6b36b] to-[#f3d9a4] 
                flex items-center justify-center text-white font-bold">
                {svc.title[0]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#8b6e3a]">{svc.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#fff6e8] to-white text-center">
        <div className="max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-[#a5864d] font-[Playfair_Display]">Searching for a Job?</h2>
          <p className="text-gray-700 mt-3">
            We're here to help you every step of the way. Post your resume or contact our recruiters today.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d6b36b] 
                to-[#f3d9a4] text-white font-semibold shadow-lg hover:scale-105 transition">
              Contact Us
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg border border-[#e9d9a8] text-[#8d6f33] 
              bg-white/60 backdrop-blur-sm hover:shadow-md transition">
              Post Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] text-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

          <div>
            <h4 className="text-xl font-bold font-[Playfair_Display]">MiradoVista HR</h4>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Building careers. Empowering businesses. Premium recruitment & HR solutions across India.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold font-[Playfair_Display]">Quick Links</h4>
            <ul className="text-gray-300 mt-3 space-y-3">
              <li className="hover:text-[#d4b06a] cursor-pointer">About Us</li>
              <li className="hover:text-[#d4b06a] cursor-pointer">Contact Us</li>
              <li className="hover:text-[#d4b06a] cursor-pointer">Services</li>
              <li className="hover:text-[#d4b06a] cursor-pointer">HR Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-[Playfair_Display]">Contact</h4>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Sector-76 Noida, Uttar Pradesh <br />
              (+91) 741-707-6000 <br />
              info@miradovista.com
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          © 2025 MiradoVista HR. All rights reserved.
        </p>
      </footer>

      {/* ----------- ANIMATION CLASSES ----------- */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpSlow {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-fadeIn { animation: fadeIn 1s ease-in-out forwards; }
        .animate-fadeInSlow { animation: fadeInSlow 1.4s ease-in-out forwards; }
        .animate-slideUp { animation: slideUp 1s ease-out; }
        .animate-slideUpSlow { animation: slideUpSlow 1.3s ease-out; }
        .animate-slideLeft { animation: slideLeft 1s ease-out; }
        .animate-slideRight { animation: slideRight 1s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fadeInDelay { animation: fadeIn 1.6s ease-in-out forwards; }
      `}</style>
    </div>
  );
}
