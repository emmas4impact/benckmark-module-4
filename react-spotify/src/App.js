import React from 'react';
import HomePage from './component/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './component/SideBar/SideBar';
import FooterPage  from './component/Footer/Footer';
import AlbumPage from './component/AlbumPage/AlbumPage';
import Artistpage from './component/ArtistPage/ArtistPage';
import './App.css';


function App() {
  return (
   
    <>
    <Router>
    <Sidebar />
    <Route path="/" exact component={HomePage} />
    <Route path="/artistPage:id" exact component={Artistpage} />
    <Route path="/album/:id" exact component={AlbumPage } />
    <FooterPage />
    </Router>
  
  </>
  );
}

export default App;
