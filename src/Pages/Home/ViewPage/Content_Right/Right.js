import React from 'react'
import * as styles from './styles'
import image1 from '../../../../Assets/Images/single-project-01.jpg'
import image2 from '../../../../Assets/Images/single-project-01a.jpg'
import image3 from '../../../../Assets/Images/single-project-01b.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {data_right,data_common} from '../data'
const right = () => {
    
    return(
        <div>
            <styles.slider>
                <styles.slide>
                    <styles.arrow><Link to="/Home/creative-ContentCreative" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronLeft} size='3x'/></Link> </styles.arrow>
                    <styles.title>{data_right.title}</styles.title>
                    <styles.arrow><Link to="/Home/creative-ContentLeft" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronRight} size='3x'/></Link></styles.arrow>
                </styles.slide>
            </styles.slider>
            <styles.container>
                <styles.images>
                    
                    <styles.img src={image1}/>
                    <styles.img src={image2}/>
                    <styles.img src={image3}/>
                    
                </styles.images>
                <styles.content>
                    <styles.heading>{data_right.heading}</styles.heading>
                    <styles.text>{data_common.text1}</styles.text>
                    <styles.text>{data_common.text2}</styles.text>
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
                        <styles.line></styles.line>
                    </styles.data>
                    <styles.button>LAUNCH PROJECT</styles.button>
                </styles.content>
                
            </styles.container>
            
        </div>
    )
}

export default right;