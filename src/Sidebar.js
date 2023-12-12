import React from 'react';
import ChatItem from './ChatItem';

function Sidebar({ chats, onChatSelect }) {
    const handleAddChatClick = () => {
        // Agrega lógica para manejar el clic del botón Agregar Chat
        console.log('Clic en el botón Agregar Chat');
        // Implementa la lógica para agregar chats aquí
        //onAddChat(); // Puedes pasar una función desde App.js para manejar esto
    };

    
    return (
        <div className="sidebar">
        <h2>Chats</h2>
        <i class="bi bi-plus-circle"></i>
        {chats.map((chat) => (
            <ChatItem key={chat.name} chat={chat} onClick={() => onChatSelect(chat)}/>
        ))}
        </div>
     );
}

export default Sidebar;
