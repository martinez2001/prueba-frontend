// MessageInput.js
import React from 'react';
import './MessageInput.css';  // Importa los estilos CSS

function MessageInput() {
  return (
    <div className="message-input">
      {/* Aquí puedes agregar el formulario para enviar mensajes */}
      <input type="text" placeholder="Escribe un mensaje..." />
      <button type="button">Enviar</button>
    </div>
  );
}

export default MessageInput;
