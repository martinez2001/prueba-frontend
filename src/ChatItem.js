import React from 'react';

function ChatItem({ chat, onClick }) {
  const handleClick = () => {
    // Llama a la función onClick pasada como prop y pasa el chat seleccionado
    onClick(chat);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-body">
        <h5 className="card-title">{chat.name}</h5>
      </div>
    </div>
  );
} 

export default ChatItem;
