import { IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import { useState } from 'react';
import styles from '../styles/email.module.css';

function Email() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
 }
 
  return (
    <div className={styles.email}>
      <IconButton onClick={handleClick}>
        <EmailIcon />  
      </IconButton>
    </div>
  )
}

export default Email
