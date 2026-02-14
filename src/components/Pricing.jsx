import React, { useState, useEffect, useRef, memo } from 'react';

const PricingCard = memo(({ plan, features }) => (
    <div
        className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.featured
            ? 'bg-gradient-to-br from-[#00cc00] to-[#006600] shadow-xl shadow-green-500/50 border-2 border-green-400'
            : 'bg-[#002613] border-2 border-green-900 hover:border-[#D71921]'
            }`}
    >
        {plan.featured && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#D71921] text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                    Most Popular
                </span>
            </div>
        )}

        <div className="text-center mb-6">
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-4 ${plan.featured ? 'text-white' : 'text-gray-400'
                }`}>
                {plan.title}
            </h3>
            <div className="mb-2">
                <span className={`text-5xl font-black ${plan.featured ? 'text-white' : 'text-white'
                    }`}>
                    AED{plan.price}
                </span>
            </div>
            <p className={`text-sm ${plan.featured ? 'text-white/90' : 'text-gray-400'
                }`}>
                {plan.period}
            </p>
        </div>

        <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{feature.icon}</span>
                    <span className={`text-sm font-medium ${plan.featured ? 'text-white' : 'text-gray-300'
                        }`}>
                        {feature.text}
                    </span>
                </li>
            ))}
        </ul>

        <button
            onClick={() => window.open('https://wa.me/447311128276', '_blank')}
            className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all duration-300 ${plan.featured
                ? 'bg-white text-[#006600] hover:bg-gray-100 shadow-lg'
                : 'bg-[#003d1e] text-white hover:bg-[#D71921] border border-green-800 hover:border-[#D71921]'
                }`}
        >
            Get Started
        </button>
    </div>
));

const StatItem = memo(({ count, label }) => (
    <div className="text-center md:text-left">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001540] mb-1">
            +{count.toLocaleString()}
        </div>
        <div className="text-[10px] md:text-xs font-medium text-gray-700 uppercase tracking-wide">
            {label}
        </div>
    </div>
));

const Pricing = () => {
    // Counter animation states
    const [counters, setCounters] = useState({ channels: 0, worldwide: 0, vod: 0 });
    const statsRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    // Animate counter function
    const animateCounter = (target, key, duration = 2000) => {
        const startTime = Date.now();
        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * target);

            setCounters(prev => ({ ...prev, [key]: currentValue }));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };

    // Intersection Observer for scroll detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    // Start all animations
                    animateCounter(9000, 'channels', 2000);
                    animateCounter(20000, 'worldwide', 2500);
                    animateCounter(50000, 'vod', 3000);
                    // Stop observing immediately
                    if (statsRef.current) observer.unobserve(statsRef.current);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the element is visible
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const reasons = [
        {
            id: 1,
            icon: '/images/blue_1.webp',
            title: 'Unlimited Access, Total Freedom',
            description: 'Dubai IPTV allows you to stream live TV and on-demand content directly over the internet with stable, high-speed performance. Watch your favorite shows, sports, and movies anytime, anywhere in the UAE — with no location limits and easy plan upgrades whenever you need.'
        },
        {
            id: 2,
            icon: '/images/blue_2.webp',
            title: 'Fast & Hassle-Free Setup',
            description: 'Get started with Dubai IPTV in minutes. Our simple installation process works smoothly on Smart TVs, Android devices, and streaming boxes. Just follow our quick guide or contact our support team for instant assistance — and start streaming right away.'
        },
        {
            id: 3,
            icon: '/images/blue_3.webp',
            title: 'Smart Value, More Entertainment',
            description: 'With our premium Dubai IPTV subscription, you enjoy high-quality streaming at an affordable price. Access a diverse range of Arabic, European, Asian, and international channels without paying expensive cable fees — giving you maximum entertainment while keeping costs under control.'
        }
    ];

    const plans = [
        {
            id: 1,
            title: '1 MONTH',
            price: '30',
            period: 'per month',
            featured: false
        },
        {
            id: 2,
            title: '3 MONTHS',
            price: '80',
            period: 'every 3 months',
            featured: false
        },
        {
            id: 3,
            title: '12 MONTHS',
            price: '250',
            period: 'per year',
            featured: true
        },
        {
            id: 4,
            title: '6 MONTHS',
            price: '150',
            period: 'every six months',
            featured: false
        }
    ];

    const features = [
        { icon: '📺', text: '28K+ Live Channels' },
        { icon: '🎬', text: '100K+ Movies & Series' },
        { icon: '📺', text: '4K / FHD / HD Quality' },
        { icon: '⚽', text: 'Sports & PPV' },
        { icon: '❄️', text: 'Anti-Freeze Tech' },
        { icon: '📱', text: 'All Devices' },
        { icon: '📋', text: 'EPG & Catch-Up' },
        { icon: '💬', text: '24/7 Support' }
    ];

    return (
        <>
            {/* Pricing Section */}
            <section id="pricing" className="bg-gradient-to-br from-[#002613] via-[#003d1e] to-[#002613] py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl md:text-6xl font-black text-white mb-4 font-heading tracking-tight">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Select the perfect subscription plan for your entertainment needs
                        </p>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan) => (
                            <PricingCard key={plan.id} plan={plan} features={features} />
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="text-center mt-12">
                        <p className="text-gray-400 text-sm">
                            All plans include instant activation • No hidden fees • 24/7 customer support
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-[#D71921] font-black text-sm uppercase tracking-[0.3em] mb-4 font-heading">
                            Why Choose Us?
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-black text-[#001540] font-heading tracking-tight">
                            3 Causes To Buy iptvdbai.fun
                        </h2>
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {reasons.map((reason) => (
                            <div
                                key={reason.id}
                                className="flex flex-col items-center text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                            >
                                {/* Icon Circle */}
                                <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src={reason.icon}
                                        alt={reason.title}
                                        className="w-32 h-32 md:w-36 md:h-36 object-contain"
                                        width="144"
                                        height="144"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[#D71921] font-black text-xl mb-6 font-heading tracking-wider uppercase group-hover:text-[#001540] transition-colors duration-300">
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 text-sm leading-relaxed max-w-[350px]">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IPTV Provider Section */}
            <section className="bg-white py-16 md:py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/images/TV.webp"
                                alt="DubaiTV4K IPTV Premium"
                                className="w-full max-w-md rounded-lg shadow-xl"
                                width="448"
                                height="448"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            {/* Heading */}
                            <h2 className="text-xl md:text-2xl lg:text-4xl font-black text-[#001540] font-heading leading-tight">
                                EXPLORING THE TOP IPTV PROVIDER IN DUBAI IN 2025
                            </h2>

                            {/* Description */}
                            <p className="text-gray-700 text-sm leading-relaxed">
                                DubaiTV4K + IPTV Dubai offers top-tier IPTV subscriptions committed to high-quality, uninterrupted service, backed by many years of experience. Our premium subscriptions start from AED 55 for English and International channels in Full HD/HD/SD/4K, along with a vast library of VOD content including top movies and TV series.
                            </p>

                            {/* Statistics */}
                            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <StatItem count={counters.channels} label="4K UHD DUBAI/US CHANNELS" />
                                <StatItem count={counters.worldwide} label="WORLDWIDE CHANNELS" />
                                <StatItem count={counters.vod} label="LATEST VOD TITLES AVAILABLE" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Premium Entertainment Section */}
            <section className="bg-white py-16 md:py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-6 order-2 lg:order-1">
                            {/* Heading */}
                            <h2 className="text-xl md:text-2xl lg:text-4xl font-black text-[#001540] font-heading leading-tight">
                                DubaiTV4K: Aesthetic source for fantastic Entertainment in 2026
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#001540] mb-2">
                                        Why We Stand Out
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        Experience world-class IPTV entertainment designed for viewers who expect more. Our advanced streaming technology delivers crystal-clear Ultra HD quality without compromise. Enjoy premium channels from the UK, USA, UAE, Canada, France, and many other countries — all at pricing made to fit every budget.
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Watch seamlessly on your Smart TV, smartphone, tablet, or streaming device anytime, anywhere.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#001540] mb-4">
                                        What You Get
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            "18,000+ Global Live TV Channels",
                                            "80,000+ On-Demand Movies & Content (Regularly Updated)",
                                            "100,000+ TV Series & Web Shows",
                                            "High-Performance Servers for Smooth Streaming",
                                            "Daily Updates for Movies & Latest Web Series",
                                            "Access to Top Sports & Premium Entertainment Networks",
                                            "4K, 8K, Full UHD & HD Picture Quality"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="text-green-600 font-bold">✔</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            <img
                                src="/images/center_man.webp"
                                alt="UKTV4K Premium Entertainment"
                                className="w-[75%] max-w-xs rounded-lg shadow-xl"
                                width="320"
                                height="320"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
