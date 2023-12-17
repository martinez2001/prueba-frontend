import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';
import CommunicationAPI from './CommunicationAPI';
function App() {

  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedChatMessages, setSelectedChatMessages] = useState(null);
  
  const handleChatSelect = async (chat) => {
    console.log("Chat selected:", chat._id);
    setSelectedChat(chat);
  
    try {
      const response = await CommunicationAPI.getMessages(chat._id);
      // Extrae solo la propiedad 'messages' del objeto de respuesta
      const { messages } = response;
      setSelectedChatMessages(messages);
    } catch (error) {
      console.error("Could not fetch messages:", error);
      setSelectedChatMessages([]);
    }
  };

  const handleSendMessage = async (text) => {
    try {
      // Llama a la función de la API para enviar el mensaje
      const newMessage = await CommunicationAPI.sendMessage(selectedChat._id, text);
  
      // Actualiza el estado de los mensajes en el componente padre
      setSelectedChatMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  const [chats, setChats] = useState([]);

  useEffect(()=>{
    async function fetchChats(){
      try{
        const chats = await CommunicationAPI.getChats();
        console.log(chats);
        setChats(chats);
      }catch(error){
        setChats("Could not contact with server");
      }
      
    }

    fetchChats();
  }
  , []);

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar con clase col-md-4 para ocupar 1/3 de la pantalla horizontal */}
        <div className="col-md-4">
          <Sidebar chats={chats} onChatSelect={handleChatSelect}/>
        </div>

        {/* Contenido principal con clase col-md-8 para ocupar 2/3 de la pantalla horizontal */}
        <div className="col-md-8">
          {selectedChat && <ChatContainer chat={selectedChat} messages={selectedChatMessages} onSendMessage={handleSendMessage}/>}        </div>
      </div>
    </div>
  );
}

export default App;
