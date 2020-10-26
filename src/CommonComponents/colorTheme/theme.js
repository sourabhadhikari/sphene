import React,{useState} from 'react'
import {Data} from './themeData'
import * as styles from './styles'
import './styles.css'
import {FiSettings} from "react-icons/fi";
const Theme = () => {
    const [show, setShow] = useState(false);
    
    const changeTheme = (ThemeColor) =>{
        // setToggle(!toggle);
        // console.log(toggle);

        localStorage.setItem('Theme', ThemeColor);
        window.location.reload();
        
    }
    const showColorTray = () => setShow(!show);
    return(
        <>
            <styles.container className={show? "Tray active": "Tray" }>
                <styles.colorTray>
                    {Data.map((tab)=>{
                        return(
                            <styles.colorTab onClick={()=>changeTheme(tab.color)} backgroundcolor={tab.color}></styles.colorTab>
                        )
                    })}
                </styles.colorTray>
                <styles.show onClick={showColorTray}><FiSettings /></styles.show>
            </styles.container>
        </>
    )
}

export default Theme;