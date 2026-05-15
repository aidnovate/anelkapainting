import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import styles from './style.module.css';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const onMouseMove = (e) => isDragging && handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className={styles.container}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      <img src={afterImage} alt="After" className={styles.image} />

      <div 
        className={styles.beforeWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className={styles.image} />
      </div>

      <div className={styles.handle} style={{ left: `${sliderPosition}%` }}>
        <div className={styles.handleCircle}>
          <ArrowLeftRight size={20} color="#1A1A1A" />
        </div>
      </div>

      <div className={`${styles.label} ${styles.labelBefore}`}>Before</div>
      <div className={`${styles.label} ${styles.labelAfter}`}>After</div>
    </div>
  );
}