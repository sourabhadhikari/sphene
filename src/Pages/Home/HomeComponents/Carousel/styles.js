import styled from "styled-components";

export const div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  /* margin: 15px; */
  font-size: 4em;
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  margin: 15px;
  font-size: 4em;
`;
export const Container = styled.div`
  padding-left:100px;
  padding-right:100px;
  padding-bottom:60px;
`
export const ContainerHead = styled.h3`
  text-align:center;
    font-size:50px;
    font-weight:500;
    padding-top:40px;
    color:black;
    padding-bottom:40px;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    

`
export const Buttonleft = styled.button`
  height:120px;
  font-size:30px;
  padding:20px;
  visibility:hidden;
  /* padding-left:40px;
  padding-right:40px; */
  top:41%;
  border:none;
  z-index:200;
  margin-left:10px;
  
  position: absolute;
  /* top:50%; */
  &:hover{
    background-color:#4CAF50;
    color:white;
  }
`
export const ButtonRight = styled.button`
  height:120px;
  font-size:30px;
  padding:20px;
  
  border:none;
  z-index:200;
  position: absolute;
  margin-right:10px;
  visibility:hidden;
  /* margin-left:-80px; */
  top:41%;
  right:0%;
  &:hover{
    background-color:#4CAF50;
    color:white;
  }
`
export const Dynamictext = styled.span `
  color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
`
export const CarouselContainer = styled.div`
  /* display:flex; */
  /* align-items:row; */
  margin:0;
  padding:0;
  position:relative;
  height:800px;
  
  &:hover ${ButtonRight}{
    visibility:visible;
  }
  &:hover ${Buttonleft}{
    visibility:visible;
  }
`

export const title = styled.div `
  
  font-weight:600;
  text-align:left;
  @media (max-width:900px){
    font-size:40px;
    
  }
  @media (max-width:480px){
        font-size:30px;
        transform:translate(-35px,0);
    }

`

export const text = styled.p `
  width:40%;
  font-size:26px;


  font-weight:500;
  line-height:50px;
  @media (max-width:900px){
    line-height:30px;
  }
  @media (max-width:480px){
        width:90%;
        font-size:18px;
        transform:translate(-35px,0);
    }
  
`
export const textwrap = styled.div `
  position:absolute;
  padding-left:90px;
  
`
export const button = styled.button `
    width:250px;
    height:80px;
    border-radius:40px;
    font-size:20px;
    color:white;
    border-color:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    font-weight:bold;
    background:${localStorage.getItem('Theme')?localStorage.getItem('Theme'):'#4fb77a'};
    &:hover{
        color:black;
        background:white;
        cursor: pointer;
    }
    @media (max-width:480px){
       transform:translate(-35px,0);
    }
    `
export const phone = styled.img `
  position:absolute;
  right:120px;
  @media (max-width:1400px){
    display:none;
  }
`