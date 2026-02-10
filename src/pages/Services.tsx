import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, BrainCircuit, Search, FileSpreadsheet, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
        title: "Custom Dashboards",
        description: "Interactive Power BI, Tableau, or Plotly dashboards to visualize KPIs properly.",
        price: "From $500",
        features: ["Real-time data connection", "Mobile responsive layouts", "Custom filter logic"]
    },
    {
        icon: <Database className="w-10 h-10 text-purple-600" />,
        title: "Data Cleaning & ETL",
        description: "Automated pipelines in Python/SQL to turn messy CSVs into clean databases.",
        price: "From $300",
        features: ["Missing value imputation", "Duplicate removal automation", "Schema validation"]
    },
    {
        icon: <BrainCircuit className="w-10 h-10 text-green-600" />,
        title: "Predictive Modeling",
        description: "Forecast sales, churn, or inventory using Prophet and Scikit-learn.",
        price: "From $800",
        features: ["Sales forecasting", "Customer segmentation (Clustering)", "Trend analysis"]
    },
    {
        icon: <Search className="w-10 h-10 text-orange-600" />,
        title: "Root Cause Analysis",
        description: "Deep-dive statistical investigation into why metrics dropped.",
        price: "From $600",
        features: ["Hypothesis testing", "Correlation analysis", "Actionable recommendations"]
    },
    {
        icon: <FileSpreadsheet className="w-10 h-10 text-emerald-600" />,
        title: "Excel Automation",
        description: "VBA macros and complex formulas to save you 10+ hours/week.",
        price: "From $400",
        features: ["Report generation", "Error-free calculations", "User-friendly interfaces"]
    }
];

const Services: React.FC = () => {
    return (
        <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services & Pricing</h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Transparent pricing for high-impact data solutions. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 lg:p-8 transition-shadow flex flex-col"
                    >
                        <div className="bg-gray-50 dark:bg-gray-700/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            {service.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[50px] flex-grow">{service.description}</p>

                        <div className="mb-6">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">{service.price}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
                                    <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className="block w-full py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                            Book Audit
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 lg:mt-20 text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">Unsure what you need?</h2>
                <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's hop on a quick call to audit your current data setup.
                </p>
                <Link to="/contact" className="inline-block w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    Book Free Data Audit
                </Link>
            </div>
        </div>
    );
};

export default Services;
