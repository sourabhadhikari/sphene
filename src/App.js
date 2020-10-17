import React from 'react';
import Footer from './CommonComponents/Footer/Footer'
import './App.css';
import NavBar from './CommonComponents/NavigationBar/Navigation'
import Home from './Pages/Home/Home'
import {Route} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Header from './CommonComponents/Header/Header'
function App() {
  return (
    <div>
      
    <Header />
    <NavBar />
    
    <Route path="/" exact component={Home} />
    <Route path="/Contact" exact component={Contact} />
    <Footer/>
    </div>

  );
}

export default App;
