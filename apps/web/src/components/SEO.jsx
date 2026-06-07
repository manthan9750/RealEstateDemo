import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ 
  title, 
  description, 
  keywords = 'Real Estate in Panvel, Property Dealer in Navi Mumbai, Best Real Estate Agent in Panvel, Residential Projects Panvel, Commercial Property Navi Mumbai, Property Investment Panvel',
  ogImage = 'https://images.unsplash.com/photo-1506851321937-51fff21bc9a0'
}) {
  const siteTitle = 'Shivshlok Real Estate';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}

export default SEO;
