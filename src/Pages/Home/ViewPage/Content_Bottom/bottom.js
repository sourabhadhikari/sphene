import React from 'react'
import * as styles from './styles'
import image1 from '../../../../Assets/Images/single-project-03a.jpg'
import image2 from '../../../../Assets/Images/single-project-03b.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {data_bottom,data_common} from '../data'
const bottom = () => {


    return(
        <div>
            <styles.slider>
                <styles.slide>
                    <styles.arrow><Link to="/Home/creative-ContentLeft" style={{textDecoration:'none', color:'#333333'}}><FontAwesomeIcon  icon={faChevronLeft} size='3x'/></Link> </styles.arrow>
                    <styles.title>{data_bottom.title}</styles.title>
                    <styles.arrow><Link to="/Home/creative-SinglePageProject" style={{textDecoration:'none', color:'#333333'}}><FontAwesomeIcon  icon={faChevronRight} size='3x'/></Link></styles.arrow>
                </styles.slide>
            </styles.slider>
            <styles.container>

                {/* <styles.images>
                    
                    <styles.img src={a}/>
                    
                    
                    <button onClick={change} ></button>
                </styles.images> */}
                <Carousel>
                    <div>
                        <img src={image1} />
                        
                    </div>
                    <div>
                        <img src={image2} />
                        
                    </div>
                    
                </Carousel>
                <styles.content>
                    <styles.content1>

                        <styles.heading>{data_bottom.heading}</styles.heading>
                        <styles.text>{data_common.text1}</styles.text>
                        <styles.text>{data_common.text2}</styles.text>
                        
                    </styles.content1>
                    <styles.content2>
                        <styles.data>
                            <styles.data_field>Date: </styles.data_field>
                            <styles.data_value>{data_common.date}</styles.data_value>
                            <styles.line></styles.line>
                        </styles.data>
                        <styles.data>
                            <styles.data_field>Location: </styles.data_field>
                            <styles.data_value>{data_common.location}</styles.data_value>
                            <styles.line></styles.line>
                        </styles.data>
                        <styles.data>
                            
                            <styles.data_field>Category: </styles.data_field>
                            <styles.data_value>{data_common.category}</styles.data_value>
                        </styles.data>
                        <styles.button>LAUNCH PROJECT</styles.button>
                    </styles.content2>
                </styles.content>
                
               
                
            </styles.container>
            
        </div>
    )
}

export default bottom;