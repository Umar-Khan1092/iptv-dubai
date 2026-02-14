import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#001540] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start gap-6">
                        <a href="/" className="flex items-center gap-3">
                            {/* UAE Flag Circular Icon */}
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg bg-black">
                                <img
                                    src="/images/main_logo.webp"
                                    alt="Dubai TV 4K"
                                    className="w-full h-full object-cover"
                                    width="80"
                                    height="80"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-black text-2xl tracking-tighter leading-none">
                                    <span className="text-white">DUBAI </span>
                                    <span className="text-[#D71921]">TV</span>
                                </span>
                                <span className="font-heading font-black text-2xl tracking-tighter leading-none text-white">4K</span>
                            </div>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
                            <span className="text-white font-bold">iptvdubai.fun</span> offers an immersive TV experience on all your screens, with our powerful, fast, and reliable IPTV, ensuring smooth and stable streaming at any time!
                        </p>
                    </div>

                    {/* Pages Column */}
                    <div className="flex flex-col gap-6 pt-4 text-center md:text-left">
                        <h3 className="text-xl font-heading font-black tracking-widest uppercase text-white mb-2">PAGES</h3>
                        <nav className="flex flex-col gap-3 text-sm font-medium text-gray-400">
                            <a href="/" className="hover:text-[#D71921] transition-colors uppercase tracking-wider">HOME</a>
                            <a href="/" className="hover:text-[#D71921] transition-colors uppercase tracking-wider">ABOUT US</a>
                            <a href="/#pricing" className="hover:text-[#D71921] transition-colors uppercase tracking-wider">SUBSCRIPTION</a>
                            <a href="/#faq" className="hover:text-[#D71921] transition-colors uppercase tracking-wider">FAQ</a>
                        </nav>
                    </div>

                    {/* Infos Sur Site Column */}
                    <div className="flex flex-col gap-6 pt-4 text-center md:text-left">
                        <h3 className="text-xl font-heading font-black tracking-widest uppercase text-white mb-2">INFOS SUR SITE</h3>
                        <nav className="flex flex-col gap-3 text-sm font-medium text-gray-400">
                            <a href="/#faq" className="hover:text-[#D71921] transition-colors">FAQ</a>
                            <a href="/" className="hover:text-[#D71921] transition-colors">Iptv</a>
                            <Link to="/terms-and-conditions" className="hover:text-[#D71921] transition-colors">Terms and Conditions</Link>
                        </nav>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium text-gray-400">
                    <div className="text-center md:text-left">
                        COPYRIGHT © 2024 <span className="text-white font-bold">DUBAITV4K</span> ALL RIGHTS RESERVED | DESIGNED BY <span className="text-[#ff4d5a] font-bold">WEBDONO</span>
                    </div>

                    <a href="mailto:support@iptvdubai.fun" className="flex items-center gap-3 hover:text-white transition-colors group">
                        <div className="p-2 bg-white text-[#001540] rounded group-hover:bg-[#D71921] group-hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <span className="text-white font-bold text-sm tracking-wide">support@iptvdubai.fun</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
