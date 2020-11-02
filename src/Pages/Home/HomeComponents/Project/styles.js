import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    width: 100%;
        &:hover .image{
            opacity:0.3;
        
 }   
 &:hover .middle{
            opacity:1;
}
`

export const title = styled.p `
    text-align:center;
    font-size:50px;
    font-weight:500;
    padding-top:120px;
    color:black;
    margin-bottom:80px;
`
export const InactiveCard = styled(Card)`
    opacity:0.3;
    &:hover .middle{
            opacity:0;
}
`
export const Image = styled.img`
    opacity: 1;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
`
export const Middle= styled.div`
transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`
export const Text = styled.div`
    color: black;
    font-size: 16px;
    padding: 16px 32px;
  
`
export const button = styled.button `
    
    border-radius:15px;
    border:none;
    height:30px;
    color:black;
    width:120px;
    margin-bottom:60px;
    font-weight:600;
    &:hover{
        background:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
        cursor: pointer;
        color:white;
    }
    &:focus{
    background: ${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    color: white;
    border:none;
    outline:none;
}
    
`
export const search = styled.input `
    
    display:block;
    width:29%;
    margin:auto;
    height:40px;
    /* margin-top:30px; */
    font-size:20px;
    margin-bottom:20px;
    padding-left:20px;
    &::placeholder{
        font-size:20px;
        
    }
`
export const allProducts = styled.button `
    width:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    height:60px;
    margin-top:30px;
    margin-left:auto;
    margin-right:auto;
    border-radius:30px;
    font-size:18px;
    color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    border-color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    font-weight:bold;
    background:white;
    &:hover{
        color:white;
        background:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
        cursor: pointer;
    }
    `
