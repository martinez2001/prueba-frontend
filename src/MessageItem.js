import React, { useState } from 'react';
import './MessageItem.css';
import CommunicationAPI from './CommunicationAPI';  // Importa el módulo de la API

function MessageItem({ message,chat,setMessages}) {
  const [editedText, setEditedText] = useState(message.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Llama a la función de la API para editar el mensaje
      await CommunicationAPI.editMessage(chat._id, message._id, editedText);
      console.log(`Mensaje editado: ${editedText}`);

      // Recarga la lista de mensajes después de crear uno nuevo
      const response = await CommunicationAPI.getMessages(chat._id);
      const { messages } = response;
      setMessages(messages);
      
      setIsEditing(false);
      //window.location.reload(); //esto se podría mejorar

    } catch (error) {
      console.error('Error al editar el mensaje:', error);
    }
  };
  

  const handleDeleteClick = async () => {
    try {
      await CommunicationAPI.deleteMessage(chat._id, message._id);
      console.log(`Mensaje borrado: ${message.text}`);

      //window.location.reload(); //esto se podría mejorar
      
      // Recarga la lista de mensajes después de crear uno nuevo
      const response = await CommunicationAPI.getMessages(chat._id);
      const { messages } = response;
      setMessages(messages);

    } catch (error) {
      console.error('Error al borrar el mensaje:', error);
    }
  };

  return (
    <div className="card message-item">
      <div className="card-body">
        <div className="message-header">
            <span className="message-sender-id">{message.sender}</span>
        </div>
        <div className="message-content">
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <p className="card-text">{message.text}</p>
          )}
        </div>
        <div className="message-icons">
          {isEditing ? (
            // Icono de guardar si está editando
            <i className="bi bi-check" onClick={handleSaveClick}></i>
          ) : (
            // Icono de editar si no está editando
            <i className="bi bi-pencil" onClick={handleEditClick}></i>
          )}
          {/* Icono de borrar (siempre visible) */}
          <i className="bi bi-trash" onClick={handleDeleteClick}></i>
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
