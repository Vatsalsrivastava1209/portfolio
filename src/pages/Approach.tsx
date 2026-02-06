import React from 'react';
import { Search, Database, FileCog, LineChart, PieChart, Rocket } from 'lucide-react';

const steps = [
    { icon: <Search size={32} />, title: "Discovery", desc: "Understanding business goals & KPIs." },
    { icon: <Database size={32} />, title: "Collection", desc: "Ingesting data from multiple sources." },
    { icon: <FileCog size={32} />, title: "Cleaning", desc: "Preprocessing and ensuring data quality." },
    { icon: <LineChart size={32} />, title: "Analysis", desc: "EDA, modeling, and hypothesis testing." },
    { icon: <PieChart size={32} />, title: "Visualize", desc: "Creating intuitive dashboards." },
    { icon: <Rocket size={32} />, title: "Action", desc: "Strategic implementation & monitoring." },
];

const Approach: React.FC = () => {
    return (
        <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Analytical Approach</h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                    A systematic methodology to transform raw data into actionable business strategy.
                </p>
            </div>

            <div className="relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-0"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-white dark:bg-gray-900 border-4 border-blue-100 dark:border-gray-700 rounded-full flex items-center justify-center text-blue-600 shadow-lg group-hover:border-blue-600 transition-colors mb-4">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Approach;
