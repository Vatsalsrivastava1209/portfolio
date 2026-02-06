import React from 'react';

const Thoughts: React.FC = () => {
    return (
        <div className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Thoughts & Insights</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Deep dives into data analytics trends, tutorials, and case studies coming soon.
            </p>
            <div className="inline-block p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-400">
                Check back later for articles!
            </div>
        </div>
    );
};

export default Thoughts;
