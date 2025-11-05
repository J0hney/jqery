import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, title, children, onClose, size = 'default' }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${size === 'large' ? styles.sizeLarge : ''} ${size === 'medium' ? styles.sizeMedium : ''}`} onClick={(e) => e.stopPropagation()}>
        {title && <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>}
        <div className={`${styles.body} ${size === 'large' ? styles.bodyLarge : ''} ${size === 'medium' ? styles.bodyMedium : ''}`}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, modalRoot);
};

export default Modal;


