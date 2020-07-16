import React from 'react';
import logo from './logo.svg';
import Sortouch from './plugin-react/chatbotArea/ChatBotArea'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Sortouch app React exemple
      </header>
      
      <Sortouch userId={139} modelId={140}/>
    </div>
  );
}

export default App;
