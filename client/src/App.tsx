import React from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = 'http://localhost:3000/api';

function App() {
  const handleClick = () => {
    fetch(API_URL).then(async (req) => {
      const data = await req.json();
      console.info(data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Hello!</button>
      </header>
    </div>
  );
}

export default App;
