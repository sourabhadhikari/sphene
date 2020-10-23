import React from 'react'
import * as styles from './styles'
import carousel from './carouel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
const Creative = () => {


    return(
        <div>
            <styles.slider>
                <styles.slide>
                    <styles.arrow><Link to="/Home/creative-SinglePageProject" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronLeft} size='3x'/></Link> </styles.arrow>
                    <styles.title>Single Project - Content Creative</styles.title>
                    <styles.arrow><Link to="/Home/creative-ContentRight" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronRight} size='3x'/></Link></styles.arrow>
                </styles.slide>
            </styles.slider>
            <styles.container>

               
                <styles.content>
                    <styles.content1>

                        <styles.heading>Overview</styles.heading>
                        <styles.text>Nulla congue magna varius pellentesque.Entesque habitant morbi tristique senectus lorem et netus et malesuada fames ac turpis egestas.</styles.text>
                        <styles.text>Vestibulum quis ipsum ipsum. Maecenas ullamcorper nibh sed justo iaculis lacinia. Nam eu arcu facilisis, condimentum urna et, tempor erat.</styles.text>
                        
                    </styles.content1>
                    <styles.content2>
                        <styles.data>
                            <styles.data_field>Date: </styles.data_field>
                            <styles.data_value>11 January 2016</styles.data_value>
                            <styles.line></styles.line>
                        </styles.data>
                        <styles.data>
                            <styles.data_field>Location: </styles.data_field>
                            <styles.data_value>London</styles.data_value>
                            <styles.line></styles.line>
                        </styles.data>
                        <styles.data>
                            
                            <styles.data_field>Category: </styles.data_field>
                            <styles.data_value>Kitchen, Carpentry</styles.data_value>
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