import React from 'react';
import { Link } from 'react-router-dom';
import Button from './../Button/index';
import styles from './style.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      {/* Decorative Background Element */}
      <div className={styles.decoration} />

      <div className={styles.container}>
        <h2 className={styles.title}>Commission a Project</h2>
        
        <p className={styles.subtitle}>
          We accept a limited number of commissions per quarter to ensure 
          uncompromising dedication to each space.
        </p>

        <div className={styles.actions}>
          {/* Using our reusable Button component with customized class */}
          <Button 
            to="/quote" 
            className={styles.primaryBtn}
          >
            Request a Consultation
          </Button>

          <Link 
            to="/portfolio" 
            className={styles.portfolioLink}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}