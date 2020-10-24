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
  padding-bottom:40px;
  margin: 58px 0 48px 0;
    font-size: 28px;
    margin-bottom: 30px !important;
    margin-top: 70px !important;
    text-align: center;
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
  top:42%;
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
  top:42%;
  right:0%;
  &:hover{
    background-color:#4CAF50;
    color:white;
  }
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