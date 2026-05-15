import React from 'react';
import { motion } from 'framer-motion';
import Button from './../Button/index'
import BeforeAfterSlider from './../BeforeAfterSlider/index';
import styles from './style.module.css';

export default function PhilosophySection() {
  return (
    <>
      {/* ── PHILOSOPHY ── */}
      <section id="philosophy" className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.textContent}
            >
              <h2 className={styles.title}>Restraint as a Discipline.</h2>
              <p className={styles.bodyText}>
                True luxury is quiet. It doesn't shout; it endures. Our approach to interior 
                finishing is rooted in this philosophy. We don't just paint walls; we prepare, 
                sculpt, and refine surfaces until they become architectural elements in 
                their own right.
              </p>
              <Button to="/craftsmen" variant="outline">
                Discover Our Process
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.imageContent}
            >
              <div className={styles.imageFrame}>
                <img 
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800" 
                  alt="Craftsmanship detail"
                />
                <div className={styles.innerBorder} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION ── */}
      <section className={styles.transformation}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <h2 className={styles.title}>The Transformation</h2>
            <p className={styles.bodyText}>
              Witness the profound impact of uncompromising surface preparation 
              and premium application.
            </p>
          </div>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1600"
            afterImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600"
          />
        </div>
      </section>
    </>
  );
}