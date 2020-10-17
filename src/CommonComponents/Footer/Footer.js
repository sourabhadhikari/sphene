import React from 'react'
import styled from 'styled-components';
import * as stl from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
const footer =()=>{
    return(
        <stl.footer>
            <stl.footer_elements>
                <stl.footer_heading>
                    ABOUT
                </stl.footer_heading>
                <stl.p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
                </stl.p>
                <stl.facebook>
                    <stl.wrap1>
                        <FontAwesomeIcon icon={faFacebookSquare} size='2x' />  
                        <stl.facebook_link href="#">&nbsp; &nbsp;LIKE US ON FACEBOOK</stl.facebook_link>
                    </stl.wrap1>
                </stl.facebook>
            </stl.footer_elements>
            <stl.footer_elements>
                <stl.footer_heading>
                    HELPFUL LINKS
                </stl.footer_heading>
                <stl.links>
                    <stl.linkCol>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;About Us</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Press Releases</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Careers</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Projects</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Services</stl.anchor>

                    </stl.linkCol>
                    <stl.linkCol>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;In the news</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Our Blog</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Testimonials</stl.anchor>
                        <stl.anchor href="#"><FontAwesomeIcon icon={faAngleRight}/>&nbsp; &nbsp;Contact</stl.anchor>
                    </stl.linkCol>

                </stl.links>

            </stl.footer_elements>
            <stl.footer_elements>
                <stl.footer_heading>
                    CONTACT US
                </stl.footer_heading>
                <stl.contact_details>
                    <stl.span1>12345 Little Lonsdale St, Melbourne</stl.span1>
                    <stl.wrap><stl.span>Phone:&nbsp;</stl.span><stl.span1>(123) 123-456</stl.span1></stl.wrap>
                    <stl.wrap><stl.span>Fax:&nbsp;</stl.span><stl.span1>(123) 123-456</stl.span1></stl.wrap>
                    <stl.wrap><stl.span>Email:&nbsp;</stl.span><stl.span1>office@example.com</stl.span1></stl.wrap>

                </stl.contact_details>
            </stl.footer_elements>
            

        </stl.footer>
    )
}

export default footer;