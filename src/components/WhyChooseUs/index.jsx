import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './../Button/index';
import styles from './style.module.css';

export default function WhyChooseUs() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Premium Materials",
      desc: "We exclusively use high-end, low-VOC paints and superior primers for a finish that lasts decades.",
      icon: ShieldCheck
    },
    {
      title: "Meticulous Prep",
      desc: "80% of a great paint job is in the preparation. We sand, fill, and prime until surfaces are perfect.",
      icon: Clock
    },
    {
      title: "Guaranteed Excellence",
      desc: "Our work isn't finished until it meets our museum-quality standard and your total satisfaction.",
      icon: Award
    }
  ];

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.imageWrapper}
        >
          <div className={styles.mainImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=800" 
              alt="Professional Painter" 
              className={styles.mainImage}
            />
          </div>

          {/* Overlay Badge: Years */}
          <div className={styles.experienceBadge}>
            <div className={styles.experienceNumber}>5+</div>
            <div className={styles.experienceTitle}>Years of Excellence</div>
            <div className={styles.experienceSub}>Trusted across Ghana</div>
          </div>

          {/* Top Badge: Projects */}
          <div className={styles.projectsBadge}>
            <div className={styles.projectsNumber}>30+</div>
            <div className={styles.projectsTitle}>Projects Done</div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
        >
          <span className={styles.tag}>Why Choose Us</span>
          <h2 className={styles.title}>
            Craftsmanship you can<br />
            <em>see and touch.</em>
          </h2>
          <p className={styles.description}>
            Every brush stroke, every edge, every finish, we treat your property like our own. 
            Our team uses only premium paints and takes the time to prepare every surface properly, 
            because that's what makes our work last.
          </p>

          <div className={styles.features}>
            {features.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.featureItem}
              >
                <div className={styles.iconBox}>
                  <item.icon size={20} color="#D4AF37" />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>{item.title}</h4>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.buttonGroup}>
            <Button onClick={() => handleNav('/about')} variant="solid">
              Our Story <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Button>
            <Button onClick={() => handleNav('/quote')} variant="outline">
              Free Quote <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}