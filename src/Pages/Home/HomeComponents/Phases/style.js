import styled from 'styled-components'

export const Card = styled.div`
    width:100%;
    height:100%;
    @media (max-width:380px){
        display:none;
    }
`
export const title = styled.p `
    text-align:center;
    font-size:50px;
    font-weight:500;
    
    color:black;
    margin-bottom:80px;
    @media (max-width:380px){
        display:none;
    }

`
export const Icon = styled.i`
    width: 100%;
    display: block;
    font-size: 100px;
    
    height: 125px;
    font-family: 'linearicons' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: ${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
`

export const IconBox = styled.div`
    text-align: center;
    margin-top: 45px;
`

export const IconHeader = styled.h3`
    margin: 4px 0;
    line-height: 26px;
    font-size: 21px;
`