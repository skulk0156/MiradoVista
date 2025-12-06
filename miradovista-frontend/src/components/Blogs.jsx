import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const blogPosts = [
    { id: 1, title: "The Future of Hybrid Work: HR Policy Updates", category: "HR", date: "Oct 25, 2025", excerpt: "As companies transition to hybrid models, understanding the nuances of remote work policies and compliance is crucial for success...", image: "" },
    { id: 2, title: "Navigating India's New Labour Codes: A Compliance Checklist", category: "Legal", date: "Oct 18, 2025", excerpt: "The introduction of the new labour codes brings significant changes to wages, working hours, and social security. Here’s what your business needs to know...", image: "" },
    { id: 3, title: "5 Steps to a Secure Cloud Migration Strategy", category: "IT", date: "Oct 10, 2025", excerpt: "Moving your infrastructure to the cloud requires careful planning to ensure data security and minimal downtime. Follow our five key steps...", image: "" },
    { id: 4, title: "Beyond Paper: Optimizing Office Procurement for Cost Savings", category: "Supplies", date: "Oct 01, 2025", excerpt: "Are you spending too much on consumables? Learn how bulk ordering and vendor consolidation can drastically reduce your procurement costs...", image: "" },
    { id: 5, title: "Employee Engagement in the Digital Age: Best Practices", category: "HR", date: "Sep 25, 2025", excerpt: "Keeping remote and hybrid teams engaged requires creativity and the right tools. We cover the top strategies for boosting morale and retention...", image: "" },
    { id: 6, title: "Intellectual Property Basics for Startups in India", category: "Legal", date: "Sep 15, 2025", excerpt: "Protecting your brand and innovations is vital. This guide covers the initial steps for trademarks, copyrights, and basic IP registration...", image: "" },
];

const BlogCategories = ["All", "HR", "Legal", "IT", "Supplies"];

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = blogPosts.filter(post =>
        selectedCategory === "All" || post.category === selectedCategory
    );

    return (
        <div className="blogs-container">
            {/* Hero Section */}
            <section className="blogs-hero">
                <h1 className="blogs-heading">Insights & Business Strategy</h1>
                <p className="blogs-tagline">
                    Our expert perspectives on HR, Compliance, IT Infrastructure, and Procurement Management.
                </p>
            </section>

            <section className="blogs-content-wrapper">
                {/* Sidebar */}
                <aside className="blogs-sidebar">
                    <h3 className="sidebar-title">Explore Topics</h3>
                    <ul>
                        {BlogCategories.map(cat => (
                            <li
                                key={cat}
                                className={selectedCategory === cat ? 'active' : ''}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>

                    <div className="sidebar-cta">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for weekly insights directly to your inbox.</p>
                        <input type="email" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                </aside>

                {/* Main Blog Grid */}
                <main className="blogs-main-content">
                    {filteredPosts.length > 0 ? (
                        <div className="blog-grid">
                            {filteredPosts.map(post => (
                                <article key={post.id} className="blog-card">
                                    <div className="blog-card-image">
                                        <p className="image-placeholder">{post.image || "Image"}</p>
                                    </div>
                                    <div className="blog-card-content">
                                        <span className={`blog-category tag-${post.category.toLowerCase()}`}>
                                            {post.category}
                                        </span>
                                        <h2 className="blog-title">
                                            <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                                        </h2>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <div className="blog-meta">
                                            <span><i className="far fa-clock"></i> {post.date}</span>
                                            <Link to={`/blogs/${post.id}`} className="read-more">
                                                Read More <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="no-posts">No posts found for this category.</p>
                    )}
                </main>
            </section>
        </div>
    );
};

export default Blogs;
