import React from 'react';
import logo from './logo.svg';
import Sortouch from 'sortouch-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Sortouch app React exemple
      </header>
      
      <Sortouch userId={21} modelId={11}/>
    </div>
  );
}

export default App;
