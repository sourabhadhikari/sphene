import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';

import image1 from '../../../../Assets/Images/single-project-01.jpg'
import image2 from '../../../../Assets/Images/single-project-01a.jpg'
import image3 from '../../../../Assets/Images/single-project-01b.jpg'
import {Container, ContainerHead, Item, StyledDiv} from './styles'

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5},
  ];
export default class BottomCarousel extends Component {

    
    state = {
        items: [
          {id: 1, url: image1},
          {id: 2, url: image2},
          {id: 3,url :image3},
         
        ]
      }
      
    render() {
        const { items } = this.state;
        return (
            <div>
              <Container>
                <ContainerHead>Some Of Our Happy Clients, <span style={{color:'#44b272'}}>Join To Them!</span></ContainerHead>
                <Carousel breakPoints={breakPoints} showArrows={false}>
                    {items.map(item => <Item key={item.id}><img src={item.url}></img></Item>)}
                </Carousel>
                </Container>
            </div>
        )
    }
}