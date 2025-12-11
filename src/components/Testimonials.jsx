import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import testimonialsBg from '../assets/Testomonials.png'; // Update this path to match your image location

// Data for the Testimonials
const testimonialData = [
    {
        quote: "MiradoVista HR revolutionized our talent acquisition strategy. Their executive search team placed key leadership roles that immediately drove a 20% increase in productivity. Highly professional and deeply connected.",
        author: "Priya Sharma",
        title: "CEO, TechNova Solutions",
        rating: 5,
    },
    {
        quote: "The Legal Consulting team provided clear, concise guidance on our labor compliance issues, saving us significant time and potential fines. They are a reliable partner for statutory adherence.",
        author: "Rajesh Kumar",
        title: "CFO, Global Infra Corp",
        rating: 4.5,
    },
    {
        quote: "Their IT Consulting helped us seamlessly migrate to the cloud. The project was on time and under budget. We now rely on them for all our major technology roadmap decisions.",
        author: "Sneha Reddy",
        title: "Head of Operations, FinTrack Analytics",
        rating: 5,
    },
    {
        quote: "We were constantly running out of office supplies. MiradoVista's stationery supply service is prompt, reliable, and offers great bulk pricing. It's one less thing we have to worry about.",
        author: "Vikram Singh",
        title: "Admin Manager, Surya Pharma",
        rating: 4,
    },
    {
        quote: "The behavioral training program for our mid-level managers was a massive success. We saw measurable improvements in team communication and conflict resolution within weeks.",
        author: "Anjali Menon",
        title: "HR Director, Zenith Retail",
        rating: 5,
    },
    {
        quote: "Excellent HR consulting on drafting our new employee manual. It's clear, legally sound, and perfectly reflects our company culture. True experts in their domain.",
        author: "David Lee",
        title: "Founder, Innovate Studio",
        rating: 4.5,
    },
];

// Helper function to render star ratings
const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-[#D4AF37]" />);
    }
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-[#D4AF37]" />);
    }
    // Fill remaining with empty stars
    const remaining = 5 - stars.length;
    for (let i = 0; i < remaining; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-[#D4AF37]" />);
    }
    
    return <div className="flex gap-1 mb-2">{stars}</div>;
};

const Testimonials = () => {
    return (
        <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
            {/* Animated Gold Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
            
            {/* Hero Section */}
            <section 
                className="relative px-6 py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${testimonialsBg})` }}
            >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                
                <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6">
                        Voices of Our Success
                    </h1>
                    <p className="text-lg text-white max-w-3xl mx-auto">
                        Hear directly from the clients who have partnered with MiradoVista HR to achieve their strategic business goals.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-[#D4AF37] font-[Playfair_Display] mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-center text-[#333333] mb-12 max-w-2xl mx-auto">
                        Trusted across consulting, compliance, and essential business supply.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonialData.map((t, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-[#36454f] border border-[#D4AF37]/20 shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                                <FaQuoteLeft className="text-4xl text-[#D4AF37] opacity-30 mb-4" />
                                <p className="text-white mb-6 flex-grow italic">"{t.quote}"</p>
                                
                                <div className="mt-auto">
                                    {renderStars(t.rating)}
                                    <h3 className="text-xl font-semibold text-white">{t.author}</h3>
                                    <p className="text-sm text-white/80">{t.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#0b0e10] to-[#36454f] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold text-[#F0C14B] mb-4">Ready to Experience the MiradoVista HR Difference?</h3>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact us today and let us tailor a solution that meets your unique business needs.
                    </p>
                    <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all"
                    >
                        Get Started Now
                    </Link>
                </div>
            </section>

            {/* Gradient animation */}
            <style>{`
                @keyframes gradientBackground {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradientBackground {
                    animation: gradientBackground 30s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default Testimonials;