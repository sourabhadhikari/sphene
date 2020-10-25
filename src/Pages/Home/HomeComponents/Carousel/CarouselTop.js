import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import image1 from '../../../../Assets/Images/slide-01.jpg'
import image2 from '../../../../Assets/Images/slide-03.jpg'
import * as styles from './styles'

import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

class CarouselTop extends Component {
  state = {
    items: [
      {id: 1, url: image1},
      {id: 2, url: image2}
      
    ]
  }
  
  render () {
    const { items } = this.state;
    return (
      <styles.CarouselContainer>
          <styles.Buttonleft onClick={() => this.carousel.slidePrev()}><FontAwesomeIcon  icon={faAngleLeft} size='2x'/></styles.Buttonleft>
          <Carousel className="carousel-style" styles={{margin:'0',padding:'0',position:'relative'}}ref={ref => (this.carousel = ref)} className="topCarousel" enableAutoPlay = {true} showArrows={false}>
            {items.map(item => <styles.div key={item.id}><img src={item.url} style={{height:'800px', width:'100%'}}></img></styles.div>)}
          </Carousel>
          <styles.ButtonRight onClick={() => this.carousel.slideNext()}><FontAwesomeIcon  icon={faAngleRight} size='2x'/></styles.ButtonRight>
      </styles.CarouselContainer>
    )
  }
}

export default CarouselTop;