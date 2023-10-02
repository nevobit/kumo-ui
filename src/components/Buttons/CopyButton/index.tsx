import React, { useState } from 'react'
import styles from './CopyButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  language?: 'english' | 'spanish';
}

const CopyButton = ({language,className, ...rest}: Props) => {
    const [isLinkCopied, setLinkCopied] = useState(false);

    const handleLinkCopy = async() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 1000);
        if('clipboard' in navigator){
            return await navigator.clipboard.writeText(window.location.href);
        }
    }
  
    return (
    <button className={`${styles.button}  ${className}`} onClick={handleLinkCopy} {...rest} >
        <i className='bx bx-link'></i> {isLinkCopied?  language == 'spanish'? 'Copiado' : 'Link Copied' : language == 'spanish'? "Copiar" : "Copy link"}
    </button>
  )
}

export default CopyButton;
