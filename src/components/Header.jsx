import React from 'react';

const Header = () => {
    return (
        <header className="relative z-50">
            {/* Top Banner - Navy */}
            <div className="bg-[#002613] text-white py-2 px-4 flex justify-center items-center gap-4 text-xs md:text-sm font-medium border-b border-white/10">
                <span>Get the Best IPTV Dubai Subscription</span>
            </div>

            {/* Info Banner - Red */}
            <div className="bg-[#D71921] text-white py-2 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] md:text-xs">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="font-bold uppercase tracking-tighter">Discover endless entertainment with dubaitv4k, your ideal destination!</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span className="font-bold">support@iptvdubai.fun</span>
                </div>
            </div>

            {/* Main Navigation - Navy */}
            <div className="bg-[#002613] text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-xl">
                <a href="/" className="flex items-center gap-2">
                    <img src="/images/main_logo.webp" alt="Dubai TV 4K Logo" className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover" />
                </a>

                <nav className="hidden lg:flex items-center gap-8 text-[13px] font-black uppercase tracking-widest font-heading">
                    <a href="/" className="text-primary-red transition-colors">Dubai IPTV</a>
                    <a href="/" className="hover:text-primary-red transition-colors">About Us</a>
                    <a href="/#pricing" className="hover:text-primary-red transition-colors">Subscription</a>
                    <a href="/#faq" className="hover:text-primary-red transition-colors">FAQ</a>
                    <a href="/" className="hover:text-primary-red transition-colors">Blog</a>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;
