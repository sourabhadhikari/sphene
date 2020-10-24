import React, { Component } from 'react'
import Cards from './ProjectCard/cards'
import Card from './card'
import {Data} from './data'
import {Link} from 'react-router-dom';
import * as styles from './styles'
export default class Projects extends Component {

    constructor(props){
        super(props);
        this.state={
            type:"PEOPLE",
            all:true
         }
     this.handleClickPEOPLE = this.handleClickPEOPLE.bind(this)
     this.handleClickANIMALS = this.handleClickANIMALS.bind(this)    
     this.handleClickOTHERS = this.handleClickOTHERS.bind(this)   
     this.handleClick = this.handleClick.bind(this)     
    }
    handleClick(){
        this.setState(state=>({
            all:true
        })) 
    }
     handleClickPEOPLE(){
        
        this.setState(state=>({
            type : "PEOPLE",
            all:false
        }))   
    }
    handleClickANIMALS(){
       this.setState(state=>({
           type : "ANIMALS",
           all:false
       }))   
   }
   handleClickOTHERS(){

   this.setState(state=>({
       type : "OTHERS"
   }))   
}

    render() {
        return (
            <Cards>
                <Cards.Title style ={{paddingTop:"60px"}}>Our Latest Projects</Cards.Title>
                <Cards.Row style={{align:"center"}}>
                <Cards.Column ><styles.button  onClick={this.handleClick}>ALL</styles.button></Cards.Column>
                <Cards.Column ><styles.button onClick={this.handleClickPEOPLE}>PEOPLE</styles.button></Cards.Column>
                <Cards.Column ><styles.button onClick={this.handleClickANIMALS}>ANIMALS</styles.button></Cards.Column>
                <Cards.Column ><styles.button onClick={this.handleClickOTHERS}>OTHERS</styles.button></Cards.Column>
                </Cards.Row>
                <Cards.Row>
                {Data.map((item,index)=>{
                    
                        const images = require.context('../../../../Assets/Images/', true);
                        let img = images('./' + item.imageName);
                        console.log(this.state.type)
                        console.log(item.type)
                        
                        if(this.state.all||this.state.type===item.type)
                        return(
                            <Link to={item.link} >
                                <Cards.Column key={index}>
                                    <Card data={img} title = {item.title} subtitle = {item.subtitle} active = {1}/>
                                </Cards.Column>
                            </Link>
                        )
                        else
                        return(
                            <Link to={item.link} >
                                <Cards.Column key={index}>
                                    <Card data={img} title = {item.title} subtitle = {item.subtitle} active = {0}/>
                                </Cards.Column>
                            </Link>
                        )
                    
                        
                    })}
                    </Cards.Row>
            </Cards>
        )
    }
}