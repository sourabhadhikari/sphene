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
import './index.css'
import theme from './CommonComponents/colorTheme/theme'
const FirstPage = ({handleLogout})=>{
    return (
        <div>
      
    <Header />
    <NavBar />
    {/* <theme></theme> */}
    <Route path="/" exact component={Home} />
    <Route path="/Contact" exact component={Contact} />
    <Route path="/Home/creative-ContentRight" exact component={ContentRight} />
    <Route path="/Home/creative-ContentLeft" exact component={ContentLeft} />
    <Route path="/Home/creative-ContentBottom" exact component={ContentBottom} />
    <Route path="/Home/creative-ContentCreative" exact component={ContentCreative} />
    <Route path="/Home/creative-SinglePageProject" exact component={SinglePageProject} />
    <Footer/>
    <button className="SignOut" onClick={handleLogout}>Sign Out</button>
    </div>
    )
}

export default FirstPage;