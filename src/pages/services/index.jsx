import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/index'
import styles from './style.module.css';

export default function OurServices() {
  const services = [
    {
      id: '01',
      title: 'Residential Finishes',
      tagline: 'The Foundation',
      description: 'Our residential division treats every home as a blank canvas. We employ rigorous surface preparation protocols and apply premium coatings with absolute precision.',
      image: 'https://images.unsplash.com/photo-1628592102751-ba82402b5ade?q=80&w=1200',
      reversed: false
    },
    {
      id: '02',
      title: 'Commercial Projects',
      tagline: 'The Scale',
      description: 'Delivering architectural-grade finishes at scale. We partner with designers and developers to execute complex commercial visions with strict adherence to timelines.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
      reversed: true
    },
    {
      id: '03',
      title: 'Specialty Applications',
      tagline: 'The Nuance',
      description: 'Bespoke textural finishes that introduce organic movement and depth. Our artisans specialize in authentic Roman clay, Venetian plaster, and mineral washes.',
      image: 'https://images.unsplash.com/photo-1595428774751-96f3cf0ad885?q=80&w=1200',
      reversed: false
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.container}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroTitle}
        >
          Our Services: Elevating spaces through meticulous craftsmanship.
        </motion.h1>
      </section>

      {/* Services Iteration */}
      {services.map((service) => (
        <section key={service.id} className={`${styles.serviceSection} ${styles.container}`}>
          <div className={styles.grid}>
            
            {/* Visual Column */}
            <motion.div 
               initial={{ opacity: 0, x: service.reversed ? 30 : -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={`${styles.imageCol} ${service.reversed ? styles.imageColReversed : ''}`}
            >
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
               initial={{ opacity: 0, x: service.reversed ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={`${styles.contentCol} ${service.reversed ? styles.contentColReversed : ''}`}
            >
              <span className={styles.tagline}>
                {service.id} / {service.tagline}
              </span>
              <h2 className={styles.serviceTitle}>
                {service.title}
              </h2>
              <p className={styles.description}>
                {service.description}
              </p>
              <Link to="/portfolio" className={styles.textLink}>
                <span>View Portfolio</span>
                <ArrowRight size={14} className={styles.arrow} />
              </Link>
            </motion.div>
            
          </div>
        </section>
      ))}

      {/* Bottom CTA Section */}
      <section className={styles.ctaSection}>
         <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Begin the transformation.</h2>
            <Button 
              to="/quote" 
              className={styles.ctaButton}
            >
              Request a Consultation
            </Button>
         </div>
      </section>
    </div>
  );
}