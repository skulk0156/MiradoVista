import React from 'react';
import './Testimonials.css'; 
import { Link } from 'react-router-dom';

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
        stars.push(<i key={`full-${i}`} className="fas fa-star full-star"></i>);
    }
    if (hasHalfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt half-star"></i>);
    }
    // Fill remaining with empty stars
    const remaining = 5 - stars.length;
    for (let i = 0; i < remaining; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star empty-star"></i>);
    }
    
    return <div className="testimonial-rating">{stars}</div>;
};

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            {/* Hero Section */}
            <section className="testimonials-hero">
                <div className="hero-content-testimonials">
                    <h1 className="hero-heading-testimonials">Voices of Our Success</h1>
                    <p className="hero-tagline-testimonials">
                        Hear directly from the clients who have partnered with MiradoVista HR to achieve their strategic business goals.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="testimonials-grid-section">
                <h2 className="section-title-testimonials">What Our Clients Say</h2>
                <p className="section-subtitle-testimonials">
                    Trusted across consulting, compliance, and essential business supply.
                </p>

                <div className="testimonials-grid">
                    {testimonialData.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <i className="fas fa-quote-left quote-icon"></i>
                            <p className="testimonial-quote">{t.quote}</p>
                            
                            <div className="testimonial-footer">
                                {renderStars(t.rating)}
                                <h3 className="testimonial-author">{t.author}</h3>
                                <p className="testimonial-title">{t.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-testimonials-section">
                <h3>Ready to Experience the MiradoVista Difference?</h3>
                <p>Contact us today and let us tailor a solution that meets your unique business needs.</p>
                <Link to="/contact" className="cta-testimonials-button">Get Started Now</Link>
            </section>
        </div>
    );
};

export default Testimonials;