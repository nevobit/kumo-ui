import React from 'react'
import styles from './Button.module.css';
import Loader from '@/components/Loader';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'primary' | 'secondary' | 'cancel' | 'third' | 'danger'
  children: React.ReactNode,
  loading?: boolean,
  className?: string;
}

const Button = ({children, variant = 'primary', loading, className, ...rest}: Props) => {
  return (
    <button className={`${styles.button}  ${styles[variant]} ${className}`} {...rest}>
      {loading ? <Loader small /> : children}
    </button>
  )
}

export default Button;
