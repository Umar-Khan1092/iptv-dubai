import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonical }) => {
    const location = useLocation();
    const baseUrl = 'https://iptvdubai.fun';
    const currentUrl = canonical || `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

    useEffect(() => {
        // Update Title
        if (title) {
            document.title = title;
        }

        // Update Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && description) {
            metaDescription.setAttribute('content', description);
        }

        // Update Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', currentUrl);

        // Update OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && title) ogTitle.setAttribute('content', title);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', currentUrl);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription && description) ogDescription.setAttribute('content', description);

    }, [title, description, currentUrl]);

    return null;
};

export default SEO;
