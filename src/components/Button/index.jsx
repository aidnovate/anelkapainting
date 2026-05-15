import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Button({ to, href, onClick, children, className, variant }) {
  const combinedClassName = `${styles.button} ${variant === 'outline' ? styles.outline : ''} ${className || ''}`;

  if (to) {
    return <Link to={to} className={combinedClassName}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}