import React from 'react';
import HomePage from './component/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './component/SideBar/SideBar';
import FooterPage  from './component/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
     <Sidebar />
     <HomePage />
     <FooterPage />
     
    </div>
  );
}

export default App;
