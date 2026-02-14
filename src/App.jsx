import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Footer = React.lazy(() => import('./components/Footer'));

import { Routes, Route } from 'react-router-dom';
import TermsAndConditions from './components/TermsAndConditions';
import SEO from './components/SEO';

const MainLayout = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
    <SEO
      title="Dubai TV 4K - #1 Best IPTV Subscription in UAE 2024"
      description="Experience the best IPTV Dubai subscription with 18,000+ live channels, 80,000+ movies & series in 4K/8K quality. Premium support, anti-freeze technology, and instant activation."
    />
    <Header />
    <main className="flex-grow">
      <Hero />
      <React.Suspense fallback={<div className="h-96" />}>
        <Pricing />
        <FAQ />
      </React.Suspense>
    </main>
    <React.Suspense fallback={<div className="h-48" />}>
      <Footer />
    </React.Suspense>
  </div>
);

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
      <Route path="/" element={<MainLayout />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
