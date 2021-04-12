import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Collection} from "./components/Collection/Collection"

function App() {
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
        <Collection name="New Collection" tags={[{},]}></Collection>
      </header>
    </div>
  );
}

export default App;
