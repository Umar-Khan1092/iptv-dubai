import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  // Enable smooth scrolling
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Header />
          <main className="flex-grow">
            <Hero />
            <Pricing />
            <FAQ />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Header />
          <main className="flex-grow">
            <Hero />
            <Pricing />
            <FAQ />
          </main>
          <Footer />
        </div>
      } />
    </Routes>
  );
}

export default App;
