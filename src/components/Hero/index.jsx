import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import styles from './style.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image with Scale Animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={styles.imageWrapper}
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Architectural Luxury Interior"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </motion.div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.content}
        >
          <h1 className={styles.title}>
            We Paint Perfection Into Every Wall.
          </h1>
          
          <p className={styles.description}>
            Museum-quality surfaces for spaces that demand perfection. 
            We bring architectural visions to life through uncompromising 
            craftsmanship and restraint.
          </p>

          <a href="#philosophy" className={styles.workLink}>
            <span>View the Work</span>
            <ArrowDown size={14} className={styles.arrowIcon} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}