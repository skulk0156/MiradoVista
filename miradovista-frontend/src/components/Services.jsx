import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom'; // <-- FIX 1: ADD useLocation
import { AnimatePresence } from 'framer-motion'; // <-- FIX 2: ADD AnimatePresence import
import './Services.css'; 
import AnimatedPage from './AnimatedPage'; // Assuming this is now correctly in src/components/

// --- 1. Sub-Components for Detailed Service Pages (HRConsultingPage, LegalConsultingPage, etc.) ---
// ... (Your Sub-Components go here, unchanged) ...
const HRConsultingPage = () => (
    <div className="detailed-service-page">
        <h2 className="detailed-service-title">Strategic HR Consulting Services</h2>
        <p>We partner with businesses to optimize their human resources functions, ensuring compliance, driving talent engagement, and fostering a productive workplace culture.</p>
        <div className="detail-points">
            <h3 className="detail-subtitle">Core HR Solutions:</h3>
            <ul>
                <li><i className="fas fa-hand-point-right"></i> Talent Management: Performance Appraisal Systems, Training & Development.</li>
                <li><i className="fas fa-hand-point-right"></i> Policy & Compliance: HR manual drafting, Statutory Compliance audits.</li>
                <li><i className="fas fa-hand-point-right"></i> Compensation & Benefits: Benchmarking and salary structure design.</li>
                <li><i className="fas fa-hand-point-right"></i> Employee Engagement: Surveys, retention strategies, and conflict resolution.</li>
            </ul>
        </div>
        <button className="cta-services-button">Request HR Consultation</button>
    </div>
);

const LegalConsultingPage = () => (
    <div className="detailed-service-page">
        <h2 className="detailed-service-title">Legal Consulting & Compliance Solutions</h2>
        <p>Navigate the complex legal landscape with our expert consulting. We provide proactive advice and solutions to minimize risk and ensure your operations adhere to all relevant commercial and employment laws.</p>
        <div className="detail-points">
            <h3 className="detail-subtitle">Legal Advisory Areas:</h3>
            <ul>
                <li><i className="fas fa-hand-point-right"></i> Commercial Law: Contract drafting, review, and negotiation.</li>
                <li><i className="fas fa-hand-point-right"></i> Labor Law Compliance: PF, ESI, Minimum Wages Act adherence.</li>
                <li><i className="fas fa-hand-point-right"></i> Business Registrations: Guidance on company formation and licensing.</li>
                <li><i className="fas fa-hand-point-right"></i> Intellectual Property: Basic advisory on trademarks and copyrights.</li>
            </ul>
        </div>
        <button className="cta-services-button">Get Legal Advisory</button>
    </div>
);

const ITConsultingPage = () => (
    <div className="detailed-service-page">
        <h2 className="detailed-service-title">IT Consulting Services</h2>
        <p>Leverage technology for business growth. Our IT consultants provide strategic guidance on infrastructure, digital transformation, and system optimization to enhance efficiency and security.</p>
        <div className="detail-points">
            <h3 className="detail-subtitle">Key IT Focus:</h3>
            <ul>
                <li><i className="fas fa-hand-point-right"></i> Digital Transformation Strategy: Roadmap for technology adoption.</li>
                <li><i className="fas fa-hand-point-right"></i> Cloud Services: Migration planning and cloud optimization.</li>
                <li><i className="fas fa-hand-point-right"></i> Cybersecurity Audits: Risk assessment and policy implementation.</li>
                <li><i className="fas fa-hand-point-right"></i> Software Selection: Guidance on choosing the right CRM/ERP systems.</li>
            </ul>
        </div>
        <button className="cta-services-button">Discuss Your IT Roadmap</button>
    </div>
);

const StationerySuppliesPage = () => (
    <div className="detailed-service-page">
        <h2 className="detailed-service-title">Office Stationery Product Supplies</h2>
        <p>Ensure your office runs smoothly with our reliable and timely supply of high-quality stationery and consumables. We offer bulk ordering and consolidated billing for convenience.</p>
        <div className="detail-points">
            <h3 className="detail-subtitle">Products We Supply:</h3>
            <ul>
                <li><i className="fas fa-hand-point-right"></i> Paper Products: All types of printing and writing paper.</li>
                <li><i className="fas fa-hand-point-right"></i> **Desk Essentials: Pens, markers, staplers, and folders.</li>
                <li><i className="fas fa-hand-point-right"></i> Printing Consumables: Printer cartridges (toner and ink).</li>
                <li><i className="fas fa-hand-point-right"></i> Customized Items: Branded notebooks and promotional stationery.</li>
            </ul>
        </div>
        <button className="cta-services-button">View Product Catalog</button>
    </div>
);


// --- 2. Component for the Main Services Grid (ServicesGrid) ---
// ... (Your ServicesGrid component goes here, unchanged) ...
const ServicesGrid = () => {
    // Updated data with slugs and specific icons
    const coreServices = [
        {
            slug: "hr-consulting",
            iconClass: "fas fa-user-tie",
            title: "HR Consulting Services",
            description: "Strategic advisory on talent management, compliance, and policy development.",
        },
        {
            slug: "legal-consulting",
            iconClass: "fas fa-balance-scale",
            title: "Legal Consulting Solutions",
            description: "Expert guidance on commercial laws, labor compliance, and corporate registrations.",
        },
        {
            slug: "it-consulting",
            iconClass: "fas fa-laptop-code",
            title: "IT Consulting Services",
            description: "Strategy and implementation support for cloud, security, and digital transformation.",
        },
        {
            slug: "stationery-supplies",
            iconClass: "fas fa-box-open",
            title: "Office Stationery Supplies",
            description: "Reliable and bulk supply of quality paper products, consumables, and desk essentials.",
        },
    ];

    return (
        <>
            <section className="services-hero">
                <div className="hero-content">
                    <h1 className="hero-heading-services">Integrated Business Solutions</h1>
                    <p className="hero-tagline-services">
                        Beyond HR, we offer a portfolio of essential consulting and supply services tailored to streamline your business operations and procurement needs.
                    </p>
                </div>
            </section>

            <section className="core-services-section">
                <h2 className="section-title-services">Our Service Verticals</h2>
                <p className="section-subtitle-services">
                    Select a service to explore how we can add value to your organization.
                </p>

                <div className="services-grid">
                    {coreServices.map((service, index) => (
                        // Link wraps the card to enable navigation
                        <Link to={service.slug} className="service-card-link" key={index}>
                            <div className="service-card">
                                <i className={`icon-service-style ${service.iconClass}`}></i>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-description">{service.description}</p>
                                <span className="read-more-link">View Details <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};


// --- 3. Parent Services Component with Nested Routing (FIXED) ---

const Services = () => {
    // FIX 3: Define the location hook here to use in Routes
    const location = useLocation(); 

    return (
        <div className="services-container">
            <AnimatePresence mode="wait">
                {/* location={location} and key={location.pathname} are now correctly defined */}
                <Routes location={location} key={location.pathname}> 
                    
                    {/* WRAP ALL NESTED ROUTES */}
                    <Route index element={<AnimatedPage><ServicesGrid /></AnimatedPage>} />
                    
                    <Route path="hr-consulting" element={<AnimatedPage><HRConsultingPage /></AnimatedPage>} />
                    <Route path="legal-consulting" element={<AnimatedPage><LegalConsultingPage /></AnimatedPage>} />
                    <Route path="it-consulting" element={<AnimatedPage><ITConsultingPage /></AnimatedPage>} />
                    <Route path="stationery-supplies" element={<AnimatedPage><StationerySuppliesPage /></AnimatedPage>} />
                    
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default Services;