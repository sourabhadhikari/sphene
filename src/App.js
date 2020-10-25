import React from 'react';
import Footer from './CommonComponents/Footer/Footer'
import './App.css';
import NavBar from './CommonComponents/NavigationBar/Navigation'
import Home from './Pages/Home/Home'
import {Route} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Header from './CommonComponents/Header/Header'
import ContentRight from './Pages/Home/ViewPage/Content_Right/Right'
import ContentLeft from './Pages/Home/ViewPage/Content_Left/left'
import ContentBottom from './Pages/Home/ViewPage/Content_Bottom/bottom'
import ContentCreative from './Pages/Home/ViewPage/Creative/Creative'
import SinglePageProject from './Pages/Home/ViewPage/SinglePageProject/Single'
import Login from './Login/Login'
function App() {
  return (
    <div>
      
      <Login/>
    
    </div>

  );
}

export default App;
