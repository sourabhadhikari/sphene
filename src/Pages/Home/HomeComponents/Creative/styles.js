import styled from 'styled-components'

export const content = styled.div `
    width:100%;
    padding-bottom:60px;
    
    background-color:#f8f8f8;
    @media (min-width:1280px) {
        width:50%;
        height:800px;
        padding-bottom:0px;
    }
`
export const container= styled.div `
    width:100%;
    @media (min-width:1280px) {
        display:flex;
        height:800px;
    }


`
export const text = styled.p `
    font-size:26px;
    color:#494949;
    padding:30px 20px 30px 20px;
    line-height:45px;
    @media (min-width:1280px) {
        padding:20px 80px 30px 80px;
        font-size:36px;
        
    }
    

`
export const heading = styled.p `
    font-size:40px;
    color:black;
    padding:80px 20px 30px 20px;
    font-weight:600;
    @media (min-width:1280px) {
        padding:80px 80px 30px 80px;
        font-size:55px;
        text-align:left;
    }
    
`
export const image = styled.img `
    width:100%;
    height:500px;
    @media (min-width:1280px) {
        width:50%;
        height:800px;
    }
`
export const button = styled.button `
    width:50%;
    margin-top:40px;
    height:70px;
    border-radius:30px;
    font-size:22px;
    font-weight:500;
    margin-left:20px;
    color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    border-color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    border-width:3px;
    background:white;
    @media (min-width:1280px) {
        width:30%;
        margin-left:80px;

    }
    &:hover{
        color:white;
        background:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
        cursor: pointer;
    }
`
