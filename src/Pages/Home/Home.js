import React from 'react'
import {Link} from 'react-router-dom';
import CarouselTop from './HomeComponents/Carousel/CarouselTop'
import Services from './HomeComponents/Services/Services'
import Project from './HomeComponents/Project/Project'
import Phase from './HomeComponents/Phases/phases'
import Creative from './HomeComponents/Creative/Creative'
import CarouselBottom from './HomeComponents/Carousel/CarouselBottom'
const Home = () =>{
    return(
        <div>
            <CarouselTop />
            <Services />
            <Project />
            <Phase />
            <Creative />
            <CarouselBottom />
        </div>
    )
}

export default Home;