import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqItems = [
        {
            question: "Is IPTV legal in the UAE?",
            answer: "IPTV services are permitted in the UAE when provided by licensed and authorized platforms. To stay compliant, always subscribe to a reputable and legally operating IPTV provider."
        },
        {
            question: "Which IPTV provider is best in Dubai?",
            answer: "The ideal IPTV provider offers stable streaming, affordable plans, high-resolution 4K content, and dependable customer support. Choose a service that delivers consistent performance and transparent pricing."
        },
        {
            question: "How can I buy an IPTV subscription in Dubai?",
            answer: "Purchasing an IPTV subscription is simple. Select your preferred plan, contact the provider through their official channel (such as WhatsApp or website), and receive activation details quickly for instant access."
        },
        {
            question: "How reliable is IPTV in Dubai?",
            answer: "A quality IPTV service operates on secure, high-performance servers to ensure smooth playback and minimal interruptions. With the right provider, you can expect stable streaming and clear picture quality."
        },
        {
            question: "How long does IPTV installation take in Dubai?",
            answer: "Most IPTV setups are completed within minutes, depending on your device and internet connection. Professional support is available if assistance is required for configuration."
        },
        {
            question: "Can I convert a regular TV into a Smart TV for IPTV?",
            answer: "Yes. You can use an external streaming device or IPTV box connected to the internet to access smart features. Popular options include streaming sticks and media players compatible with various apps and services."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="bg-[#0B0F19] py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12 font-heading tracking-tight">
                    Frequently Asked Questions
                </h2>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#131b2b] border border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full py-5 px-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg md:text-xl font-medium text-white group-hover:text-pink-500 transition-colors">
                                    {item.question}
                                </span>

                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#E91E63] flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            {/* Expandable Answer */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
