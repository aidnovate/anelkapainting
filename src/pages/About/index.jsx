import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Shield, Clock, Users, Palette, ThumbsUp, 
  ArrowRight, Star 
} from 'lucide-react';
import Button from './../../components/Button/index';
import styles from './style.module.css';

export default function About() {
  const values = [
    { icon: Award, title: "Quality First", desc: "We never cut corners. Premium paints, proper preparation, and precision — every single time." },
    { icon: Shield, title: "Fully Insured", desc: "Your property is protected. We carry full liability insurance on every project, big or small." },
    { icon: Clock, title: "Punctual & Reliable", desc: "We show up when we say we will, and finish when we promised. No excuses, no delays." },
    { icon: Users, title: "Expert Team", desc: "Every member of our crew is trained, experienced, and takes genuine pride in their work." },
    { icon: Palette, title: "Colour Expertise", desc: "Our team stays current on colour trends and paint technology to give you the best advice." },
    { icon: ThumbsUp, title: "100% Satisfaction", desc: "We do a final walkthrough with you. If anything isn't perfect, we fix it — no arguments." },
  ];

  const stats = [
    { val: "30+", label: "Projects" },
    { val: "5+", label: "Years" },
    { val: "98%", label: "Satisfaction" }
  ];

  return (
    <div className={styles.aboutPage}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80" 
          alt="Prestige Painting Painter" 
          className={styles.heroImage} 
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.container} ${styles.heroContent}`}>
          <span className={styles.tag} style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }}>
            About Us
          </span>
          <h1 className={styles.heroTitle}>
            Five years of<br /><em>painting perfection.</em>
          </h1>
          <p className={styles.paragraph}>
            Founded in Accra, Prestige Painting Services has grown from a two-man 
            operation to Ghana's most trusted painting company, one perfectly finished wall at a time.
          </p>
        </div>
      </section>

      <div className={`${styles.container} ${styles.sectionPadding}`}>
        
        {/* STORY SECTION */}
        <div className={styles.storyGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.tag} style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }}>
              Our Story
            </span>
            <h2 className={styles.storyTitle}>
              Built on<br /><em>hard work and craftsmanship.</em>
            </h2>
            <p className={styles.paragraph}>
              Prestige Painting Services was founded with a simple belief: every property deserves 
              a finish that lasts, and every client deserves to be treated with respect and honesty.
            </p>
            <p className={styles.paragraph}>
              From our first small repaint job in Accra, we've grown by doing the job right and letting 
              our results speak for us. Word of mouth has been our best marketing.
            </p>

            <div className={styles.statsStrip}>
              {stats.map((s, i) => (
                <div key={i}>
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <Button to="/quote" variant="outline">
              Work With Us <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </Button>
          </motion.div>

          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className={styles.storyImageContainer}>
              <img 
                src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=800" 
                alt="Our Work" 
                className={styles.storyImage} 
              />
            </div>
            <div className={styles.reviewBadge}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={13} fill="#D4AF37" color="#D4AF37" />)}
              </div>
              <div style={{ fontFamily: 'serif', fontSize: 16, fontWeight: 700 }}>Rated 4.9/5</div>
              <div style={{ fontSize: 11, color: '#708090' }}>from 200+ reviews</div>
            </div>
          </motion.div>
        </div>

        {/* VALUES SECTION */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className={styles.tag} style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }}>
            Our Values
          </span>
          <h2 className={styles.storyTitle}>The principles we paint by</h2>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              className={styles.valueCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className={styles.iconBox}>
                <v.icon size={22} color="#D4AF37" />
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{v.title}</h4>
              <p style={{ color: '#708090', fontSize: 13, lineHeight: 1.75 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TEAM BANNER */}
        <motion.div 
          className={styles.teamBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200" 
            alt="The Prestige Team" 
            className={styles.teamImage} 
          />
          <div className={styles.teamOverlay} />
          <div className={styles.teamContent}>
            <span className={styles.tag} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              Our Team
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#fff', margin: '14px 0 12px', fontFamily: 'serif' }}>
              A crew that cares.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 440, fontSize: 15, lineHeight: 1.85 }}>
              Every painter on our team is vetted, trained, and committed to the Prestige standard. 
              We don't send people we wouldn't trust in our own homes.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}