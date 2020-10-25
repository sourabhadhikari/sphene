import React from 'react'
import {Link} from 'react-router-dom';
import CarouselTop from './HomeComponents/Carousel/CarouselTop'

import Project from './HomeComponents/Project/Project'
import Phase from './HomeComponents/Phases/phases'
import Creative from './HomeComponents/Creative/Creative'
import CarouselBottom from './HomeComponents/Carousel/CarouselBottom'
import Featured from './HomeComponents/Featured/Featured'
const Home = () =>{
    return(
        <div>
            <CarouselTop />
            
            <Featured />
            <Project />
            <Phase />
            <Creative />
            
            <CarouselBottom />
        </div>
    )
}

export default Home;