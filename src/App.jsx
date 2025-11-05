import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import { mockChats } from './data/mockData';
import styles from './App.module.css';

function App() {
  const [selectedChatId, setSelectedChatId] = useState(mockChats.length > 0 ? mockChats[0].id : null);
  const [chats, setChats] = useState(mockChats);

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: 'New chat',
      date: new Date().toISOString().split('T')[0].replace(/-/g, '/'),
      messages: [],
    };
    setChats([newChat, ...chats]);
    setSelectedChatId(newChat.id);
  };

  const handleSendMessage = (content) => {
    if (!selectedChatId) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: content,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+):(\d+)/, '$3/$1/$2 $4:$5:$6'),
    };

    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: 'Thank you for your message. I will get back to you shortly.',
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+):(\d+)/, '$3/$1/$2 $4:$5:$6'),
    };

    setChats(chats.map(chat => {
      if (chat.id === selectedChatId) {
        const updatedTitle = content.length > 30 ? content.substring(0, 30) + '...' : content;
        return {
          ...chat,
          title: updatedTitle,
          messages: [...chat.messages, userMessage, botMessage],
        };
      }
      return chat;
    }));
  };

  const handleRateMessage = (messageId, rating) => {
    setChats(chats.map(chat => {
      if (chat.id !== selectedChatId) return chat;
      return {
        ...chat,
        messages: chat.messages.map(msg => (
          msg.id === messageId ? { ...msg, rating } : msg
        )),
      };
    }));
  };

  return (
    <div className={styles.app}>
      <Sidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
      />
      <ChatArea
        chat={selectedChat}
        onSendMessage={handleSendMessage}
        onRateMessage={handleRateMessage}
      />
    </div>
  );
}

export default App;

