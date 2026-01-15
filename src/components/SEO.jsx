import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    schema
}) => {
    const siteUrl = 'https://avinash-designer.netlify.app';

    const defaultTitle =
        'Avinash Naidu – UX/UI Designer & Product Designer Portfolio';

    const defaultDescription =
        'Avinash Naidu is a UX/UI Designer & Product Designer based in India with 4+ years of experience designing user-centered SaaS, web, and mobile products.';

    const defaultKeywords =
        'UX/UI Designer, Product Designer, UI UX Designer Portfolio, UX Designer India, SaaS UX Designer, Dashboard UX Designer';

    // FINAL title logic (clean + predictable)
    const finalTitle = title
        ? `${title} | Avinash Naidu`
        : defaultTitle;

    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

    const metaImage = image
        ? image.startsWith('http')
            ? image
            : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
        : `${siteUrl}/og-image.png`;

    const defaultSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Avinash Naidu",
            "jobTitle": "UX/UI Designer & Product Designer",
            "description":
                "UX/UI Designer with 4+ years of experience designing SaaS, web, and mobile products.",
            "url": siteUrl,
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            },
            "sameAs": [
                "https://www.linkedin.com/in/avinash-rowthu-134371190/",
                "https://www.behance.net/avinashrowthu"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Avinash Naidu Portfolio",
            "url": siteUrl
        }
    ];

    return (
        <Helmet>
            {/* Core SEO */}
            <title>{finalTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content="Avinash Naidu" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="theme-color" content="#FC6B00" />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:alt" content={finalTitle} />
            <meta property="og:site_name" content="Avinash Naidu Portfolio" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:url" content={canonicalUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schema ? [...defaultSchema, schema] : defaultSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
