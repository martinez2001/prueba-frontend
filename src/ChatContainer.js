// ChatContainer.js
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatContainer.css';  // Importa los estilos CSS


function ChatContainer({ chat, messages,onSendMessage,setMessages}) {  
  return (
    <div className="chat-container">
      <div className="chat-content">
        <h2>{chat.name}</h2>
        <MessageList messages={messages} chat={chat} setMessages={setMessages}/>
      </div>
      <div className="message-input-container">
        <MessageInput messages={messages} chat={chat} onSendMessage={onSendMessage}/>
      </div>
    </div>
  );
}


export default ChatContainer;
