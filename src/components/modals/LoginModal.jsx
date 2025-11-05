import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState(false);

  const hasError = touched && (!email || !password);

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!hasError) onClose?.();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login" size="medium">
      <form className={styles.form} onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          className={`${styles.input} ${hasError && !email ? styles.error : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={`${styles.input} ${hasError && !password ? styles.error : ''}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.submitBtn} type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginModal;


