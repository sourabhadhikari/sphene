import styled from 'styled-components'
import loginImg from '../Assets/Images/login.jpg'


export const container = styled.div `
    @media (min-width:1200px){
        display:flex;
    }
`
export const Login = styled.div `
    @media (min-width:1200px){
        width:40%;
    }
`
export const loginImage = styled.div `
    display:none;
    @media (min-width:1200px){
        display:block;
        width:60%;
        height:100vh;
        background:url(${loginImg});
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;

    }
`
export const heading = styled.p `
    text-align:center;
    font-size:50px;
    font-weight:500;
`
export const success = styled.p `
    text-align:center;
    font-size:20px;
    color:green;
    font-weight:500;
`
export const logo = styled.img `
    display:block;
    margin:auto;
    /* margin:auto;
    margin-top:60px; */
`
export const label = styled.p`
    margin-bottom:0;
    color:black;
    font-size:22px;

    
`
export const input = styled.input `
    
    display:block;
    width:59%;
    margin:auto;
    height:60px;
    margin-top:30px;
    font-size:20px;
    padding-left:20px;
    &::placeholder{
        font-size:20px;
        
    }
`
export const button = styled.button `
    display:block;
    width:60%;
    margin:auto;
    height:70px;
    margin-top:40px;
    border-radius:15px;
    background:white;
    border-color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    color:${localStorage.getItem('Theme')};
    font-size:26px;
    
    cursor: pointer;
    &:hover{
        background:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
        color:white;
    }
`
export const login_container = styled.div `
        /* background-image:url(${loginImg}); */
        
        width:100%;
        margin:auto;
        
        padding-top:30px;
        padding-bottom:40px;
        /* padding-left:60px;
        padding-right:60px; */

        
        
`
export const change = styled.span `
    display:inline-block;
    margin-left:5px;
    cursor: pointer;
    color:red;
    font-size:18px;
    
    
`
export const span = styled.span `
    display:inline-block;
    
    margin-left:auto;
    font-size:18px;
    
`
export const cont = styled.p `
    
    
    margin-top:30px;
    margin-left:42%; 
    @media (min-width:1200px){
       margin-left:37%;
    }
    
`
export const bottom = styled.div `
    width:100px;
    margin:0 auto;
    margin-top:35px;
    
    
`
export const header = styled.div `
    background:#f9f9f9;
    padding-top:60px;
    padding-bottom:60px;

`
export const p = styled.p `
    color:red;
    width:59%;
    margin-left:auto;
    margin-right:auto;
`