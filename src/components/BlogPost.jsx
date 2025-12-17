// BlogPost.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaArrowRight, FaSearch, FaUser, FaCalendarAlt, FaTag, FaShare, FaBookmark, FaThumbsUp, FaComment } from 'react-icons/fa';

const BlogPost = () => {
    const { id } = useParams();
    
    // Blog post data
    const blogPosts = [
        { 
            id: 1, 
            title: "The Future of Hybrid Work: HR Policy Updates", 
            category: "HR", 
            date: "Oct 25, 2025", 
            excerpt: "As companies transition to hybrid models, understanding the nuances of remote work policies and compliance is crucial for success...", 
            image: "", 
            author: "Priya Sharma",
            readTime: "8 min read",
            tags: ["Hybrid Work", "HR Policy", "Remote Work", "Compliance"]
        },
        { 
            id: 2, 
            title: "Navigating India's New Labour Codes: A Compliance Checklist", 
            category: "Legal", 
            date: "Oct 18, 2025", 
            excerpt: "The introduction of the new labour codes brings significant changes to wages, working hours, and social security. Here's what your business needs to know...", 
            image: "", 
            author: "Rajesh Kumar",
            readTime: "10 min read",
            tags: ["Labour Codes", "Compliance", "Legal", "Indian Business"]
        },
        { 
            id: 3, 
            title: "5 Steps to a Secure Cloud Migration Strategy", 
            category: "IT", 
            date: "Oct 10, 2025", 
            excerpt: "Moving your infrastructure to the cloud requires careful planning to ensure data security and minimal downtime. Follow our five key steps...", 
            image: "", 
            author: "Sneha Reddy",
            readTime: "12 min read",
            tags: ["Cloud Migration", "IT Infrastructure", "Data Security", "Technology"]
        },
        { 
            id: 4, 
            title: "Beyond Paper: Optimizing Office Procurement for Cost Savings", 
            category: "Supplies", 
            date: "Oct 01, 2025", 
            excerpt: "Are you spending too much on consumables? Learn how bulk ordering and vendor consolidation can drastically reduce your procurement costs...", 
            image: "", 
            author: "Vikram Singh",
            readTime: "7 min read",
            tags: ["Procurement", "Cost Savings", "Office Supplies", "Vendor Management"]
        },
        { 
            id: 5, 
            title: "Employee Engagement in the Digital Age: Best Practices", 
            category: "HR", 
            date: "Sep 25, 2025", 
            excerpt: "Keeping remote and hybrid teams engaged requires creativity and the right tools. We cover the top strategies for boosting morale and retention...", 
            image: "", 
            author: "Anjali Menon",
            readTime: "9 min read",
            tags: ["Employee Engagement", "Remote Work", "Team Building", "Digital Tools"]
        },
        { 
            id: 6, 
            title: "Intellectual Property Basics for Startups in India", 
            category: "Legal", 
            date: "Sep 15, 2025", 
            excerpt: "Protecting your brand and innovations is vital. This guide covers the initial steps for trademarks, copyrights, and basic IP registration...", 
            image: "", 
            author: "David Lee",
            readTime: "11 min read",
            tags: ["Intellectual Property", "Startups", "Trademarks", "Copyrights"]
        }
    ];

    // Find the current blog post
    const post = blogPosts.find(p => p.id === parseInt(id));
    
    // If post not found, show error message
    if (!post) {
        return (
            <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <p className="text-xl mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
                    <Link to="/blogs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium hover:shadow-lg transition-all duration-300">
                        <FaArrowRight className="rotate-180" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    // Get related posts (excluding current post)
    const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
    if (relatedPosts.length < 3) {
        const otherPosts = blogPosts.filter(p => p.id !== post.id && p.category !== post.category);
        relatedPosts.push(...otherPosts.slice(0, 3 - relatedPosts.length));
    }

    // State for user interactions
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 20);
    const [comments, setComments] = useState([
        { id: 1, author: "John Doe", date: "2 days ago", content: "This article provides excellent insights into the challenges of implementing hybrid work policies. The compliance checklist is particularly helpful for HR professionals navigating this new landscape." },
        { id: 2, author: "Jane Smith", date: "1 week ago", content: "I've been struggling with how to evaluate performance fairly in a hybrid environment. The suggestions in this article have given me some great ideas to implement in our organization." }
    ]);
    const [newComment, setNewComment] = useState("");

    const getCategoryColor = (category) => {
        switch(category) {
            case "HR": return "bg-[#D4AF37]/20 text-[#8B4513] border-[#D4AF37]";
            case "Legal": return "bg-[#8B4513]/20 text-[#8B4513] border-[#8B4513]";
            case "IT": return "bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2]";
            case "Supplies": return "bg-[#2ECC71]/20 text-[#2ECC71] border-[#2ECC71]";
            default: return "bg-gray-100 text-gray-600 border-gray-300";
        }
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    const handleComment = () => {
        if (newComment.trim()) {
            setComments([...comments, {
                id: comments.length + 1,
                author: "Current User",
                date: "Just now",
                content: newComment
            }]);
            setNewComment("");
        }
    };

    // Get detailed content based on post ID
    const getDetailedContent = () => {
        switch(post.id) {
            case 1: // The Future of Hybrid Work: HR Policy Updates
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            As companies transition to hybrid models, understanding the nuances of remote work policies and compliance is crucial for success. The post-pandemic workplace has fundamentally shifted, with organizations worldwide embracing flexible work arrangements that balance productivity with employee well-being.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">The Hybrid Work Revolution</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Hybrid work models represent a significant departure from traditional office-based structures. According to recent studies, over 70% of organizations plan to implement some form of hybrid work arrangement permanently. This shift requires comprehensive policy updates that address legal compliance, technology infrastructure, and cultural transformation.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Key Policy Considerations</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Work hour regulations across different jurisdictions</li>
                            <li>Equipment and home office stipends</li>
                            <li>Data security protocols for remote access</li>
                            <li>Performance evaluation frameworks for distributed teams</li>
                            <li>Health and safety responsibilities for home offices</li>
                        </ul>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            One of the most significant challenges HR professionals face is ensuring compliance with varying labor laws across different states and countries. When employees work remotely from locations different from the company's headquarters, organizations must navigate complex legal landscapes regarding working hours, tax implications, and benefits eligibility.
                        </p>
                        
                        <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic text-white/90 leading-relaxed text-lg">
                            "The future of work is not about choosing between remote or office—it's about creating flexible environments that support both productivity and human connection."
                            <p className="text-right mt-2 text-[#D4AF37] not-italic">— Sarah Chen, Workplace Strategy Expert</p>
                        </blockquote>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Technology Infrastructure Requirements</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            A successful hybrid model requires robust technology infrastructure. This includes secure VPN access, collaboration tools, and performance monitoring systems. Organizations must establish clear policies regarding equipment provision, technical support, and data security protocols for employees working from various locations.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            Additionally, companies must address the digital divide by ensuring all employees have access to reliable internet and appropriate technology. This may involve providing stipends for home office setups or implementing equipment loan programs to create equitable working conditions across the workforce.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Cultural Transformation and Employee Engagement</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Beyond policies and technology, hybrid work requires a fundamental shift in organizational culture. HR leaders must develop new strategies for maintaining team cohesion, fostering collaboration, and preserving company culture across distributed teams.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Best Practices for Hybrid Culture</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Establishing clear communication protocols for both in-office and remote employees</li>
                            <li>Creating intentional opportunities for social connection and team building</li>
                            <li>Implementing fair evaluation systems that don't disadvantage remote workers</li>
                            <li>Providing regular training on hybrid work best practices for managers and employees</li>
                            <li>Developing inclusive meeting practices that accommodate all participants</li>
                        </ul>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            The psychological impact of hybrid work cannot be overlooked. Organizations must prioritize mental health resources and establish boundaries to prevent burnout in an always-connected environment. This includes respecting working hours, encouraging regular breaks, and providing support for employees who may feel isolated.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Legal Compliance in Hybrid Work Environments</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Navigating the legal landscape of hybrid work requires careful attention to jurisdiction-specific regulations. When employees work from different states or countries, organizations must comply with multiple sets of labor laws regarding working hours, overtime, breaks, and leave entitlements.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Compliance Checklist for HR Teams</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Review and update employee handbooks to reflect hybrid work arrangements</li>
                            <li>Establish clear policies for work hours and availability expectations</li>
                            <li>Create procedures for reporting work-related injuries in home offices</li>
                            <li>Develop data privacy protocols that comply with regional regulations</li>
                            <li>Implement tax withholding processes for multi-state employees</li>
                        </ul>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            Workers' compensation presents unique challenges in hybrid environments. Organizations must clarify their responsibilities regarding home office safety and establish protocols for addressing injuries that occur while working remotely. This may include conducting virtual home office safety assessments and providing guidelines for ergonomic setups.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Looking Ahead: The Evolution of Hybrid Work</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            As hybrid work models continue to evolve, HR policies must remain flexible and adaptable. Organizations should establish regular review cycles to assess the effectiveness of current policies and make adjustments based on employee feedback and changing business needs.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            The future of work will likely see further innovation in how we structure our professional lives. From four-day work weeks to results-oriented work environments, companies that remain agile and responsive to employee needs will be best positioned to attract and retain top talent in the competitive landscape of tomorrow.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            By approaching hybrid work with intentionality and strategic planning, organizations can create flexible, productive, and equitable work environments that benefit both employees and the business. The key lies in developing comprehensive policies that address the complex challenges of this new work paradigm while fostering a culture of trust, collaboration, and innovation.
                        </p>
                    </div>
                );
                
            case 2: // Navigating India's New Labour Codes: A Compliance Checklist
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            The introduction of the new labour codes brings significant changes to wages, working hours, and social security. Here's what your business needs to know to ensure compliance with India's revamped labor regulatory framework.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Understanding the Four Labour Codes</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The Indian government has consolidated 29 central labor laws into four comprehensive codes:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li><strong>Code on Wages, 2019</strong> - Consolidates laws relating to wages and bonus</li>
                            <li><strong>Industrial Relations Code, 2020</strong> - Combines laws relating to industrial relations</li>
                            <li><strong>Code on Social Security, 2020</strong> - Merges provisions relating to social security</li>
                            <li><strong>Occupational Safety, Health and Working Conditions Code, 2020</strong> - Consolidates laws relating to safety, health and working conditions</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Key Changes Affecting Businesses</h2>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">1. Definition of 'Wages'</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The new codes have standardized the definition of 'wages' across all legislation. Wages now include all remuneration, whether expressed in terms of money or not, and would include:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Basic pay</li>
                            <li>Dearness allowance</li>
                            <li>Retaining allowance</li>
                        </ul>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Exclusions from the definition of wages include statutory contributions, traveling allowances, house rent allowance, and other specific allowances. Importantly, allowances must not exceed 50% of the total remuneration.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">2. Working Hours and Overtime</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The new codes have introduced flexibility in working hours while ensuring employee welfare:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Normal working hours remain at 8 hours per day and 48 hours per week</li>
                            <li>Provision for increased working hours up to 12 hours per day with appropriate overtime</li>
                            <li>Overtime rates remain at twice the ordinary rate of wages</li>
                            <li>Consent from employees is required for overtime work</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">3. Leave Provisions</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The codes have standardized leave provisions across industries:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Every employee who has worked for 240 days in a year is entitled to leave with wages</li>
                            <li>Annual leave entitlement: One day for every twenty days worked for adults, and one day for every fifteen days worked for children</li>
                            <li>Casual leave: 12 days per year</li>
                            <li>Sick leave: 12 days per year</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">4. Social Security Benefits</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The Code on Social Security has expanded coverage to include:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Gig workers and platform workers</li>
                            <li>Inter-state migrant workers</li>
                            <li>Unorganized sector workers</li>
                            <li>Fixed-term employees</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Compliance Checklist for Businesses</h2>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Immediate Actions Required</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Review and restructure salary components to align with the new definition of wages</li>
                            <li>Update employment contracts to reflect new provisions</li>
                            <li>Revisit working hours and overtime policies</li>
                            <li>Implement systems for tracking attendance and working hours</li>
                            <li>Ensure proper maintenance of statutory records</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Long-term Compliance Strategy</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Conduct a comprehensive audit of existing HR policies and practices</li>
                            <li>Train HR and legal teams on the new codes</li>
                            <li>Develop communication strategies to inform employees about changes</li>
                            <li>Implement grievance redressal mechanisms as required by the codes</li>
                            <li>Establish processes for regular compliance reviews</li>
                        </ul>
                        
                        <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic text-white/90 leading-relaxed text-lg">
                            "The new labor codes represent a paradigm shift in India's regulatory landscape. Proactive compliance will not only avoid legal complications but also enhance organizational reputation and employee trust."
                            <p className="text-right mt-2 text-[#D4AF37] not-italic">— Rajiv Mehta, Labor Law Expert</p>
                        </blockquote>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Industry-Specific Considerations</h2>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">IT and Services Sector</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Companies in the IT and services sector should pay special attention to:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Provisions related to working from home and remote work</li>
                            <li>Definitions of appropriate government for companies with employees in multiple states</li>
                            <li>Compliance with data security requirements in the context of remote work</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Manufacturing Sector</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Manufacturing businesses need to focus on:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Occupational safety and health provisions</li>
                            <li>Regulations related to hazardous processes</li>
                            <li>Working conditions for contract and outsourced labor</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Implementation Timeline and Next Steps</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            While the codes have been passed by Parliament, the rules for implementation are still being finalized. However, businesses should not wait for full implementation to begin compliance efforts. The transition period provides an opportunity to:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Conduct gap analyses between current practices and new requirements</li>
                            <li>Develop implementation roadmaps with clear timelines</li>
                            <li>Allocate budgets for necessary changes to systems and processes</li>
                            <li>Engage with legal counsel for interpretation of complex provisions</li>
                        </ul>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            By taking a proactive approach to compliance, businesses can turn regulatory changes into opportunities for enhancing workplace practices, improving employee relations, and building a more resilient organization for the future.
                        </p>
                    </div>
                );
                
            case 3: // 5 Steps to a Secure Cloud Migration Strategy
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            Moving your infrastructure to the cloud requires careful planning to ensure data security and minimal downtime. Follow our five key steps to successfully migrate your systems while maintaining security and business continuity.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Step 1: Comprehensive Assessment and Planning</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Before beginning your cloud migration journey, conduct a thorough assessment of your current infrastructure:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Inventory all applications, data, and dependencies</li>
                            <li>Categorize workloads based on criticality and complexity</li>
                            <li>Identify compliance requirements and data sensitivity levels</li>
                            <li>Assess technical readiness and potential migration challenges</li>
                            <li>Define clear business objectives and success metrics</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Security Considerations in Planning</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            During the planning phase, integrate security considerations from the outset:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Conduct a security risk assessment for each application</li>
                            <li>Identify data protection requirements based on regulatory compliance</li>
                            <li>Evaluate cloud service providers' security certifications and controls</li>
                            <li>Define security architecture for the cloud environment</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Step 2: Choose the Right Cloud Model</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Selecting the appropriate cloud model is crucial for security and operational efficiency:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Public Cloud</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Public clouds offer scalability and cost-effectiveness but require careful security configuration:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Ideal for non-sensitive workloads and applications with variable demand</li>
                            <li>Requires robust identity and access management</li>
                            <li>Implement encryption for data at rest and in transit</li>
                            <li>Regular security assessments and configuration reviews are essential</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Private Cloud</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Private clouds offer enhanced control and security for sensitive data:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Suitable for highly regulated industries and sensitive applications</li>
                            <li>Provides greater control over security configurations</li>
                            <li>Can be hosted on-premises or by a third-party provider</li>
                            <li>Higher initial investment but potentially lower long-term costs for specific use cases</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Hybrid Cloud</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Hybrid models combine the benefits of both public and private clouds:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Allows sensitive data to remain in private cloud while leveraging public cloud resources</li>
                            <li>Provides flexibility to optimize costs and performance</li>
                            <li>Requires robust security controls for data exchange between environments</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Step 3: Design a Secure Cloud Architecture</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            A well-designed cloud architecture is the foundation of a secure migration:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Network Security</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Implement virtual private clouds (VPCs) to isolate resources</li>
                            <li>Configure network security groups and firewalls</li>
                            <li>Set up VPN or dedicated connections for secure connectivity</li>
                            <li>Implement micro-segmentation to limit lateral movement</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Identity and Access Management</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Implement multi-factor authentication for all users</li>
                            <li>Apply the principle of least privilege for access controls</li>
                            <li>Utilize role-based access control (RBAC)</li>
                            <li>Implement just-in-time access for privileged operations</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Data Protection</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Encrypt data at rest using appropriate encryption standards</li>
                            <li>Implement encryption in transit using TLS/SSL</li>
                            <li>Establish data classification and handling policies</li>
                            <li>Implement data loss prevention (DLP) controls</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Step 4: Execute a Phased Migration</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            A phased approach minimizes risk and allows for learning and adjustment:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Pilot Migration</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Start with non-critical applications to test processes</li>
                            <li>Document lessons learned and refine procedures</li>
                            <li>Validate security controls in the new environment</li>
                            <li>Test disaster recovery and business continuity plans</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Incremental Rollout</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Prioritize applications based on business value and complexity</li>
                            <li>Implement parallel operations during transition periods</li>
                            <li>Monitor performance and security metrics continuously</li>
                            <li>Maintain rollback capabilities for each migration wave</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Step 5: Implement Ongoing Security Management</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Security is an ongoing process, not a one-time implementation:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Continuous Monitoring</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Implement cloud security posture management (CSPM) tools</li>
                            <li>Deploy security information and event management (SIEM) systems</li>
                            <li>Set up automated alerts for security events</li>
                            <li>Conduct regular vulnerability assessments and penetration testing</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Incident Response</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Develop cloud-specific incident response procedures</li>
                            <li>Conduct regular tabletop exercises to test response capabilities</li>
                            <li>Establish communication protocols for security incidents</li>
                            <li>Implement automated containment and remediation where possible</li>
                        </ul>
                        
                        <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic text-white/90 leading-relaxed text-lg">
                            "Cloud security is a shared responsibility. While providers secure the cloud infrastructure, customers must secure what they put in the cloud. Understanding this model is fundamental to successful cloud migration."
                            <p className="text-right mt-2 text-[#D4AF37] not-italic">— Priya Nair, Cloud Security Architect</p>
                        </blockquote>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Conclusion</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            A secure cloud migration requires careful planning, the right architectural decisions, and ongoing vigilance. By following these five steps—comprehensive assessment, choosing the right cloud model, designing secure architecture, executing a phased migration, and implementing ongoing security management—organizations can successfully transition to the cloud while maintaining security and business continuity.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            Remember that cloud security is not a destination but a continuous journey of improvement and adaptation to evolving threats and business needs.
                        </p>
                    </div>
                );
                
            case 4: // Beyond Paper: Optimizing Office Procurement for Cost Savings
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            Are you spending too much on consumables? Learn how bulk ordering and vendor consolidation can drastically reduce your procurement costs while improving efficiency and sustainability.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">The Hidden Costs of Inefficient Procurement</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Many organizations underestimate the impact of inefficient procurement practices on their bottom line. Beyond the obvious expense of purchasing supplies, hidden costs include:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Administrative overhead from processing multiple small orders</li>
                            <li>Storage costs for excess inventory</li>
                            <li>Waste from unused or expired supplies</li>
                            <li>Time spent managing multiple vendor relationships</li>
                            <li>Missed opportunities for volume discounts</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 1: Strategic Bulk Ordering</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Bulk ordering remains one of the most effective strategies for reducing procurement costs:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Benefits of Bulk Purchasing</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Volume discounts from suppliers</li>
                            <li>Reduced shipping costs per unit</li>
                            <li>Lower administrative overhead per order</li>
                            <li>Price protection against market fluctuations</li>
                            <li>Improved supply chain stability</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Implementing Effective Bulk Ordering</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Conduct usage analysis to determine optimal order quantities</li>
                            <li>Implement just-in-time inventory systems to reduce storage costs</li>
                            <li>Establish reorder points based on consumption patterns</li>
                            <li>Consider collaborative purchasing with other departments or organizations</li>
                            <li>Negotiate favorable terms with suppliers based on commitment volume</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 2: Vendor Consolidation</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Reducing the number of vendors can significantly streamline procurement processes:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Advantages of Vendor Consolidation</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Increased bargaining power with remaining suppliers</li>
                            <li>Reduced administrative overhead</li>
                            <li>Simplified payment processes</li>
                            <li>Stronger supplier relationships</li>
                            <li>Easier quality control and standardization</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Steps to Successful Vendor Consolidation</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Categorize purchases by type and importance</li>
                            <li>Evaluate current vendors on performance, cost, and reliability</li>
                            <li>Identify opportunities to consolidate similar purchases</li>
                            <li>Develop strategic partnerships with key suppliers</li>
                            <li>Implement regular vendor performance reviews</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 3: Digital Procurement Solutions</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Modern procurement software can transform your purchasing processes:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Key Features of Effective Procurement Systems</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Automated approval workflows</li>
                            <li>Real-time inventory tracking</li>
                            <li>Spend analytics and reporting</li>
                            <li>Integration with accounting systems</li>
                            <li>Mobile access for remote approvals</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Implementation Considerations</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Choose systems that integrate with existing software</li>
                            <li>Provide comprehensive training to all users</li>
                            <li>Start with pilot departments before full rollout</li>
                            <li>Establish clear metrics to measure ROI</li>
                            <li>Plan for ongoing support and system updates</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 4: Sustainable Procurement Practices</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Sustainability initiatives can lead to significant cost savings:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Cost-Effective Sustainability Measures</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Switch to remanufactured toner cartridges (30-50% cost savings)</li>
                            <li>Implement centralized printing to reduce waste</li>
                            <li>Choose products with minimal packaging</li>
                            <li>Opt for durable goods over disposable alternatives</li>
                            <li>Implement recycling programs for office supplies</li>
                        </ul>
                        
                        <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic text-white/90 leading-relaxed text-lg">
                            "Sustainable procurement isn't just about environmental responsibility—it's about smart business. Companies that embrace sustainable practices often see significant cost reductions alongside their environmental benefits."
                            <p className="text-right mt-2 text-[#D4AF37] not-italic">— Anita Sharma, Procurement Director</p>
                        </blockquote>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 5: Employee Engagement and Training</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Employee behavior has a significant impact on procurement efficiency:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Building a Cost-Conscious Culture</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Educate employees on the true cost of supplies</li>
                            <li>Implement approval processes for non-standard purchases</li>
                            <li>Recognize and reward cost-saving initiatives</li>
                            <li>Make procurement policies easily accessible</li>
                            <li>Provide regular feedback on departmental spending</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Measuring Success: Key Metrics</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Track these metrics to evaluate the effectiveness of your procurement optimization efforts:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Cost per unit of frequently purchased items</li>
                            <li>Order processing time</li>
                            <li>Inventory carrying costs</li>
                            <li>Supplier performance ratings</li>
                            <li>Employee satisfaction with procurement processes</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Implementation Roadmap</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Follow this step-by-step approach to transform your procurement processes:
                        </p>
                        <ol className="list-decimal list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Conduct a comprehensive audit of current procurement practices</li>
                            <li>Identify quick wins and long-term opportunities</li>
                            <li>Pilot changes in one department or category</li>
                            <li>Measure results and refine approach</li>
                            <li>Roll out successful practices across the organization</li>
                            <li>Establish continuous improvement processes</li>
                        </ol>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Conclusion</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Optimizing office procurement is not just about cutting costs—it's about creating efficient, sustainable, and employee-friendly processes. By implementing strategic bulk ordering, vendor consolidation, digital solutions, sustainable practices, and employee engagement, organizations can achieve significant cost savings while improving operational efficiency.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            Remember that procurement optimization is an ongoing process. Regular reviews and adjustments will ensure your organization continues to benefit from improved practices as market conditions and business needs evolve.
                        </p>
                    </div>
                );
                
            case 5: // Employee Engagement in the Digital Age: Best Practices
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            Keeping remote and hybrid teams engaged requires creativity and the right tools. We cover the top strategies for boosting morale and retention in today's digital workplace.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">The New Engagement Challenge</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The shift to remote and hybrid work has fundamentally changed how organizations approach employee engagement. Without the spontaneous interactions and physical presence of traditional office environments, companies must be more intentional about creating connection and community.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            Research shows that engaged employees are 17% more productive and have 41% lower absenteeism. In a distributed workforce, these benefits are even more critical to maintaining organizational performance and culture.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 1: Purposeful Communication</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Communication in remote environments must be deliberate and multifaceted:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Establish Communication Rhythms</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Daily team check-ins (15 minutes max)</li>
                            <li>Weekly one-on-ones between managers and direct reports</li>
                            <li>Bi-weekly all-hands meetings with leadership updates</li>
                            <li>Monthly cross-departmental knowledge sharing sessions</li>
                            <li>Quarterly virtual town halls with Q&A sessions</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Optimize Communication Channels</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Use asynchronous tools (Slack, Teams) for quick questions and updates</li>
                            <li>Reserve video calls for collaborative work and complex discussions</li>
                            <li>Implement a centralized knowledge base for documentation</li>
                            <li>Create clear guidelines for response expectations</li>
                            <li>Encourage video-on policies during meetings to enhance connection</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 2: Recognition and Appreciation</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Recognition is even more important when physical proximity is limited:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Formal Recognition Programs</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Implement peer-to-peer recognition platforms</li>
                            <li>Create digital badges or awards for specific achievements</li>
                            <li>Spotlight employees in company newsletters or virtual meetings</li>
                            <li>Offer meaningful rewards that align with employee preferences</li>
                            <li>Celebrate work anniversaries and milestones publicly</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Informal Appreciation</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Encourage managers to send personalized thank-you notes</li>
                            <li>Create dedicated Slack channels for sharing wins</li>
                            <li>Send care packages or home office upgrades to top performers</li>
                            <li>Encourage team leaders to acknowledge contributions in real-time</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 3: Virtual Team Building</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Intentional social connection is essential for remote teams:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Structured Social Activities</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Virtual coffee chats with randomized pairings</li>
                            <li>Online team-building games and escape rooms</li>
                            <li>Virtual happy hours with themed discussions</li>
                            <li>Remote cooking classes or mixology sessions</li>
                            <li>Online fitness challenges or wellness programs</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Informal Connection Opportunities</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Create non-work-related Slack channels</li>
                            <li>Encourage "water cooler" video calls with no agenda</li>
                            <li>Share personal updates and celebrations</li>
                            <li>Facilitate interest-based groups (book clubs, gaming, etc.)</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 4: Growth and Development</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Professional development opportunities significantly impact engagement:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Remote-Friendly Learning</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Provide access to online learning platforms</li>
                            <li>Implement virtual mentorship programs</li>
                            <li>Create job rotation opportunities across departments</li>
                            <li>Offer stipends for professional development</li>
                            <li>Host virtual lunch-and-learn sessions with internal experts</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Career Path Transparency</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Create clear career progression frameworks</li>
                            <li>Implement regular career development conversations</li>
                            <li>Provide transparent salary bands and promotion criteria</li>
                            <li>Offer internal mobility opportunities</li>
                            <li>Share success stories of internal advancement</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Strategy 5: Wellness and Work-Life Balance</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Supporting employee well-being is critical for sustainable engagement:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Flexible Work Policies</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Implement core hours with flexibility outside them</li>
                            <li>Offer compressed workweek options</li>
                            <li>Provide unlimited PTO with manager approval</li>
                            <li>Encourage taking regular breaks and vacation time</li>
                            <li>Respect boundaries after work hours</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Mental Health Support</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Provide access to mental health resources and counseling</li>
                            <li>Train managers to recognize signs of burnout</li>
                            <li>Implement "no-meeting" days or blocks of time</li>
                            <li>Offer meditation and mindfulness app subscriptions</li>
                            <li>Destigmatize mental health discussions</li>
                        </ul>
                        
                        <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic text-white/90 leading-relaxed text-lg">
                            "Employee engagement in remote environments isn't about replicating office culture online—it's about creating new, intentional ways to connect, recognize, and support your team regardless of location."
                            <p className="text-right mt-2 text-[#D4AF37] not-italic">— Dr. Rachel Chen, Organizational Psychologist</p>
                        </blockquote>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Measuring Remote Engagement</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Track these metrics to evaluate the effectiveness of your engagement strategies:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Regular pulse surveys with targeted questions</li>
                            <li>Voluntary turnover rates</li>
                            <li>Meeting participation and contribution levels</li>
                            <li>Utilization of benefits and development resources</li>
                            <li>Peer recognition frequency</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Technology Tools for Engagement</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Leverage these digital tools to enhance engagement:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Recognition platforms (Bonusly, Kudos)</li>
                            <li>Virtual team building platforms (Brightful, TeamBonding)</li>
                            <li>Employee feedback tools (Culture Amp, Glint)</li>
                            <li>Wellness apps (Calm, Headspace for Work)</li>
                            <li>Virtual collaboration spaces (Miro, Mural)</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Conclusion</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Engaging remote and hybrid employees requires a more intentional approach than traditional office environments. By implementing purposeful communication, recognition programs, virtual team building, growth opportunities, and wellness support, organizations can create an engaging culture that transcends physical boundaries.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            Remember that engagement is not one-size-fits-all. Regular feedback and flexibility will help you refine your approach to meet the evolving needs of your distributed workforce.
                        </p>
                    </div>
                );
                
            case 6: // Intellectual Property Basics for Startups in India
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            Protecting your brand and innovations is vital. This guide covers the initial steps for trademarks, copyrights, and basic IP registration in the Indian context.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Why Intellectual Property Matters for Startups</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            For startups, intellectual property (IP) is often the most valuable asset. It protects your innovations, creates barriers to entry for competitors, and can be a significant factor in attracting investors. In India's competitive startup ecosystem, a strong IP strategy can be the difference between success and failure.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            IP protection provides legal recourse against infringement, adds value to your company valuation, and can generate revenue through licensing. Despite these benefits, many startups neglect IP protection due to perceived complexity and cost, leaving themselves vulnerable to copycats and disputes.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Types of Intellectual Property in India</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            India recognizes several forms of intellectual property, each protecting different aspects of your business:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Trademarks</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Trademarks protect brand names, logos, slogans, and other identifiers that distinguish your products or services. In India, trademarks are registered with the Controller General of Patents, Designs and Trademarks.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Copyrights</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Copyrights protect original works of authorship, including software code, website content, marketing materials, and creative works. Copyright protection is automatic in India, but registration provides stronger legal protection.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Patents</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Patents protect inventions and technical innovations. To be patentable in India, an invention must be novel, non-obvious, and have industrial application. The patent process is complex and typically requires professional assistance.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Trade Secrets</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Trade secrets include confidential business information that provides a competitive edge. While not formally registered, trade secrets are protected through confidentiality agreements and security measures.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Step-by-Step Guide to Trademark Registration</h2>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 1: Conduct a Trademark Search</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Before applying, conduct a comprehensive search to ensure your proposed trademark isn't already in use:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Search the Indian Trademark Registry database</li>
                            <li>Check company names and domain registrations</li>
                            <li>Search social media platforms and app stores</li>
                            <li>Consider hiring a professional for a thorough search</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 2: Determine the Appropriate Class</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Trademarks are registered under specific classes based on the Nice Classification. India recognizes 45 classes (34 for goods and 11 for services). Selecting the correct class is crucial for effective protection.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 3: File the Trademark Application</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The application can be filed online through the IP India website:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Submit Form TM-A with required details</li>
                            <li>Pay the government fees (₹4,500 for individuals/startups)</li>
                            <li>Include a representation of the trademark</li>
                            <li>Specify the goods/services to be protected</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 4: Examination Process</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            After filing, your application undergoes examination:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>The trademark examiner reviews your application</li>
                            <li>Objections may be raised regarding distinctiveness or similarity</li>
                            <li>Respond to any objections within the specified timeframe</li>
                            <li>If accepted, the trademark is published in the Trademark Journal</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 5: Registration</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            If no opposition is filed within four months of publication, the trademark proceeds to registration. The registration certificate is typically issued within 6-8 months of successful publication.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Copyright Registration Process</h2>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 1: Determine Eligible Works</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Copyright protection applies to original works including:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Literary works (software code, website content)</li>
                            <li>Artistic works (graphics, designs)</li>
                            <li>Musical works and sound recordings</li>
                            <li>Cinematograph films</li>
                            <li>Dramatic works</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 2: Prepare the Application</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Copyright registration in India requires:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Completed Form XIV (Application for Registration of Copyright)</li>
                            <li>Three copies of the work</li>
                            <li>Proof of authorship and ownership</li>
                            <li>DD/IPO for the prescribed fee</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 3: Submission and Processing</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Applications can be submitted physically or online. The Copyright Office examines the application and may request additional information. Once approved, the registration is recorded in the Register of Copyrights.
                        </p>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Patent Application Basics</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            The patent process is more complex and typically requires professional assistance:
                        </p>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 1: Patentability Assessment</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Before applying, assess whether your invention meets patent criteria:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Novelty: Not previously disclosed anywhere in the world</li>
                            <li>Inventive step: Not obvious to a person skilled in the field</li>
                            <li>Industrial applicability: Can be made or used in industry</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 2: Prepare the Patent Application</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            A patent application includes:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Complete specification describing the invention</li>
                            <li>Claims defining the scope of protection</li>
                            <li>Drawings (if applicable)</li>
                            <li>Abstract summarizing the invention</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-6 leading-relaxed">Step 3: Filing and Examination</h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            After filing, the application undergoes examination:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Request for examination within 48 months of filing</li>
                            <li>Examination report issued with objections/requirements</li>
                            <li>Response to examination report</li>
                            <li>Hearing before the Controller if necessary</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Protecting Trade Secrets</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            While not formally registered, trade secrets require specific protection strategies:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Identify and document what constitutes your trade secrets</li>
                            <li>Implement physical and digital security measures</li>
                            <li>Use confidentiality agreements with employees and partners</li>
                            <li>Limit access to trade secrets on a need-to-know basis</li>
                            <li>Establish clear policies for handling confidential information</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">IP Enforcement in India</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Enforcement options for IP infringement in India include:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Civil actions for injunctions and damages</li>
                            <li>Criminal complaints for willful infringement</li>
                            <li>Administrative proceedings with IP offices</li>
                            <li>Customs recordation to prevent import of infringing goods</li>
                            <li>Alternative dispute resolution mechanisms</li>
                        </ul>
                        
                        <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic text-white/90 leading-relaxed text-lg">
                            "For startups, IP protection isn't a luxury—it's a necessity. The cost of protection is minimal compared to the potential losses from infringement or the inability to defend your innovations."
                            <p className="text-right mt-2 text-[#D4AF37] not-italic">— Arun Patel, IP Attorney</p>
                        </blockquote>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Cost Considerations for Startups</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Understanding the costs involved helps with budgeting:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Trademark registration: ₹4,500-9,000 per class (government fees)</li>
                            <li>Copyright registration: ₹500-2,000 per work</li>
                            <li>Patent application: ₹1,600-8,000 (government fees, depending on entity type)</li>
                            <li>Professional fees: Vary widely based on complexity</li>
                            <li>Maintenance fees: Required to keep patents and trademarks in force</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Common Mistakes to Avoid</h2>
                        <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 leading-relaxed text-lg">
                            <li>Delaying IP protection until after product launch</li>
                            <li>Not conducting thorough searches before registration</li>
                            <li>Choosing weak trademarks that are descriptive or generic</li>
                            <li>Publicly disclosing inventions before patent filing</li>
                            <li>Failing to maintain proper documentation of creation and development</li>
                            <li>Not having clear IP ownership agreements with founders and employees</li>
                        </ul>
                        
                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-relaxed font-[Playfair_Display]">Conclusion</h2>
                        <p className="text-white/90 leading-relaxed text-lg">
                            Intellectual property protection is a critical component of startup success in India's competitive ecosystem. By understanding the basics of trademarks, copyrights, patents, and trade secrets, founders can build a strong foundation for protecting their innovations and brand identity.
                        </p>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                            While the process may seem complex, early attention to IP protection can prevent costly disputes and create significant value for your startup. Consider consulting with an IP professional to develop a comprehensive strategy tailored to your specific business needs.
                        </p>
                    </div>
                );
                
            default:
                return (
                    <div className="space-y-6">
                        <p className="text-white/90 leading-relaxed text-lg">
                            Content for this blog post is coming soon. Please check back later for the full article.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="relative overflow-x-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#FFF9E5] font-[Poppins] pt-10 text-black">
            {/* Animated Gold Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5DFB0] via-[#F0C14B] to-[#D4AF37] bg-[length:400%_400%] animate-gradientBackground opacity-10"></div>
            
            {/* Hero Section */}
            <section className="relative px-6 py-16 overflow-hidden">
                <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37] opacity-20 blur-[200px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-6">
                        <Link to="/blogs" className="text-[#8B4513] hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                            <FaArrowRight className="rotate-180" /> Back to Blog
                        </Link>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border leading-relaxed ${getCategoryColor(post.category)}`}>
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1 text-sm text-[#666666] leading-relaxed">
                                    <FaClock className="text-[#D4AF37]" />
                                    {post.readTime}
                                </div>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#8B4513] to-[#D4AF37] bg-clip-text text-transparent font-[Playfair_Display] mb-6">
                                {post.title}
                            </h1>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 flex items-center justify-center">
                                    <FaUser className="text-[#8B4513]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[#333333]">{post.author}</p>
                                    <p className="text-sm text-[#666666]">{post.date}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 mb-8">
                                <button 
                                    onClick={handleLike}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                                        liked 
                                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white' 
                                            : 'bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 text-[#8B4513] hover:bg-[#D4AF37]/10'
                                    }`}
                                >
                                    <FaThumbsUp /> {likes}
                                </button>
                                <button 
                                    onClick={() => setBookmarked(!bookmarked)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                                        bookmarked 
                                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white' 
                                            : 'bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 text-[#8B4513] hover:bg-[#D4AF37]/10'
                                    }`}
                                >
                                    <FaBookmark /> {bookmarked ? 'Saved' : 'Save'}
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 text-[#8B4513] hover:bg-[#D4AF37]/10 transition-all duration-300">
                                    <FaShare /> Share
                                </button>
                            </div>
                        </div>
                        
                        <div className="md:w-1/3">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg">
                                <h3 className="text-xl font-bold text-[#8B4513] mb-4 leading-relaxed">Author</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 flex items-center justify-center">
                                        <FaUser className="text-[#8B4513] text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#333333]">{post.author}</p>
                                        <p className="text-sm text-[#666666]">Expert in {post.category}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    {post.author} is a recognized expert in {post.category} with extensive experience helping businesses navigate complex challenges and implement effective strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg">
                                <h3 className="text-xl font-bold text-[#8B4513] mb-4 leading-relaxed">Table of Contents</h3>
                                <ul className="space-y-2">
                                    <li className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer text-sm leading-relaxed">Introduction</li>
                                    <li className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer text-sm leading-relaxed">Key Challenges</li>
                                    <li className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer text-sm leading-relaxed">Best Practices</li>
                                    <li className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer text-sm leading-relaxed">Implementation Strategy</li>
                                    <li className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer text-sm leading-relaxed">Conclusion</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-[#0b0e10] to-[#36454f] p-6 rounded-3xl shadow-lg text-white">
                                <h4 className="text-xl font-bold text-[#F0C14B] mb-3 leading-relaxed">Stay Updated</h4>
                                <p className="text-white/90 mb-4 leading-relaxed">Subscribe to our newsletter for weekly insights directly to your inbox.</p>
                                <div className="space-y-3">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F0C14B] leading-relaxed"
                                    />
                                    <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-[#8B4513] font-bold hover:shadow-lg transition-all duration-300 leading-relaxed">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg">
                                <h3 className="text-xl font-bold text-[#8B4513] mb-4 leading-relaxed">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8B4513] text-sm hover:bg-[#D4AF37]/20 transition-colors duration-300 cursor-pointer leading-relaxed">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Blog Content */}
                    <main className="lg:col-span-3">
                        <div className="bg-gradient-to-br from-[#0b0e10] to-[#36454f] p-8 rounded-3xl shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 rounded-2xl mb-8 flex items-center justify-center">
                                <p className="text-[#8B4513] font-medium text-xl">Featured Image</p>
                            </div>
                            
                            {getDetailedContent()}
                            
                            <div className="border-t border-white/20 pt-8 mt-12">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-white leading-relaxed">Share this article</h3>
                                    <div className="flex gap-3">
                                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                                            <FaShare className="text-white" />
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 flex-wrap">
                                    <button className="px-4 py-2 rounded-full bg-[#4267B2] text-white hover:bg-[#365899] transition-colors duration-300">
                                        Facebook
                                    </button>
                                    <button className="px-4 py-2 rounded-full bg-[#1DA1F2] text-white hover:bg-[#0c85d0] transition-colors duration-300">
                                        Twitter
                                    </button>
                                    <button className="px-4 py-2 rounded-full bg-[#0077B5] text-white hover:bg-[#005885] transition-colors duration-300">
                                        LinkedIn
                                    </button>
                                    <button className="px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-300">
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Comments Section */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#D4AF37]/20 shadow-lg mt-8">
                            <h3 className="text-2xl font-bold text-[#8B4513] mb-6 leading-relaxed">Comments ({comments.length})</h3>
                            
                            <div className="mb-8">
                                <textarea 
                                    placeholder="Share your thoughts..." 
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[#D4AF37]/20 text-[#333333] placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] leading-relaxed"
                                    rows="4"
                                ></textarea>
                                <button 
                                    onClick={handleComment}
                                    className="mt-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C14B] text-white font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    Post Comment
                                </button>
                            </div>
                            
                            <div className="space-y-6">
                                {comments.map(comment => (
                                    <div key={comment.id} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                                            <FaUser className="text-[#8B4513]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-white/50 rounded-xl p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <p className="font-medium text-[#333333]">{comment.author}</p>
                                                    <p className="text-xs text-[#666666]">{comment.date}</p>
                                                </div>
                                                <p className="text-[#333333] leading-relaxed">{comment.content}</p>
                                            </div>
                                            <div className="flex items-center gap-4 mt-2 text-sm text-[#666666]">
                                                <button className="hover:text-[#D4AF37] transition-colors duration-300">Like</button>
                                                <button className="hover:text-[#D4AF37] transition-colors duration-300">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Related Posts */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-[#8B4513] mb-6 leading-relaxed">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map(relatedPost => (
                                    <article key={relatedPost.id} className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#D4AF37]/20 shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 group">
                                        <div className="h-32 bg-gradient-to-br from-[#F5DFB0] to-[#D4AF37]/30 flex items-center justify-center relative overflow-hidden">
                                            <p className="text-[#8B4513] font-medium leading-relaxed">Blog Image</p>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border leading-relaxed ${getCategoryColor(relatedPost.category)}`}>
                                                    {relatedPost.category}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-[#666666] leading-relaxed">
                                                    <FaClock className="text-[#D4AF37]" />
                                                    {relatedPost.date}
                                                </div>
                                            </div>
                                            <h2 className="text-lg font-bold text-[#333333] mb-2 leading-relaxed">
                                                <Link to={`/blogs/${relatedPost.id}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                                                    {relatedPost.title}
                                                </Link>
                                            </h2>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-[#666666] leading-relaxed">
                                                    <FaUser className="text-[#D4AF37]" />
                                                    {relatedPost.author}
                                                </div>
                                                <Link to={`/blogs/${relatedPost.id}`} className="flex items-center gap-1 text-[#D4AF37] font-medium hover:text-[#8B4513] transition-colors duration-300 leading-relaxed">
                                                    Read More <FaArrowRight className="text-xs" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
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
            `}</style>
        </div>
    );
};

export default BlogPost;