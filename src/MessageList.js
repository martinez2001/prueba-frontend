// MessageList.js
import React from 'react';
import MessageItem from './MessageItem';

function MessageList({ messages, chat}) {
  // Verifica si 'messages' es null o undefined. Para evitar que dé error cuando aun no ha llegado la respuesta 
  if (!messages) {
    return null; // O puedes devolver un componente de carga, un mensaje, etc.
  }

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} chat={chat} />
      ))}
    </div>
  );
}

export default MessageList;
