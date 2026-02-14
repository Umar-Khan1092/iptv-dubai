import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const TermsAndConditions = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <SEO
                title="Privacy Policy & Refund Policy - Dubai TV 4K"
                description="Read the Privacy Policy and Refund Policy for Dubai TV 4K IPTV services in Dubai, UAE."
            />
            <Header />
            <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
                <h1 className="text-3xl font-black text-[#001540] mb-8 font-heading uppercase">Privacy Policy</h1>

                <section className="space-y-6 text-gray-700 leading-relaxed mb-12">
                    <p><strong>Effective Date:</strong> [Insert Date]</p>
                    <p>
                        Welcome to IPTV Dubai Hub (“we,” “our,” or “us”). We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy explains how we collect, use, and protect your data when you visit <a href="https://iptvdubai.fun" className="text-[#D71921] hover:underline">https://iptvdubai.fun</a> or use our IPTV services.
                    </p>
                    <p>By accessing our website or purchasing our services, you agree to the terms outlined below.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">1. Information We Collect</h2>
                    <h3 className="text-lg font-bold text-[#001540] mt-4 mb-2">a) Personal Information</h3>
                    <p>When you subscribe to our services or contact us, we may collect:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Billing details</li>
                        <li>Order or transaction information</li>
                    </ul>
                    <p className="italic text-sm mt-2">Please note: We do not store debit or credit card details on our servers. All payments are processed securely through trusted third-party payment providers.</p>

                    <h3 className="text-lg font-bold text-[#001540] mt-4 mb-2">b) Technical & Usage Information</h3>
                    <p>When you browse our website, we may automatically collect:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>IP address</li>
                        <li>Browser and device type</li>
                        <li>Pages viewed and time spent</li>
                        <li>Referral source</li>
                    </ul>
                    <p>This information helps us improve site performance, enhance security, and optimize user experience.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">2. How We Use Your Information</h2>
                    <p>Your information may be used to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Process and activate IPTV subscriptions</li>
                        <li>Provide customer support</li>
                        <li>Improve website functionality</li>
                        <li>Send important service updates</li>
                        <li>Share promotional offers (only if you opt in)</li>
                        <li>Comply with applicable laws and regulations</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">3. Information Sharing</h2>
                    <p>We do not sell or rent your personal data. Your information may only be shared in the following circumstances:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>With service partners assisting in payment processing or technical support</li>
                        <li>When required by law or legal authorities</li>
                        <li>During business restructuring, merger, or acquisition</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">4. Cookies & Tracking</h2>
                    <p>We use cookies to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Analyze website traffic</li>
                        <li>Store user preferences</li>
                        <li>Improve performance and speed</li>
                    </ul>
                    <p>You can disable cookies through your browser settings, though some features may not function properly without them.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">5. Data Protection</h2>
                    <p>We implement strong security measures including encryption, secure hosting environments, firewalls, and protected payment gateways to safeguard your information against unauthorized access or misuse.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">6. Your Rights</h2>
                    <p>Depending on your location, you may have the right to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Request access to your personal data</li>
                        <li>Ask for correction or deletion</li>
                        <li>Withdraw marketing consent</li>
                        <li>Object to certain data processing activities</li>
                    </ul>
                    <p>To exercise these rights, contact us at:<br />
                        📧 <a href="mailto:support@iptvdubai.fun" className="text-[#D71921] hover:underline">support@iptvdubai.fun</a></p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">7. External Links</h2>
                    <p>Our website may contain links to third-party platforms. We are not responsible for the privacy practices or content of those external websites.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">8. Children’s Privacy</h2>
                    <p>Our services are intended for individuals aged 18 and above. We do not knowingly collect personal data from minors.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">9. Policy Updates</h2>
                    <p>We may update this Privacy Policy periodically. Any changes will be reflected with a revised effective date at the top of this page.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">10. Contact Information</h2>
                    <p>If you have any privacy-related questions, please contact us:<br />
                        📧 <a href="mailto:support@iptvdubai.fun" className="text-[#D71921] hover:underline">support@iptvdubai.fun</a></p>
                </section>

                <hr className="my-12 border-gray-200" />

                <h1 className="text-3xl font-black text-[#001540] mb-8 font-heading uppercase">Refund Policy</h1>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <p>At IPTV Dubai Hub, customer satisfaction is important to us. We offer a 7-Day Money-Back Guarantee on all first-time subscription purchases.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">Refund Eligibility</h2>
                    <p>You may qualify for a full refund if:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>The request is submitted within 7 days of the original purchase</li>
                        <li>You are a new customer</li>
                        <li>The service was not activated within the promised timeframe</li>
                        <li>You experienced unresolved technical issues</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">Non-Refundable Cases</h2>
                    <p>Refunds will not be issued if:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>The request is made after 7 days</li>
                        <li>Incorrect device information was provided</li>
                        <li>Your internet connection does not meet streaming requirements</li>
                        <li>There is misuse or violation of our service terms</li>
                        <li>The purchase is a renewal or second subscription</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">How to Request a Refund</h2>
                    <p>To initiate a refund request, email us with:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Full name</li>
                        <li>Email used for purchase</li>
                        <li>Order or transaction ID</li>
                        <li>Reason for request</li>
                    </ul>
                    <p>📧 <a href="mailto:support@iptvdubai.fun" className="text-[#D71921] hover:underline">support@iptvdubai.fun</a></p>
                    <p>Our support team will review your request within 24–48 hours. Approved refunds are processed through the original payment method within 5–7 business days.</p>

                    <h2 className="text-xl font-bold text-[#001540] mt-6 mb-2">Partial Refunds</h2>
                    <p>In specific situations where services were partially delivered, a partial refund may be issued at our discretion.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
