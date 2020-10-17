import styled from 'styled-components'

export const info = styled.div `
    display:flex;
    
    
    margin-left:13%;

    @media (max-width:768px){
        flex-wrap:wrap;
    }
    
`
export const info_items = styled.p `
    margin:auto 15px;
    color:#a0a0a0;
    
`
export const icons = styled.div `
    display:flex;
    margin-left:auto;
    margin-right:15%;
`
export const facebook =  styled.div `
    
    padding:18px 22px;
    color:#a0a0a0;
    

    &:hover{

        background:${props=>props.back};
        background:#4a6d9d;
        color:white;
    }

`
export const pinterest =  styled.div `
    
    padding:18px 20px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#cc242a;
        color:white;
    }

`
export const twitter =  styled.div `
    
    padding:18px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#3bc1ed;
        color:white;
    }

`
export const dribble =  styled.div `
    
    padding:18px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#ef5a92;
        color:white;
    }

`
export const google =  styled.div `
    
    padding:18px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#d53925;
        color:white;
    }

`
export const header =  styled.div `
    display:flex;
    background: #f4f4f4;
    @media (max-width:768px){
        flex-wrap:wrap;
    }

`