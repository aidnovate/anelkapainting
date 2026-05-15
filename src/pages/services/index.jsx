import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/index'; 
import styles from './style.module.css';
import exterior from './../../assets/images/exterior.jpg'
import cabinet from './../../assets/images/carbinet.jpg'
import wallpaper from './../../assets/images/wallpaper.jpg'
import stencil from './../../assets/images/stencil.jpg'

export default function OurServices() {
  const services = [
    {
      id: '01',
      title: 'Interior Painting',
      tagline: 'The Essence',
      description: 'Meticulous application for rooms, ceilings, and high-traffic kitchens. We use premium, low-VOC finishes to ensure your living spaces are as healthy as they are beautiful.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200',
    },
    {
      id: '02',
      title: 'Exterior Painting',
      tagline: 'The Protection',
      description: 'Weather-resistant protection for exterior walls, gates, and fences. Our specialized coatings are designed to withstand the elements while enhancing your property’s curb appeal.',
      image: exterior,
    },
    {
      id: '03',
      title: 'Cabinet & Furniture Painting',
      tagline: 'The Detail',
      description: 'Bespoke refinishing for kitchen cabinets and fine furniture. We achieve a factory-grade smooth finish that breathes new life into your existing interior elements.',
      image: cabinet,
    },
    {
      id: '04',
      title: 'Wallpaper Installation & Removal',
      tagline: 'The Pattern',
      description: 'Expert installation of luxury wallcoverings and careful removal of aged materials. We ensure seamless patterns and perfectly prepared surfaces.',
      image: wallpaper,
    },
    {
      id: '05',
      title: 'Adrey Finishes',
      tagline: 'The Texture',
      description: 'Specialized decorative plaster and textured finishes. Our artisans create depth and movement on feature walls that demand architectural interest.',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200',
    },
    {
      id: '06',
      title: 'Commercial & Office Painting',
      tagline: 'The Scale',
      description: 'Scalable painting solutions for commercial spaces and offices. We work around your schedule to deliver professional environments with minimal disruption.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
    },
    {
      id: '07',
      title: 'Stencil & Roller Designs',
      tagline: 'The Artistry',
      description: 'Artistic pattern application using custom stencils and specialty rollers. A sophisticated alternative to wallpaper for a truly unique finish.',
      image: stencil,
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.heroTagline}>Expertise & Craft</span>
          <h1 className={styles.heroTitle}>
            Elevating spaces through meticulous craftsmanship and an eye for the extraordinary.
          </h1>
        </motion.div>
      </section>

      {/* Services List */}
      {services.map((service, index) => {
        // Logic to alternate the layout for each service
        const isReversed = index % 2 !== 0;

        return (
          <section key={service.id} className={`${styles.serviceSection} ${styles.container}`}>
            <div className={styles.grid}>
              
              {/* Image Column */}
              <motion.div 
                 initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className={`${styles.imageCol} ${isReversed ? styles.imageColReversed : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <img src={service.image} alt={service.title} />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                 initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className={`${styles.contentCol} ${isReversed ? styles.contentColReversed : ''}`}
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
                  <span>View Projects</span>
                  <ArrowRight size={14} className={styles.arrow} />
                </Link>
              </motion.div>
              
            </div>
          </section>
        );
      })}

      {/* Bottom CTA Section */}
      <section className={styles.ctaSection}>
         <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Begin the transformation.</h2>
            <Button to="/quote" className={styles.ctaButton}>
              Request a Consultation
            </Button>
         </div>
      </section>
    </div>
  );
}