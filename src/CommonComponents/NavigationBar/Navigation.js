import React ,{useState} from 'react'
import styled from 'styled-components'
import * as styles from './styles'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo-2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './navbar.css'
import {faSearch, faShoppingCart,faBars } from '@fortawesome/free-solid-svg-icons'
import {SidebarData} from './sidebardata'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons';

const NavBar  = () =>{
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);
   
    return(
        <div>
            <styles.navBar_container>
                <styles.logo src={logo} alt="logo"/>
                   
                <styles.nav_container>
                   
                    <styles.nav_tabs  ><Link to="/" style={{textDecoration:'none', color:'#373737'}}>HOME</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>PORTFOLIO</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>PAGES</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>ELEMENTS</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>SHOP</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>BLOG</Link></styles.nav_tabs>
                    <styles.nav_tabs ><Link to="/Contact" style={{textDecoration:'none', color:'#373737'}}>CONTACT</Link></styles.nav_tabs>

                </styles.nav_container>
                <styles.mobile_nav>
                    <styles.mobile_nav_menu >
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick ={showSideBar}/>
                        </Link>    
                    &nbsp; &nbsp;<styles.menu>MENU</styles.menu></styles.mobile_nav_menu>
                    <IconContext.Provider value={{color:'#fff'}}>
                        <nav className={sidebar? "nav-menu active": "nav-menu" }>
                            <ul className="nav-menu-items" >
                                <li className="navbar-toggle">
                                    <Link to="#" className="menu-bars">
                                        <AiIcons.AiOutlineClose onClick ={showSideBar} />
                                    </Link>
                                </li>
                                {SidebarData.map((item, index)=>{
                                    return(
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                <span>{item.icon}</span>
                                                <span>{item.title}</span>
                                            </Link>
                                            
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>
                    </IconContext.Provider>
                    
                    <styles.mobile_nav_search ><FontAwesomeIcon  icon={faSearch} size='2x'/></styles.mobile_nav_search>
                </styles.mobile_nav>

                <styles.icons>
                    <styles.icon><FontAwesomeIcon  icon={faSearch} size='lg'/></styles.icon>
                    <styles.icon><FontAwesomeIcon  icon={faShoppingCart} size='lg'/></styles.icon>
                </styles.icons>
            </styles.navBar_container>
            
            
        </div>

    )
}

export default NavBar;