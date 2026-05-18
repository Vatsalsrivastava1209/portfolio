import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Download, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const proofPoints = [
    'KPI root-cause analysis',
    'SQL and Python investigation',
    'Power BI and Tableau reporting',
    'A/B testing and segmentation',
    'LLM-assisted analytics workflows'
];

const featuredWork = [
    {
        title: 'Metric Sleuth',
        text: 'AI-powered root-cause analysis product for e-commerce and growth teams. Detects KPI anomalies, ranks likely drivers, and generates client-ready briefs.',
        link: 'https://github.com/Vatsalsrivastava1209/metric-sleuth',
        tags: ['AI Analytics', 'Anomaly Detection', 'Growth']
    },
    {
        title: 'Engagement Collapse RCA',
        text: 'Investigated a 17% watch-time drop after a recommendation model update using SQL, Python, segmentation, and hypothesis testing.',
        link: 'https://github.com/Vatsalsrivastava1209/Investigating-an-Engagement-Collapse-After-a-Recommendation-Model-Update',
        tags: ['SQL', 'Python', 'Product Metrics']
    },
    {
        title: 'Scientific A/B Testing',
        text: 'Experimentation pipeline covering sample-size planning, uplift analysis, Bayesian testing, sequential checks, and multiple-testing correction.',
        link: 'https://github.com/Vatsalsrivastava1209/Scientific-A-B-Testing-for-Your-DS-ML-Creator-Account',
        tags: ['Experimentation', 'Statistics', 'Growth']
    }
];

const Home: React.FC = () => {
    return (
        <div className="overflow-hidden bg-white dark:bg-gray-950">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-b border-blue-100 dark:border-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex items-center justify-center md:justify-end gap-2 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide text-center">
                        <CheckCircle size={16} className="flex-shrink-0" />
                        <span>Open to global remote Product/Growth Analyst roles</span>
                    </div>
                </div>
            </div>

            <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-7"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400 mb-5">
                                SQL + Python + BI + Experimentation + AI Analytics Automation
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                                I help teams understand why product and growth metrics move.
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                                Product/Growth Analyst focused on KPI diagnosis, funnel and customer analysis, A/B testing, anomaly detection, dashboards, and LLM-assisted analytics reporting.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/case-studies"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                                >
                                    View Case Studies <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="/remote-product-growth-analyst-resume.md"
                                    download="Vatsal_Srivastava_Remote_Product_Growth_Analyst_Resume.md"
                                    className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                                >
                                    <Download size={18} /> Resume
                                </a>
                                <a
                                    href="mailto:12.vatsal9@gmail.com"
                                    className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:border-blue-500 transition-all flex items-center justify-center gap-2"
                                >
                                    <Mail size={18} /> Contact
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-5"
                        >
                            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl p-6 lg:p-8">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Best-fit remote roles</h2>
                                <div className="space-y-3">
                                    {['Product Analyst', 'Growth Analyst', 'Marketing/Data Analyst', 'BI Analyst with product metrics', 'AI Data Analyst'].map(role => (
                                        <div key={role} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <CheckCircle size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                            <span>{role}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Application angle</p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        I can investigate metric changes and automate recurring analytics reporting.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {proofPoints.map(point => (
                            <div key={point} className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-lg p-4 text-sm font-semibold text-gray-800 dark:text-gray-100">
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured proof</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                                Projects selected for global remote Product/Growth Analyst roles: metric diagnosis, experimentation, dashboards, and AI-assisted analytics automation.
                            </p>
                        </div>
                        <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                            See full case studies <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredWork.map((project, index) => (
                            <motion.a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6 flex flex-col min-h-[280px]"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -4 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{project.text}</p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                                    View on GitHub <ExternalLink size={16} />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sample analytics deliverable</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        A recruiter or hiring manager should be able to see not just the tools I use, but the kind of business decision my analysis supports.
                    </p>
                    <a
                        href="/sample-analytics-brief-why-revenue-dropped.md"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all"
                    >
                        Read sample revenue-drop brief <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
