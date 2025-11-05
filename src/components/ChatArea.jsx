import React, { useState } from 'react';
import Message from './Message';
import styles from './ChatArea.module.css';
import ContactModal from './modals/ContactModal';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
const USER_AVATAR = '/images/user-avatar.svg';

const ChatArea = ({ chat, onSendMessage, onRateMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEdit = (message) => {
    setInputValue(message.content);
  };

  const handleCopy = () => {
    // Copy feedback could be shown here
    console.log('Message copied');
  };

  const handleRate = (messageId, rating) => {
    if (onRateMessage) onRateMessage(messageId, rating);
  };

  const handleResend = (message) => {
    if (message?.content) onSendMessage(message.content);
  };

  if (!chat) {
    return (
      <div className={styles.chatArea}>
        <div className={styles.emptyState}>
          <div className={styles.emptyTitle}>Select a chat to start</div>
          <div className={styles.emptySubtitle}>Choose a conversation from the sidebar or start a new chat</div>
        </div>
      </div>
    );
  }

  const currentUser = chat.messages[0]?.type === 'user' ? chat.messages[0] : null;
  const timestamp = currentUser?.timestamp || '';

  const [openModal, setOpenModal] = useState(null); // 'contact' | 'login' | 'register' | null

  return (
    <div className={styles.chatArea}>
      <div className={styles.chatHeader}>
        <div className={styles.chatTimestamp}>{timestamp}</div>
        <div className={styles.navBar}>
          <span className={styles.navLink} onClick={() => setOpenModal('contact')}>Contact Us</span>
          <span className={`${styles.navLink} ${styles.navUser}`}>
            User Name
            <img className={styles.navAvatar} src={USER_AVATAR} alt="User" onError={(e)=>{e.currentTarget.style.display='none'}}/>
          </span>
          <span className={`${styles.navLink} ${styles.navAction}`} onClick={() => setOpenModal('login')}>Login</span>
          <span className={`${styles.navLink} ${styles.navAction}`} onClick={() => setOpenModal('register')}>Register</span>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        {chat.messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            onEdit={handleEdit}
            onCopy={handleCopy}
            onRate={(rating) => handleRate(message.id, rating)}
            onResend={() => handleResend(message)}
          />
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.messageInput}
          placeholder="From whom can I obtain updates on my creative/document formatting Work Request ticket?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          <span className={styles.sendIcon}>✈</span>
        </button>
      </div>

      {/* Modals */}
      <ContactModal isOpen={openModal === 'contact'} onClose={() => setOpenModal(null)} />
      <LoginModal isOpen={openModal === 'login'} onClose={() => setOpenModal(null)} />
      <RegisterModal isOpen={openModal === 'register'} onClose={() => setOpenModal(null)} />
    </div>
  );
};

export default ChatArea;

