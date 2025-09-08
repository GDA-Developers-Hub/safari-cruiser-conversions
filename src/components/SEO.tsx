import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoContent, seoConfig, structuredData, generateMetaTags } from '@/seo/seoContent';

interface SEOProps {
  page: keyof typeof seoContent;
  customData?: {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
    noindex?: boolean;
  };
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({ page, customData = {}, structuredData: customStructuredData }) => {
  const pageData = seoContent[page];
  const metaTags = generateMetaTags(page, customData);
  
  // Override with custom data if provided
  const finalTitle = customData.title || metaTags.title;
  const finalDescription = customData.description || metaTags.description;
  const finalImage = customData.image || metaTags['og:image'];
  const finalPath = customData.path || '';
  
  // Determine which structured data to use
  const finalStructuredData = customStructuredData || structuredData.organization;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={metaTags.author} />
      <meta name="robots" content={customData.noindex ? "noindex, nofollow" : metaTags.robots} />
      <meta name="viewport" content={metaTags.viewport} />
      <meta name="theme-color" content={metaTags['theme-color']} />
      <meta name="msapplication-TileColor" content={metaTags['msapplication-TileColor']} />
      
      {/* Apple Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content={metaTags['apple-mobile-web-app-capable']} />
      <meta name="apple-mobile-web-app-status-bar-style" content={metaTags['apple-mobile-web-app-status-bar-style']} />
      <meta name="apple-mobile-web-app-title" content={metaTags['apple-mobile-web-app-title']} />
      <meta name="format-detection" content={metaTags['format-detection']} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={metaTags['og:type']} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={`${seoConfig.siteUrl}${finalPath}`} />
      <meta property="og:site_name" content={metaTags['og:site_name']} />
      <meta property="og:locale" content={metaTags['og:locale']} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content={String(metaTags['og:image:width'])} />
      <meta property="og:image:height" content={String(metaTags['og:image:height'])} />
      <meta property="og:image:alt" content={metaTags['og:image:alt']} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={metaTags['twitter:card']} />
      <meta name="twitter:site" content={metaTags['twitter:site']} />
      <meta name="twitter:creator" content={metaTags['twitter:creator']} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional SEO Meta Tags */}
      <link rel="canonical" href={`${seoConfig.siteUrl}${finalPath}`} />
      <meta name="geo.region" content={metaTags['geo.region']} />
      <meta name="geo.placename" content={metaTags['geo.placename']} />
      <meta name="geo.position" content={metaTags['geo.position']} />
      <meta name="ICBM" content={metaTags['ICBM']} />
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content={metaTags['google-site-verification']} />
      <meta name="msvalidate.01" content={metaTags['msvalidate.01']} />
      <meta name="yandex-verification" content={metaTags['yandex-verification']} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for specific pages */}
      {page === 'homepage' && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData.localBusiness)}
        </script>
      )}
      
      {page === 'gallery' && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData.breadcrumbList)}
        </script>
      )}
      
      {/* FAQ Structured Data for services page */}
      {page === 'services' && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData.faqPage)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
