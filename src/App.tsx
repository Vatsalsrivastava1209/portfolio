import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import Thoughts from './pages/Thoughts';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/approach" element={<Approach />} />
                    <Route path="/thoughts" element={<Thoughts />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
