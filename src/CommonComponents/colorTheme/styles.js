import styled from 'styled-components'

export const container = styled.div `
    position:fixed;
    z-index:635153165;
    top:80px;
    height:50px;
    display:flex;
    background-color:black;
`

export const colorTray = styled.div `

`
export const show = styled.span `
    color:white;
    font-size:30px;
    padding-top:10px;
    padding-right:10px;
    cursor: pointer;

`
export const colorTab = styled.button `
    height:25px;
    width:25px;
    margin:10px;
    background-color:${props => props.backgroundcolor};
`