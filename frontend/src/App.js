import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    try {
      const response = await fetch('http://localhost:8000/message');
      const data = await response.json();
      setMessage(data.msg);
    } catch (error) {
      console.error('Error fetching from backend:', error);
      setMessage('Failed to connect to backend');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message || "Click the button to contact backend."}</p>
          <button onClick={getMessage}>Get Message from Backend</button>
        </header>
      </div>
  );
}

export default App;