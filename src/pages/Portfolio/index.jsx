import React from 'react';
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

export default function Portfolio() {
  return (
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