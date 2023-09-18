import React from 'react'
import styles from './Input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  icon?: string;
  className?: string;
}

const Input = ({icon, className, ...rest}: Props) => {
  return (
    <div className={styles.input}>
      {icon ? <i></i> : null}
      <input {...rest} className={`${styles.input_element} ${className == 'none' && styles.input_none } ${className}`}  />
    </div>
  )
}

export default Input
