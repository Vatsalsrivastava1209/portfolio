import React, { useState } from 'react';
import { Menu, X, Download, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isDark = document.documentElement.classList.contains('dark');
    const [theme, setTheme] = useState(isDark ? 'dark' : 'light');

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setTheme('dark');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
        // { name: 'Services', path: '/services' },
        { name: 'Approach', path: '/approach' },
        { name: 'Thoughts', path: '/thoughts' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors text-gray-900 dark:text-white">
                            VaTsaL<span className="text-blue-600">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path
                                    ? 'text-blue-600'
                                    : 'text-gray-600 dark:text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://linkedin.com/in/vatsal-srivastava-440417260" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Vatsalsrivastava1209" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://twitter.com/Codat_V" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                        </a>

                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? (
                                <Sun size={20} className="text-yellow-400" />
                            ) : (
                                <Moon size={20} className="text-gray-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'dark' ? (
                                <Sun size={20} className="text-yellow-400" />
                            ) : (
                                <Moon size={20} className="text-gray-600" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20 px-4 pb-4 overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800 ${location.pathname === link.path
                                    ? 'text-blue-600'
                                    : 'text-gray-800 dark:text-gray-200'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-6 mt-8 justify-center">
                            <a href="https://linkedin.com/in/vatsal-srivastava-440417260" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/Vatsalsrivastava1209" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <Github size={24} />
                            </a>
                            <a href="https://twitter.com/Codat_V" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
