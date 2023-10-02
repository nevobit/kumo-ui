import React from 'react'
import styles from './Textarea.module.css'

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement>{
  icon?: string;
  className?: string;
}

const Textarea = ({icon, className, ...rest}: Props) => {
  return (
    <div className={styles.input}>
      {icon ? <i></i> : null}
      <textarea {...rest} className={`${styles.input_element} ${className == 'none' && styles.input_none } ${className}`}  />
    </div>
  )
}

export default Textarea
