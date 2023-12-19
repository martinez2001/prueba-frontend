import React, { useState } from 'react';
import ChatItem from './ChatItem';
import CommunicationAPI from './CommunicationAPI';

function Sidebar({ chats, onChatSelect,setChats }) {
  const [newChatName, setNewChatName] = useState('');
  const [newChatParticipants, setNewChatParticipants] = useState('');
  const [isAddingChat, setIsAddingChat] = useState(false);

  const handleAddChatClick = () => {
    setIsAddingChat(true);
  };

  const handleCreateChat = async () => {
    if (newChatName.trim() !== '' && newChatParticipants.trim() !== '') {
      try {
        const participantsArray = newChatParticipants.split(',').map((id) => id.trim());
        // Llama a la función de la API para crear un nuevo chat con lista de participantes
        await CommunicationAPI.createChat(newChatName, participantsArray);
        
        // Recarga la lista de chats después de crear uno nuevo
        const updatedChats = await CommunicationAPI.getChats();
        setChats(updatedChats);
  
        setIsAddingChat(false);
        setNewChatName('');
        setNewChatParticipants('');
      } catch (error) {
        console.error('Error al crear el chat:', error);
      }
    }
  };

  return (
    <div className="sidebar">
      <h2>Chats</h2>
      {isAddingChat ? (
        <>
          <input
            type="text"
            placeholder="Nombre del nuevo chat"
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lista de participantes (IDs separados por comas)"
            value={newChatParticipants}
            onChange={(e) => setNewChatParticipants(e.target.value)}
          />
          <button onClick={handleCreateChat}>Crear</button>
        </>
      ) : (
        <i className="bi bi-plus-circle" onClick={handleAddChatClick}></i>
      )}
      {chats.map((chat) => (
        <ChatItem key={chat.name} chat={chat} onClick={() => onChatSelect(chat)} />
      ))}
    </div>
  );
}

export default Sidebar;
