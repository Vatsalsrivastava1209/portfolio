import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-blue-600 transition-colors text-gray-900 dark:text-white mb-4 block">
                            VaTsaL<span className="text-blue-600">.</span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                            Helping businesses scale with data-driven insights and predictive modeling.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com/in/vatsal-srivastava-440417260" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/Vatsalsrivastava1209" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://twitter.com/Codat_V" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {/* <li><Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link></li> */}
                            <li><Link to="/case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
                            <li><Link to="/approach" className="hover:text-blue-600 transition-colors">Approach</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info (Implicit) */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><a href="mailto:12.vatsal9@gmail.com" className="hover:text-blue-600">12.vatsal9@gmail.com</a></li>
                            <li>Available for Remote Work</li>
                            <li>Based in India, serving Global</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Get weekly data tips for business growth.
                        </p>
                        <form action="https://formspree.io/f/mqkvrvla" method="POST" className="flex">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                            <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">© 2026 Vatsal Srivastava. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
