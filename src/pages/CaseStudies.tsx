import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

const caseStudies = [
    {
        title: 'Metric Sleuth',
        roleSignal: 'AI analytics automation for growth and e-commerce teams',
        description: 'An AI-powered root-cause analysis product that detects KPI anomalies, ranks likely drivers, and generates internal plus client-ready briefs.',
        tech: ['Python', 'FastAPI', 'Next.js', 'Supabase', 'LLMs'],
        link: 'https://github.com/Vatsalsrivastava1209/metric-sleuth',
        details: [
            { label: 'Problem', text: 'Agencies and growth teams repeatedly need to explain why revenue, traffic, orders, or conversion rate moved without rebuilding the analysis from scratch.' },
            { label: 'Data', text: 'Storefront and channel exports saved as reusable client workspaces, with investigation jobs organized into an incident inbox.' },
            { label: 'Method', text: 'Anomaly detection, segmentation, contribution analysis, historical pattern search, and LLM-assisted brief generation.' },
            { label: 'Decision Enabled', text: 'Helps account teams identify likely drivers faster and send clear, white-label summaries to clients.' }
        ]
    },
    {
        title: 'Engagement Collapse RCA',
        roleSignal: 'Product metric drop investigation',
        description: 'Diagnosed a 26.3% drop in plays per active user after a recommendation-model rollout using SQL, Python, segmented time-series analysis, and hypothesis testing.',
        tech: ['SQL', 'Python', 'Statistics', 'A/B Testing'],
        link: 'https://github.com/Vatsalsrivastava1209/Engagement-Collapse-RCA',
        details: [
            { label: 'Problem', text: 'Plays per active user dropped sharply after a recommendation-model rollout, and the team needed to know whether the issue was global or segment-specific.' },
            { label: 'Data', text: 'Clickstream logs, region/device/customer segments, watch-time behavior, and bounce-rate signals.' },
            { label: 'Method', text: 'PostgreSQL segmentation, Python ETL, time-series comparison, hypothesis testing, and business impact sizing.' },
            { label: 'Decision Enabled', text: 'Isolated the failure to IN-North and IN-South, ruled out global causes, and recommended rollback plus future canary testing.' }
        ]
    },
    {
        title: 'Scientific A/B Testing Pipeline',
        roleSignal: 'Experimentation and growth decision support',
        description: 'A reusable experimentation workflow covering sample-size planning, randomization, frequentist/Bayesian analysis, sequential testing, and multiple-testing correction.',
        tech: ['Python', 'Power Analysis', 'Bayesian Testing', 'Statistics'],
        link: 'https://github.com/Vatsalsrivastava1209/Creator-Experimentation-Toolkit',
        details: [
            { label: 'Problem', text: 'Growth teams need to know whether observed lift is real, underpowered, noisy, or inflated by repeated testing.' },
            { label: 'Data', text: 'Experiment assignment, conversion outcomes, time-series effects, treatment/control groups, and simulated future rounds.' },
            { label: 'Method', text: 'Power analysis, sample-size calculation, uplift analysis, credible intervals, sequential testing, and bandit simulation.' },
            { label: 'Decision Enabled', text: 'Gives teams a disciplined way to ship, stop, or continue product experiments based on evidence.' }
        ]
    },
    {
        title: 'E-commerce Customer Behavior Dashboard',
        roleSignal: 'BI analytics for revenue and customer decisions',
        description: 'Power BI and Python analysis of 4,338 customers and 8.91M in net revenue after cleaning returns, cancellations, and postage rows.',
        tech: ['Power BI', 'DAX', 'Power Query', 'Customer Analytics'],
        link: 'https://github.com/Vatsalsrivastava1209/E-commerce-Customer-Analytics',
        details: [
            { label: 'Problem', text: 'Stakeholders needed visibility into sales performance, customer purchasing behavior, and market-level revenue patterns.' },
            { label: 'Data', text: 'Online retail transactions, country-level customer behavior, revenue metrics, product performance, and seasonality.' },
            { label: 'Method', text: 'Power Query cleaning, DAX KPI measures, customer segmentation, sales overview pages, and geographic analysis.' },
            { label: 'Decision Enabled', text: 'Supported recommendations for targeted promotions, inventory planning, and market expansion.' }
        ]
    }
];

const CaseStudies: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(0);

    return (
        <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400 mb-4">
                    Remote Product/Growth Analyst Proof
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Case studies built around business decisions.
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl text-lg leading-relaxed">
                    These are the four projects I want recruiters to see first: root-cause analysis, experimentation, e-commerce BI, and AI-assisted analytics automation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {caseStudies.map((project, index) => {
                    const isExpanded = expandedId === index;
                    return (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            className={`bg-white dark:bg-gray-900 rounded-xl border p-6 lg:p-8 shadow-md transition-colors ${isExpanded ? 'border-blue-500' : 'border-gray-100 dark:border-gray-800'}`}
                        >
                            <div className="flex flex-col h-full">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-3">
                                    {project.roleSignal}
                                </p>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-4 border-l-2 border-blue-500 pl-4 mb-6">
                                                {project.details.map(detail => (
                                                    <div key={detail.label}>
                                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-1">{detail.label}</p>
                                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detail.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <button
                                        type="button"
                                        onClick={() => setExpandedId(isExpanded ? null : index)}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {isExpanded ? 'Hide decision path' : 'Show decision path'}
                                        <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        GitHub <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseStudies;
