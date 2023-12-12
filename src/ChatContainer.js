// ChatContainer.js
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatContainer.css';  // Importa los estilos CSS


function ChatContainer({ chat }) {
  return (
    <div className="chat-container">
      <div className="chat-content">
        <h2>{chat.name}</h2>
        <MessageList messages={chat.messages} />
      </div>
      <div className="message-input-container">
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatContainer;
