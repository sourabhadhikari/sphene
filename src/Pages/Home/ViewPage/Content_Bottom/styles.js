import styled from 'styled-components'


export const container = styled.div `
    padding:30px;
   
    /* @media (min-width:1000px){
        display:flex;
        justify-content:space-around;
        padding-left:13%;
        padding-right:13%;
    } */
`
export const slider = styled.div `
    height:300px;
    background-color:#f6f6f6;
    background-position:top;
    background-repeat:no-repeat;
    background-size:cover;
    /* filter:brightness(50%) */
    
`
export const slide = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:auto;
    margin-bottom:auto;
    padding-top:120px;
`
export const arrow = styled.div `
  
`
export const title = styled.div `
    font-size:50px;
    color:#333333;
    font-weight:bold;
    margin:0 15%;
  `
export const images = styled.img `
    max-height:800px;
    max-width:1200px;
`




export const content = styled.div `
    @media (min-width:1000px){
        display:flex;
        justify-content:center;
    }

`
export const content1 = styled.div `
    @media (min-width:1000px){
        width:45%;
        min-width:550px;
        
    }

`
export const content2 = styled.div `
    margin-top:80px;
    @media (min-width:1000px){
        width:20%;
        min-width:300px;
        margin-top:100px;
        
    }

`
export const data = styled.div `
    margin:20px;

`

export const heading = styled.p `
    margin:40px 20px;
    font-size:26px;
    font-weight:bold;

`
export const text = styled.p `
     margin:20px;
    font-size:18px;
    line-height:35px;
    

`
export const data_field = styled.span `
   color:#9e9e9e;
    font-size:19px;


`
export const data_value = styled.span `
    
    font-size:19px;

`
export const button = styled.button `
    display:block;
    width:96%;
    height:60px;
    border-radius:30px;
    font-size:16px;
    color:#44b272;
    border-color:#44b272;
    font-weight:bold;
    background:white;
    margin-left:auto;
    margin-right:auto;
    &:hover{
        color:white;
        background:#44b272;
        cursor: pointer;
    }
`

export const line = styled.div `
    height:1px;
    width:100%;
    background:#e8e8e8;
    margin-top:15px;
    margin-bottom:15px;

`