import React from 'react';
import { ReactDOM } from 'react';
//import logo from './logo.svg';
import Weather from "./Weather";
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Weather />
      </div>
    </div>
  );
}

export default App;
