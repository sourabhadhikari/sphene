import React from 'react'
import * as styles from './styles'
import carousel from './carouel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {data_creative,data_common} from '../data'
const Creative = () => {


    return(
        <div>
            <styles.slider>
                <styles.slide>
                    <styles.arrow><Link to="/Home/creative-SinglePageProject" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronLeft} size='3x'/></Link> </styles.arrow>
                    <styles.title>{data_creative.title}</styles.title>
                    <styles.arrow><Link to="/Home/creative-ContentRight" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronRight} size='3x'/></Link></styles.arrow>
                </styles.slide>
            </styles.slider>
            <styles.container>

               
                <styles.content>
                    <styles.content1>

                        <styles.heading>{data_creative.heading}</styles.heading>
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
                <carousel></carousel>
               
                
            </styles.container>
            
        </div>
    )
}

export default Creative;