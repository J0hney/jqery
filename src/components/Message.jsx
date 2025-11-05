import React, { useState } from 'react';
import styles from './Message.module.css';
const USER_AVATAR = '/images/user-avatar.svg';

const Message = ({ message, onEdit, onCopy, onRate, onResend }) => {
  const [showRating, setShowRating] = useState(false);
  const isUser = message.type === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    if (onCopy) onCopy();
  };

  const handleRate = (rating) => {
    if (onRate) onRate(rating);
    setShowRating(false);
  };

  return (
    <div className={`${styles.messageContainer} ${isUser ? styles.userMessage : styles.botMessage}`}>
      <div className={styles.avatar}>
        {isUser ? (
          <img src={USER_AVATAR} alt="User Avatar" onError={(e)=>{e.currentTarget.style.display='none'}} />
        ) : '🤖'}
      </div>
      <div className={styles.messageContent}>
        <div className={`${styles.bubble} ${isUser ? styles.userBubble : styles.botBubble}`}>
          <div className={styles.messageText}>{message.content}</div>
          <div className={styles.messageActions}>
            {isUser ? (
              <>
                <button className={styles.actionButton} onClick={() => onEdit && onEdit(message)}>
                  Edit
                </button>
                <button className={styles.actionButton} onClick={handleCopy}>
                  Copy
                </button>
              </>
            ) : (
              <>
                <button className={`${styles.actionButton} ${styles.primary}`} onClick={() => onResend && onResend(message)}>
                  Resend
                </button>
                <button className={styles.actionButton} onClick={handleCopy}>
                  Copy
                </button>
                <div className={styles.ratingContainer}>
                  <span className={styles.ratingLabel}>Quality Rate:</span>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`${styles.star} ${message.rating >= star ? styles.filled : ''}`}
                        onClick={() => handleRate(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

