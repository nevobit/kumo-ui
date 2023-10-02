import React from 'react';
import styles from './Field.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement>{
  label?: string;
  name?: string;
  tip?: string;
  error?: string;
  children: React.ReactNode
}

const Field = ({label, name, error, tip, children, ...rest}: Props) => {
  return (
    <div className={styles.field} {...rest} >
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      {children}
      {tip && <div className={styles.tip}>{tip}</div> }
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default Field
