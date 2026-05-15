import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/index';
import styles from './style.module.css';

// Mock data based on your PROJECTS constant
const PROJECTS = [
  { title: "Manhattan Penthouse", category: "Residential", fullImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" },
  { title: "Mayfair Gallery", category: "Commercial", fullImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" },
  { title: "Lakeside Villa", category: "Residential", fullImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" },
  { title: "Brutalist Kitchen", category: "Specialty Finish", fullImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200" }
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anelka Painting Services",
  "image": "https://anelkapainting.com/logo.png",
  "@id": "https://anelkapainting.com/portfolio",
  "url": "https://anelkapainting.com/portfolio",
  "telephone": "+1-234-567-8900",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "YourCity",
    "addressRegion": "YourState",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "sameAs": [
    "https://www.facebook.com/anelkapainting",
    "https://www.instagram.com/anelkapainting"
  ]
};

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Anelka Painting Projects in YourCity</title>
        <meta name="description" content="View our portfolio of completed painting projects. See why Anelka Painting is trusted for quality work in YourCity." />
        <meta name="keywords" content="painting portfolio, completed projects, painting gallery, YourCity painting" />
        <link rel="canonical" href="https://anelkapainting.com/portfolio" />
        <meta property="og:title" content="Portfolio | Anelka Painting Projects in YourCity" />
        <meta property="og:description" content="See our painting work for homes and businesses in YourCity. Interior, exterior, and specialty finishes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anelkapainting.com/portfolio" />
        <meta property="og:image" content="https://anelkapainting.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Anelka Painting Projects in YourCity" />
        <meta name="twitter:description" content="See our painting work for homes and businesses in YourCity. Interior, exterior, and specialty finishes." />
        <meta name="twitter:image" content="https://anelkapainting.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>
      <div className={styles.pageWrapper}>
        <section className={`${styles.section} ${styles.container}`}>
          {/* Header & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.header}
          >
            <h1 className={styles.title}>PORTFOLIO</h1>
            <div className={styles.filterBar}>
              <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Work</button>
              <button className={styles.filterBtn}>Residential</button>
              <button className={styles.filterBtn}>Commercial</button>
              <button className={styles.filterBtn}>Specialty Finishes</button>
            </div>
          </motion.div>
          {/* Bento Grid */}
          <div className={styles.portfolioGrid}>
            {/* Item 1 - Large Feature */}
            <PortfolioItem 
              project={PROJECTS[0]} 
              className={styles.span8Row2} 
            />
            {/* Item 2 - Vertical */}
            <PortfolioItem 
              project={PROJECTS[1]} 
              className={styles.span4} 
              delay={0.2}
            />
            {/* Item 3 - Overlap Square */}
            <PortfolioItem 
              project={PROJECTS[2]} 
              className={styles.span4Overlap} 
              delay={0.3}
            />
            {/* Item 4 - Wide */}
            <PortfolioItem 
              project={PROJECTS[3]} 
              className={styles.span6}
            />
            {/* Item 5 - Wide (Hardcoded variant) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`${styles.portfolioItem} ${styles.span6}`}
            >
              <img src="https://images.unsplash.com/photo-1544457070-4cd9c0dd4471?q=80&w=1200" className={styles.itemImage} alt="Loft Finish" />
              <div className={styles.itemOverlay}>
                <span className={styles.itemCategory}>Commercial / Gloss</span>
                <h3 className={styles.itemTitle}>SoHo Restoration</h3>
              </div>
            </motion.div>
          </div>
          <div className={styles.loadMoreWrapper}>
            <Button variant="outline">
              Load More Projects
            </Button>
          </div>
        </section>
        {/* Finish CTA */}
        <section className={styles.finishCta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>The Art of the Finish</h2>
            <Link to="/quote" className={styles.ctaLink}>Request a Quote</Link>
          </div>
        </section>
      </div>
    </>
  );
}

// Sub-component for individual project cards to keep code clean
function PortfolioItem({ project, className, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`${styles.portfolioItem} ${className}`}
    >
      <img src={project.fullImage} alt={project.title} className={styles.itemImage} />
      <div className={styles.itemOverlay}>
         <span className={styles.itemCategory}>{project.category}</span>
         <h3 className={styles.itemTitle}>{project.title}</h3>
      </div>
    </motion.div>
  );
}