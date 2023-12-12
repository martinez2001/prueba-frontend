import React from 'react';
import './MessageItem.css';  // Importa los estilos CSS

function MessageItem({ message }) {
    const handleEditClick = () => {
        // Lógica para editar el mensaje (a implementar)
        console.log(`Editando mensaje: ${message.text}`);
    };

    const handleDeleteClick = () => {
        // Lógica para borrar el mensaje (a implementar)
        console.log(`Borrando mensaje: ${message.text}`);
    };
    return (
        <div className="card message-item">
        <div className="card-body">
          <div className="message-content">
            <p className="card-text">{message.text}</p>
            <small className="text-muted">{message.sender} - {message.date.toLocaleString()}</small>
          </div>
          <div className="message-icons">
            {/* Icono de editar */}
            <i className="bi bi-pencil" onClick={handleEditClick}></i>
  
            {/* Icono de borrar */}
            <i className="bi bi-trash" onClick={handleDeleteClick}></i>
          </div>
        </div>
      </div>
    );
}

export default MessageItem;

