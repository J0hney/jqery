import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [touched, setTouched] = useState(false);

  const hasError = touched && (!email || !password || password !== confirm);

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!hasError) onClose?.();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register" size="medium">
      <form className={styles.form} onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          className={`${styles.input} ${touched && !email ? styles.error : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={`${styles.input} ${touched && !password ? styles.error : ''}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={`${styles.input} ${touched && password !== confirm ? styles.error : ''}`}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button className={styles.submitBtn} type="submit">Register</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;


