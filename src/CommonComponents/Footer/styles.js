import styled from 'styled-components';

export const footer = styled.div`
    display:flex;
    
    
    width:100%;
    background:#202020;
    
    padding-bottom:50px;
    bottom:0px;
    
    
    align-items:center;
    justify-content:center;
    
    @media (max-width:768px){
        display:block;
        padding-top:50px;
        /* margin-top:100px; */
    }
    @media (min-width:769px) and (max-width:1200px){
            flex-wrap:wrap;
            justify-content:flex-start;
            /* margin-top:100px; */
    }
    
`
export const footer_elements= styled.div`
    margin: 100px 20px;
    /* height:275px; */

    /* &:last-child{
        padding-right:13%;
    } */
    @media (max-width:768px){
        margin: 30px 20px;
    }
    

    
`
export const footer_heading=styled.div`
    color:white;
    margin-bottom:30px;
    
    
`
export const p = styled.p`
    
    color:white;
    width:95%;
    max-width:540px;
    @media (max-width:768px){
        width:95%;

    }
    
    
`
export const links = styled.div `
    display:flex;
    @media (max-width:768px){
        display:block;
        
    }

`
export const linkCol = styled.div `
    display:flex;
    flex-direction:column;
    
    margin-left:0;
    margin-right:100px;

`
export const anchor = styled.a `
    color:white;
    display:block;
    margin-bottom:15px;
    text-decoration:none;
`
export const contact_details = styled.div `
`

export const span = styled.span `
    color:white;
    color:#a0a0a0;
`
export const span1 = styled.span `
    color:white;
    display:inline-block;
    
`
export const wrap = styled.div `
    display:flex;
    align-items:center;
    margin-bottom:15px;
    margin-top:15px;
    
    
`
export const wrap1 = styled.div `
    display:flex;
    align-items:center;
    /* margin-bottom:15px;
    margin-top:15px; */
    
    
`
export const facebook_link = styled.a `
    
    font-size:14px;
    font-weight:bold;
    text-decoration:none;
    color:white;
    
`
export const facebook = styled.div `
    width:240px;
    height:47px;
    background:#4a6d9d;
    border-radius:40px;
    color:white;
    padding-left:25px;
    padding-top:15px;

    &:hover{
        background:white;
        color:#333333;
        cursor: pointer;
    }
    &:hover ${facebook_link} {
        color:#333333;
    }
    
`
export const line = styled.div `
    height:22px;
    background-color:white;
    width:80%;
`
