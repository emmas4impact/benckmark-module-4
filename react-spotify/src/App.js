import React from 'react';
import HomePage from './component/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './component/SideBar/SideBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
     <HomePage />
     
    </div>
  );
}

export default App;
