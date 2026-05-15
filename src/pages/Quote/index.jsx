import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Building2, Landmark, Check } from 'lucide-react';
import styles from './style.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    scope: '',
    vibe: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: ''
  });

  const scopes = [
    { id: 'interior', title: 'Interior', icon: <Home size={24} />, desc: 'Rooms, trim, ceilings, and detailed woodwork.' },
    { id: 'exterior', title: 'Exterior', icon: <Building2 size={24} />, desc: 'Facades, protective coatings, and restoration.' },
    { id: 'estate', title: 'Full Estate', icon: <Landmark size={24} />, desc: 'Comprehensive interior and exterior transformation.' }
  ];

  const vibes = [
    { id: 'minimalist', title: 'Warm Minimalist', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400' },
    { id: 'heritage', title: 'Heritage Dark', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400' },
    { id: 'coastal', title: 'Coastal Crisp', img: 'https://images.unsplash.com/photo-1544457070-4cd9c0dd4471?q=80&w=400' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Your dossier has been submitted for review.');
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <div className={styles.decoration} />

        <div className={styles.formCol}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroHeader}
          >
            <span className={styles.label}>Initial Consultation</span>
            <h1 className={styles.title}>Begin Your<br />Transformation</h1>
            <p className={styles.description}>
              Every masterpiece begins with a conversation. Detail your vision below, and our master craftsmen will prepare a bespoke proposal.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit}>
            
            {/* SECTION 01: SCOPE */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.stepNumber}>01</span>
                <h2 className={styles.sectionTitle}>The Canvas</h2>
              </div>
              
              <div className={styles.scopeGrid}>
                <span className={styles.label} style={{ color: '#708090' }}>Project Scope</span>
                {scopes.map(scope => (
                  <div 
                    key={scope.id}
                    onClick={() => setFormData({...formData, scope: scope.id})}
                    className={`${styles.scopeCard} ${formData.scope === scope.id ? styles.scopeCardActive : ''}`}
                  >
                    {formData.scope === scope.id && <Check className={styles.checkIcon} size={16} />}
                    <div style={{ color: formData.scope === scope.id ? '#1A1A1A' : '#708090', marginBottom: 16 }}>{scope.icon}</div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>{scope.title}</h3>
                    <p style={{ color: '#708090', fontSize: '0.875rem' }}>{scope.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 02: VIBE */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.stepNumber}>02</span>
                <h2 className={styles.sectionTitle}>The Aesthetic</h2>
              </div>
              <div className={styles.vibeGrid}>
                {vibes.map(vibe => (
                  <div 
                    key={vibe.id}
                    onClick={() => setFormData({...formData, vibe: vibe.id})}
                    className={`${styles.vibeCard} ${formData.vibe === vibe.id ? styles.vibeCardActive : ''}`}
                  >
                    <img src={vibe.img} className={styles.vibeImage} alt={vibe.title} />
                    <div className={styles.vibeOverlay}>
                      <span className={styles.label} style={{ color: '#FAF9F6', margin: 0 }}>{vibe.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 03: DETAILS */}
            <section className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.stepNumber}>03</span>
                <h2 className={styles.sectionTitle}>The Principal</h2>
              </div>
              <div className={styles.inputGrid}>
                <div>
                  <label className={styles.label} style={{ color: '#708090' }}>First Name</label>
                  <input required type="text" className={styles.inputField} />
                </div>
                <div>
                  <label className={styles.label} style={{ color: '#708090' }}>Last Name</label>
                  <input required type="text" className={styles.inputField} />
                </div>
                <div className={styles.inputFull}>
                  <label className={styles.label} style={{ color: '#708090' }}>Email</label>
                  <input required type="email" className={styles.inputField} />
                </div>
                <div className={styles.inputFull}>
                  <label className={styles.label} style={{ color: '#708090' }}>Details</label>
                  <textarea 
                    rows={4} 
                    className={`${styles.inputField} styles.textArea`} 
                    placeholder="Describe specific architectural features..." 
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                 <span>Submit Dossier</span>
                 <ArrowRight size={14} />
              </button>
            </section>
          </form>
        </div>

        {/* ASIDE IMAGE & QUOTE */}
        <aside className={styles.aside}>
           <div className={styles.stickyBox}>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" className={styles.asideImage} alt="Interior" />
              <div className={styles.quoteCard}>
                 <p className={styles.quoteText}>
                   "The difference between a painted room and a masterpiece is the intention behind every brushstroke."
                 </p>
                 <span className={styles.label} style={{ color: '#708090', margin: 0 }}>— Master Artisan</span>
              </div>
           </div>
        </aside>
      </main>
    </div>
  );
}