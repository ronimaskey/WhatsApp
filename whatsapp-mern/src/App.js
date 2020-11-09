
import React, { useEffect, useState } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('06c7453f5b7b1e8b9271', {
      cluster: 'eu'
    });

    const  channel = pusher.subscribe('messages');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });

  }, []);

  console.log(messages);
  
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}
export default App;
