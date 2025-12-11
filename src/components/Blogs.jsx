import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaArrowRight, FaSearch, FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';

const blogPosts = [
    { id: 1, title: "The Future of Hybrid Work: HR Policy Updates", category: "HR", date: "Oct 25, 2025", excerpt: "As companies transition to hybrid models, understanding the nuances of remote work policies and compliance is crucial for success...", image: "", author: "Priya Sharma" },
    { id: 2, title: "Navigating India's New Labour Codes: A Compliance Checklist", category: "Legal", date: "Oct 18, 2025", excerpt: "The introduction of the new labour codes brings significant changes to wages, working hours, and social security. Here's what your business needs to know...", image: "", author: "Rajesh Kumar" },
    { id: 3, title: "5 Steps to a Secure Cloud Migration Strategy", category: "IT", date: "Oct 10, 2025", excerpt: "Moving your infrastructure to the cloud requires careful planning to ensure data security and minimal downtime. Follow our five key steps...", image: "", author: "Sneha Reddy" },
    { id: 4, title: "Beyond Paper: Optimizing Office Procurement for Cost Savings", category: "Supplies", date: "Oct 01, 2025", excerpt: "Are you spending too much on consumables? Learn how bulk ordering and vendor consolidation can drastically reduce your procurement costs...", image: "", author: "Vikram Singh" },
    { id: 5, title: "Employee Engagement in the Digital Age: Best Practices", category: "HR", date: "Sep 25, 2025", excerpt: "Keeping remote and hybrid teams engaged requires creativity and the right tools. We cover the top strategies for boosting morale and retention...", image: "", author: "Anjali Menon" },
    { id: 6, title: "Intellectual Property Basics for Startups in India", category: "Legal", date: "Sep 15, 2025", excerpt: "Protecting your brand and innovations is vital. This guide covers the initial steps for trademarks, copyrights, and basic IP registration...", image: "", author: "David Lee" },
];

const BlogCategories = ["All", "HR", "Legal", "IT", "Supplies"];

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              post.author.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getCategoryColor = (category) => {
        switch(category) {
            case "HR": return "bg-[#D4AF37]/20 text-[#8B4513] border-[#D4AF37]";
            case "Legal": return "bg-[#8B4513]/20 text-[#8B4513] border-[#8B4513]";
            case "IT": return "bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2]";
            case "Supplies": return "bg-[#2ECC71]/20 text-[#2ECC71] border-[#2ECC71]";
            default: return "bg-gray-100 text-gray-600 border-gray-300";
        }
    };

    return (
        <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
            {/* Animated Gold Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
            
            {/* Hero Section */}
            <section className="relative px-6 py-24 overflow-hidden">
                <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6">
                        Insights & Business Strategy
                    </h1>
                    <p className="text-lg text-[#333333] max-w-3xl mx-auto mb-8">
                        Our expert perspectives on HR, Compliance, IT Infrastructure, and Procurement Management.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <input 
                            type="text" 
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 pl-12 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-[#333333] placeholder-[#666666]"
                        />
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg">
                                <h3 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center gap-2">
                                    <FaTag className="text-[#D4AF37]" />
                                    Explore Topics
                                </h3>
                                <ul className="space-y-2">
                                    {BlogCategories.map(cat => (
                                        <li
                                            key={cat}
                                            className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                                selectedCategory === cat 
                                                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium' 
                                                    : 'hover:bg-[#D4AF37]/10 text-[#333333]'
                                            }`}
                                            onClick={() => setSelectedCategory(cat)}
                                        >
                                            {cat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-[#0b0e10] to-[#36454f] p-6 rounded-3xl shadow-lg text-white">
                                <h4 className="text-xl font-bold text-[#F0C14B] mb-3">Stay Updated</h4>
                                <p className="text-white/90 mb-4">Subscribe to our newsletter for weekly insights directly to your inbox.</p>
                                <div className="space-y-3">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F0C14B]"
                                    />
                                    <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-[#8B4513] font-bold hover:shadow-lg transition-all duration-300">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            {/* Popular Posts Widget */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg">
                                <h3 className="text-xl font-bold text-[#8B4513] mb-4">Popular Posts</h3>
                                <div className="space-y-4">
                                    {blogPosts.slice(0, 3).map(post => (
                                        <div key={post.id} className="flex gap-3">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 rounded-xl flex-shrink-0 flex items-center justify-center">
                                                <span className="text-[#8B4513] font-bold text-sm">{post.id}</span>
                                            </div>
                                            <div>
                                                <Link to={`/blogs/${post.id}`} className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 font-medium text-sm line-clamp-2">
                                                    {post.title}
                                                </Link>
                                                <p className="text-xs text-[#666666] mt-1">{post.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Blog Grid */}
                    <main className="lg:col-span-3">
                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredPosts.map(post => (
                                    <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#D4AF37]/20 shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 group">
                                        <div className="h-48 bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 flex items-center justify-center relative overflow-hidden">
                                            <p className="text-[#8B4513] font-medium">Blog Image</p>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                        </div>
                                        <div className="p-6 bg-[#36454f]">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                                                    {post.category}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-white/80">
                                                    <FaClock className="text-[#D4AF37]" />
                                                    {post.date}
                                                </div>
                                            </div>
                                            <h2 className="text-xl font-bold text-white mb-3">
                                                <Link to={`/blogs/${post.id}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-white/90 mb-4 line-clamp-3">{post.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-white/80">
                                                    <FaUser className="text-[#D4AF37]" />
                                                    {post.author}
                                                </div>
                                                <Link to={`/blogs/${post.id}`} className="flex items-center gap-1 text-[#D4AF37] font-medium hover:text-white transition-colors duration-300">
                                                    Read More <FaArrowRight className="text-xs" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-[#D4AF37]/20 shadow-lg text-center">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                    <FaSearch className="text-3xl text-[#D4AF37]" />
                                </div>
                                <p className="text-xl text-[#333333] mb-2">No posts found</p>
                                <p className="text-[#666666]">Try adjusting your search or filter criteria</p>
                                <button 
                                    onClick={() => {setSelectedCategory("All"); setSearchTerm("")}}
                                    className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                        
                        {/* Pagination */}
                        <div className="flex justify-center mt-12">
                            <nav className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors duration-300">
                                    <span className="text-[#8B4513]">&laquo;</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium">1</button>
                                <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 text-[#8B4513] hover:bg-[#D4AF37]/10 transition-colors duration-300">2</button>
                                <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 text-[#8B4513] hover:bg-[#D4AF37]/10 transition-colors duration-300">3</button>
                                <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors duration-300">
                                    <span className="text-[#8B4513]">&raquo;</span>
                                </button>
                            </nav>
                        </div>
                    </main>
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
                .line-clamp-2, .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    -webkit-line-clamp: 3;
                }
            `}</style>
        </div>
    );
};

export default Blogs;