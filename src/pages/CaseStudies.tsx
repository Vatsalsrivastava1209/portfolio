import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Loader2 } from 'lucide-react';

// Static Data for Featured Projects
const featuredProjects = [
    {
        title: "UIDAI Aadhaar Risk Framework",
        description: "Built composite risk index using K-means clustering and Prophet forecasting. Identified high-risk districts via interactive Plotly dashboards.",
        tech: ["Python", "K-means", "Prophet", "Plotly"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
        link: "https://github.com/Vatsalsrivastava1209/UIDAI-Maintenance-Framework"
    },
    {
        title: "User Engagement Collapse RCA",
        description: "Analyzed 17% watch time drop. Used SQL/Python for hypothesis testing and segmentation to identify model deployment issues.",
        tech: ["SQL", "Python", "Hypothesis Testing"],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=500",
        link: "https://github.com/Vatsalsrivastava1209/Investigating-an-Engagement-Collapse-After-a-Recommendation-Model-Update"
    },
    {
        title: "E-Commerce Insights Dashboard",
        description: "Power BI dashboard for £9.75M sales analysis across 4,373 customers. Enabled strategic market decisions via deep segmentation.",
        tech: ["Power BI", "DAX", "SQL"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
        link: "https://github.com/Vatsalsrivastava1209/E-Commerce-Customer-Behavior-and-Sales-Insights-Dashboard"
    },
    {
        title: "Excel Commission Tracking System",
        description: "Automated tiered commission calculations, rep summaries, and error reduction systems.",
        tech: ["Excel", "VBA", "Automation"],
        image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=800&h=500",
        link: "https://github.com/Vatsalsrivastava1209" // Repo not found, linking to profile
    },
    {
        title: "Ops Dashboard System",
        description: "Revenue, leads, and cost tracking system with advanced filters and management views.",
        tech: ["Excel", "Dashboarding"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
        link: "https://github.com/Vatsalsrivastava1209/Superstore-sales-analysis"
    }
];

interface Repo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

const CaseStudies: React.FC = () => {
    // GitHub fetching logic removed

    return (
        <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 lg:mb-20">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Flagship Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 block h-full flex flex-col p-6 lg:p-8"
                        >
                            <div className="">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                                >
                                    View Project <ExternalLink size={16} className="ml-1" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default CaseStudies;
