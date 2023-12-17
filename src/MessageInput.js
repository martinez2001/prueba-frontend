// MessageInput.js
import './MessageInput.css';  // Importa los estilos CSS

import React, { useState } from 'react';

function MessageInput({ onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Escribe un mensaje..."
      />
      <button type="button" onClick={handleSendClick}>Enviar</button>
    </div>
  );
}

export default MessageInput;