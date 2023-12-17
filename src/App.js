import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';
import CommunicationAPI from './CommunicationAPI';
function App() {

  const [selectedChat, setSelectedChat] = useState(null);
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const [chats, setChats] = useState([]);

  useEffect(()=>{
    async function fetchChats(){
      try{
        const chats = await CommunicationAPI.getChats();
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
          {selectedChat && <ChatContainer chat={selectedChat} />}        </div>
      </div>
    </div>
  );
}

export default App;
