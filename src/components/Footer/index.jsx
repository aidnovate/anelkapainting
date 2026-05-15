import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Branding Section */}
          <div className={styles.branding}>
            <h2 className={styles.logo}>ANELKA PAINTING</h2>
            <p className={styles.description}>
              Creating museum-quality surfaces for spaces that demand perfection.
              We redefine interiors through meticulous craftsmanship.
            </p>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} ANELKA PAINTING SERVICES. THE ART OF THE FINISH.
            </p>
          </div>

          {/* Navigation Section */}
          <div className={styles.linkGroup}>
            <h4 className={styles.heading}>Navigation</h4>
            <div className={styles.linkList}>
              <Link to="/portfolio" className={styles.link}>PORTFOLIO</Link>
              <Link to="/services" className={styles.link}>SERVICES</Link>
              {/* <Link to="/gallery" className={styles.link}>GALLERY</Link> */}
              <Link to="/quote" className={styles.link}>REQUEST QUOTE</Link>
            </div>
          </div>

          {/* Social Section */}
          <div className={styles.linkGroup}>
            <h4 className={styles.heading}>Social</h4>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>INSTAGRAM</a>
              <a href="#" className={styles.link}>JOURNAL</a>
              <div className={styles.locationWrapper}>
                <MapPin size={16} />
                <span className={styles.locationText}>
                  kWADASO · kUMASI · gHANA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}