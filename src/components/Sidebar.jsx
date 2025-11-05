import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { hotKeywords } from '../data/mockData';

const TEAM_OPTIONS = [
  'All Teams',
  'Account Management',
  'Website Management',
  'Creative Services',
  'DMS',
  'I&A Messaging',
  'Digital Solution',
  'Digital Innovations',
  'COS',
];

const Sidebar = ({ chats, selectedChatId, onSelectChat, onNewChat }) => {
  const [selectedTeam, setSelectedTeam] = useState(TEAM_OPTIONS[0]);
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.title}>DPS ChatBot</div>
        <button className={styles.newChatButton} onClick={onNewChat}>
          + New chat
        </button>
      </div>

      <div className={styles.recentChats}>
        <div className={styles.sectionTitle}>Recent chats</div>
        <div className={styles.chatList}>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`${styles.chatItem} ${selectedChatId === chat.id ? styles.active : ''}`}
              onClick={() => onSelectChat(chat.id)}
            >
              <div className={styles.chatTitle}>{chat.title}</div>
              <div className={styles.chatDate}>({chat.date})</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.sectionTitle}>Hot Keywords</div>
        <div className={styles.keywords}>
          {hotKeywords.map((keyword, index) => (
            <span key={index} className={styles.keyword}>
              {keyword}
            </span>
          ))}
        </div>
        <div className={styles.teamSection}>
          <label className={styles.teamLabel} htmlFor="team-select">Team</label>
          <select
            id="team-select"
            className={styles.teamSelect}
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            {TEAM_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

