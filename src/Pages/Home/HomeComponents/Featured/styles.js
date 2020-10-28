import styled from 'styled-components'

export const title = styled.p `
    text-align:center;
    font-size:50px;
    font-weight:500;
    margin-top:150px;
    

`
export const div = styled.div `
width:100%;
    @media (min-width:1500px){
        display:flex;
        
    }
`


export const icon = styled.div `
    font-size:130px;
    width:40%;
    padding-top:30px;
    text-align:center;
    color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    padding-left:10px;
    
`
export const text = styled.div `
    width:70%;
    
    margin-top:20px;
    font-family:lato;
    font-size:24px;
    line-height:40px;
    
`
export const service = styled.div `
    font-size:24px;
    font-weight:500;
    color:black;
`
export const outerwrap = styled.div `
    display:flex;
    align-items:center;
    color:#898989;
`
export const innerwrap = styled.div `
    margin-left:10px;
`
export const cards = styled.div `
    /* height:250px; */
    margin:30px;
    background:#f5f5f5;
    min-width:400px;
    padding-top:80px;
    padding-bottom:50px;
    @media (min-width:1500px){
        width:30%;
        height:220px;
    }
    &:hover{
        background-color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    }
    &:hover ${icon}{
        color:white;
    } 
    &:hover ${text}{
        color:white;
    } 
    &:hover ${service}{
        color:white;
    } 
`