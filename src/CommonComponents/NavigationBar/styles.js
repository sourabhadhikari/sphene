import styled from 'styled-components'

export const nav_container = styled.ul `
    display:flex;
    
    justify-content:flex-end;
    margin-left:auto;
    
    @media (max-width:1000px){
        display:none;
    }
    
    
`

export const nav_tabs = styled.li  `
    
    list-style:none;
    margin:0px 8px;
    padding-top:14px;
    height:49px;
    
    
    &:hover{
        border-bottom: 2px solid #44B272;
    }
`

export const a = styled.a `
    padding:5px;
    text-decoration:none;
    color:white;
`
export const navBar_container  = styled.div`
    display:flex;
    height:79px;
    box-shadow:2px 2px #f0f0f0;
    position:sticky;
    top:0px;
    @media (max-width:1000px){
        height:150px;
        display:block;
        position:sticky;
        top:0px;
    }
`

export const logo = styled.img`
    display:inline-block;
    padding-top:30px;
    height:20px;
    margin-left:12%;
    @media (max-width:1000px){
        display:block;
        margin-left:auto;
        margin-right:auto;
    }
    
`
export const icons = styled.div `
    display:flex;
    margin-left:0;
    margin-right:auto;
    margin-left:50px;
    @media (max-width:1000px){
        display:none;
    }
    
`
export const icon = styled.div `
    color:#373737;
    padding-top:26px;
    margin-right:10px;

`
export const mobile_nav = styled.div `
    display:none;

    @media (max-width:1000px){
        display:flex;
        width:95%;
        margin-left:auto;
        margin-right:auto;
        margin-top:20px;
        height:58px;
        
    }
`
export const mobile_nav_menu = styled.div `
    display:none;

    @media (max-width:1000px){
        display:block;
        width:93%;
        background-color:#44b272;
        padding-left:20px;
        padding-top:17px;
        color:white;
        font-weight:bold;
    }
`
export const mobile_nav_search = styled.div `
    display:none;

    @media (max-width:1000px){
        display:block;
        width:63px;
        background-color:#60be87;
        color:white;
        text-align:center;
        padding-top:12px;
    }
`