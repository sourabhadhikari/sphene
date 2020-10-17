import React from 'react'
import styled from 'styled-components'
import * as styles from './styles'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo-2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faSearch, faShoppingCart,faBars } from '@fortawesome/free-solid-svg-icons'
const navBar  = () =>{
    return(
        <div>
            <styles.navBar_container>
                <styles.logo src={logo} alt="logo"/>
                   
                <styles.nav_container>
                   
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>HOME</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>PORTFOLIO</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>PAGES</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>ELEMENTS</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>SHOP</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/" style={{textDecoration:'none', color:'#373737'}}>BLOG</Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/Contact" style={{textDecoration:'none', color:'#373737'}}>CONTACT</Link></styles.nav_tabs>

                </styles.nav_container>
                <styles.mobile_nav>
                    <styles.mobile_nav_menu><FontAwesomeIcon  icon={faBars} size='lg'/>&nbsp; &nbsp;MENU</styles.mobile_nav_menu>
                    <styles.mobile_nav_search><FontAwesomeIcon  icon={faSearch} size='2x'/></styles.mobile_nav_search>
                </styles.mobile_nav>

                <styles.icons>
                    <styles.icon><FontAwesomeIcon  icon={faSearch} size='lg'/></styles.icon>
                    <styles.icon><FontAwesomeIcon  icon={faShoppingCart} size='lg'/></styles.icon>
                </styles.icons>
            </styles.navBar_container>
        </div>

    )
}

export default navBar;