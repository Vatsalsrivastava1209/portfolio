import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            try {
                document.body.removeChild(script);
            } catch (e) {
                // Ignore if script was already removed or logic changed
            }
        };
    }, []);

    return (
        <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 lg:mb-16">Let's Discuss Your Data Strategy</h1>

            <div className="flex justify-center">
                <div
                    className="calendly-inline-widget w-full"
                    data-url="https://calendly.com/12-vatsal09/30min?hide_event_type_details=1"
                    style={{ minWidth: '320px', height: '700px' }}
                ></div>
            </div>
        </div>
    );
};

export default Contact;
