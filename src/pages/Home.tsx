import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, ArrowRight, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            try {
                document.body.removeChild(script);
            } catch (e) {
                // Ignore if script was already removed
            }
        };
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Availability Banner */}
            <div className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex items-center justify-center md:justify-end gap-2 text-green-700 dark:text-green-400 text-sm font-semibold tracking-wide text-center">
                        <CheckCircle size={16} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span>Open for Projects</span>
                    </div>
                </div>
            </div>


            {/* Hero Section */}
            <section className="relative pt-10 pb-16 lg:pt-24 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                                Scale Your Business with <span className="text-blue-600">Data</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                                Freelance consultant delivering revenue insights directly to your inbox via Python, SQL, and BI tools.
                                <br /><span className="text-sm font-medium text-gray-500 mt-2 block">Serving clients in AUS, EU, US.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/case-studies"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                                >
                                    View Case Studies <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                                >
                                    Book Free Audit
                                </Link>
                                <a
                                    href="/resume.pdf"
                                    download="Vatsal_Srivastava_Resume.pdf"
                                    className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                                >
                                    <Download size={18} /> Resume
                                </a>
                            </div>
                        </motion.div>

                        {/* Hero Image / Carousel placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative mt-8 lg:mt-0"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                {/* Placeholder for Project Screenshot */}
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
                                    alt="Analytics Dashboard Preview"
                                    className="w-full h-auto object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <p className="font-bold text-lg">E-Commerce Insights Dashboard</p>
                                        <p className="text-sm opacity-90">Power BI • SQL • Python</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Tech Stack - Hidden on mobile to prevent layout issues */}
                            <div className="hidden md:flex absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                                <img src="/icons/python-svgrepo-com.svg" className="w-8 h-8" title="Python" />
                                <img src="/icons/sql-database-sql-azure-svgrepo-com.svg" className="w-8 h-8" title="SQL" />
                                <img src="/icons/powerbi.svg" className="w-8 h-8" title="Power BI" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section (Reused/Simplified) */}
            <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Powering analytics with modern tech</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Icons from public/icons */}
                        <img src="/icons/python-svgrepo-com.svg" className="h-8 md:h-10 hover:scale-110 transition-transform" title="Python" />
                        <img src="/icons/sql-database-sql-azure-svgrepo-com.svg" className="h-8 md:h-10 hover:scale-110 transition-transform" title="SQL" />
                        <img src="/icons/pandas.svg" className="h-10 md:h-12 hover:scale-110 transition-transform" title="Pandas" />
                        <img src="/icons/powerbi.svg" className="h-8 md:h-10 hover:scale-110 transition-transform" title="Power BI" />
                        <img src="/icons/tableau.svg" className="h-8 md:h-10 hover:scale-110 transition-transform" title="Tableau" />
                        <img src="/icons/excel.svg" className="h-8 md:h-10 hover:scale-110 transition-transform" title="Excel" />
                        <img src="/icons/git.svg" className="h-8 md:h-10 hover:scale-110 transition-transform" title="Git" />
                    </div>
                </div>
            </section>

            {/* Featured Case Studies Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Case Studies</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                                Real-world business problems solved with data science and predictive analytics.
                            </p>
                        </div>
                        <Link
                            to="/case-studies"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                            View All Projects <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Project 1: UIDAI */}
                        <a href="https://github.com/Vatsalsrivastava1209/UIDAI-Maintenance-Framework" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all p-6 block">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">UIDAI Aadhaar Risk Framework</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Built composite risk index using K-means clustering and Prophet forecasting. Identified high-risk districts via interactive Plotly dashboards.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Python</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">K-Means</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Prophet</span>
                            </div>
                        </a>

                        {/* Project 2: RCA */}
                        <a href="https://github.com/Vatsalsrivastava1209/Investigating-an-Engagement-Collapse-After-a-Recommendation-Model-Update" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all p-6 block">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">User Engagement Collapse RCA</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Analyzed 17% watch time drop using SQL & Python hypothesis testing and segmentation to identify model deployment issues.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">SQL</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Python</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Hypothesis Testing</span>
                            </div>
                        </a>

                        {/* Project 3: E-Com */}
                        <a href="https://github.com/Vatsalsrivastava1209/E-Commerce-Customer-Behavior-and-Sales-Insights-Dashboard" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all p-6 block">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">E-Commerce Insights Dashboard</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Power BI dashboard for £9.75M sales analysis across 4,373 customers. Enabled strategic market decisions via deep segmentation.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Power BI</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">DAX</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">SQL</span>
                            </div>
                        </a>

                        {/* Project 4: Excel Commission System */}
                        <a href="https://github.com/Vatsalsrivastava1209" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all p-6 block">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Excel Commission Tracking System</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Automated tiered commission calculations, rep summaries, and error reduction systems.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Excel</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">VBA</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Automation</span>
                            </div>
                        </a>

                        {/* Project 5: Ops Dashboard */}
                        <a href="https://github.com/Vatsalsrivastava1209/Superstore-sales-analysis" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all p-6 block">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ops Dashboard System</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Revenue, leads, and cost tracking system with advanced filters and management views.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Excel</span>
                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Dashboarding</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Calendly Widget */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                        >
                            <div
                                className="calendly-inline-widget w-full"
                                data-url="https://calendly.com/12-vatsal09/30min?hide_event_type_details=1"
                                style={{ minWidth: '320px', height: '600px' }}
                            />
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Discuss Your Data Strategy</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                Ready to transform your business with data? Book a free audit or reach out directly.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="mailto:12.vatsal9@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Me</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">12.vatsal9@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://linkedin.com/in/vatsal-srivastava-440417260"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Connect on LinkedIn</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">Vatsal Srivastava</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
