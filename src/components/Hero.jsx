import React from 'react';
import MovieSlider from './MovieSlider';

const Hero = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-[#002613] min-h-[600px] flex items-center">
                {/* Background Pattern/Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#002613] via-[#002613]/95 to-transparent z-10"></div>
                    <img
                        src="/images/hero_section.webp"
                        alt="Background"
                        className="w-full h-full object-cover object-right opacity-40 lg:opacity-100"
                        fetchPriority="high"
                        width="1920"
                        height="1080"
                        decoding="async"
                    />
                </div>

                {/* Content Area */}
                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <div className="max-w-2xl py-20">
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8 font-heading opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            Next-Level IPTV Dubai <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D71921] to-[#ff4d5a]">Subscription — 4K & 8K Certified</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 font-bold text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed max-w-lg mb-12 border-l-4 border-[#D71921] pl-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                            Step into the future of television with ultra-high-definition IPTV streaming in Dubai, which contains 55,000 live channels, 100,000+ movies & series — all on one powerful IPTV subscription.
                            From international news and live sports to movies and exclusive shows, enjoy stunning picture quality and uninterrupted viewing tailored to your lifestyle. Ready for your Smart TV and every device.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                            <button
                                onClick={() => window.open('https://wa.me/447311128276', '_blank')}
                                className="px-8 py-4 bg-[#D71921] text-white font-black uppercase tracking-widest hover:bg-[#b0141b] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#D71921]/30 rounded-sm cursor-pointer"
                            >
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sharp Diagonal Image Overlay (Desktop) */}
                <div
                    className="absolute top-0 right-0 w-[60%] h-full hidden lg:block pointer-events-none"
                    style={{
                        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
                        zIndex: 1
                    }}
                >
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#002613]/20 to-[#002613]"></div>
                        <div className="absolute inset-0 bg-[#D71921]/10 mix-blend-overlay"></div>
                    </div>
                </div>

                {/* WhatsApp Floating Button */}
                <div
                    onClick={() => {
                        window.open('https://wa.me/447311128276', '_blank');
                    }}
                    className="fixed bottom-6 right-6 z-[100] cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 group"
                >
                    <div className="absolute -top-1 -right-1 z-10">
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D71921] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D71921] border-2 border-white"></span>
                        </span>
                    </div>
                    <div className="bg-[#25D366] p-4 rounded-full shadow-2xl group-hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] transition-all duration-300 animate-bounce-slow">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.004 1.337 4.746 1.338 5.485 0 9.95-4.465 9.952-9.952.001-2.658-1.034-5.156-2.914-7.036-1.88-1.88-4.382-2.913-7.042-2.914-5.484 0-9.949 4.465-9.95 9.95-.001 1.903.5 3.754 1.45 5.388l-1.048 3.829 3.932-1.031-.174.13zm11.39-7.235c-.322-.162-1.905-.94-2.201-1.048-.297-.108-.513-.162-.729.162-.216.323-.836 1.048-1.025 1.264-.19.215-.378.243-.701.081-.323-.162-1.36-.5-2.592-1.597-.959-.855-1.606-1.912-1.795-2.235-.19-.323-.02-.497.142-.658.146-.145.323-.377.485-.565.162-.188.216-.323.323-.538.108-.216.054-.404-.027-.565-.081-.162-.729-1.751-1.025-2.454-.296-.703-.591-.611-.81-.622-.21-.01-.45-.011-.69-.011s-.629.09-1.025.467c-.396.377-1.511 1.48-1.511 3.608 0 2.129 1.547 4.183 1.762 4.48.216.297 3.037 4.639 7.371 6.517 1.031.446 1.835.713 2.463.913 1.036.33 1.979.283 2.73.171.83-.124 2.214-.904 2.524-1.777.309-.873.309-1.623.216-1.777-.093-.155-.34-.243-.663-.405z" />
                        </svg>
                    </div>
                </div>
            </section>

            <MovieSlider />

            {/* Iconic Features Section */}
            <section className="bg-[#f4f7fa] py-16 px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                        <div className="relative mb-8">
                            <div className="w-24 h-24 bg-white rotate-45 shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden transition-all duration-300">
                                <img src="/images/first_icon.webp" alt="Premium Channels" className="-rotate-45 w-full h-full object-cover scale-[2.0]" width="96" height="96" decoding="async" />
                            </div>
                        </div>
                        <h2 className="text-[#001540] group-hover:text-[#D71921] font-black text-xl mb-4 font-heading tracking-widest uppercase transition-colors duration-300">Global Channels</h2>
                        <p className="text-gray-700 text-sm leading-relaxed max-w-[280px]">
                            Thousands of live Arabic, Indian, UK & USA channels with premium sports — all in one powerful IPTV Dubai plan.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                        <div className="relative mb-8">
                            <div className="w-24 h-24 bg-white rotate-45 shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden transition-all duration-300">
                                <img src="/images/third_icon.webp" alt="100% Satisfaction" className="-rotate-45 w-full h-full object-cover scale-[1.5]" width="96" height="96" decoding="async" />
                            </div>
                        </div>
                        <h2 className="text-[#001540] group-hover:text-[#D71921] font-black text-xl mb-4 font-heading tracking-widest uppercase transition-colors duration-300">Flexible Plans</h2>
                        <p className="text-gray-700 text-sm leading-relaxed max-w-[280px]">
                            Monthly and yearly IPTV Dubai subscriptions designed for every budget.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                        <div className="relative mb-8">
                            <div className="w-24 h-24 bg-white rotate-45 shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden transition-all duration-300">
                                <img src="/images/fourth_icon.webp" alt="24/7 Support" className="-rotate-45 w-full h-full object-cover scale-[1.5]" width="96" height="96" decoding="async" />
                            </div>
                        </div>
                        <h2 className="text-[#001540] group-hover:text-[#D71921] font-black text-xl mb-4 font-heading tracking-widest uppercase transition-colors duration-300">24/7 Support</h2>
                        <p className="text-gray-700 text-sm leading-relaxed max-w-[280px]">
                            Quick activation on all devices with reliable customer support across the UAE.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                        <div className="relative mb-8">
                            <div className="w-24 h-24 bg-white rotate-45 shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden transition-all duration-300">
                                <img src="/images/second_icon.webp" alt="4K Quality" className="-rotate-45 w-full h-full object-cover scale-[1.5]" width="96" height="96" decoding="async" />
                            </div>
                        </div>
                        <h2 className="text-[#001540] group-hover:text-[#D71921] font-black text-xl mb-4 font-heading tracking-widest uppercase transition-colors duration-300">4K/8K Ultra</h2>
                        <p className="text-gray-700 text-sm leading-relaxed max-w-[280px]">
                            Enjoy smooth HD, FHD & 4K IPTV in Dubai with stable servers and zero buffering.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
