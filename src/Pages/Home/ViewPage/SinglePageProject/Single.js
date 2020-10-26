import React from 'react'
import * as styles from './styles'
import image1 from '../../../../Assets/Images/single-project-01a.jpg'
import image2 from '../../../../Assets/Images/single-project-01b.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {data_common, data_single} from '../data'
import {faShip,faBoxOpen,faHandHoldingWater,faCloud} from '@fortawesome/free-solid-svg-icons'
const single = () => {
    return(
        <div>
            <styles.header>
                <styles.title>{data_single.title}</styles.title>
            </styles.header>
            <styles.content>
                    <styles.content1>

                        <styles.heading>Project Name</styles.heading>
                        <styles.text>{data_single.text1}</styles.text>
                        <styles.text>{data_single.text2}</styles.text>
                        
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
                       
                    </styles.content2>
                </styles.content>
                <styles.grid>
                    <styles.field1>
                        <styles.heading1>{data_single.motivate1}</styles.heading1>
                        <styles.heading1>{data_single.motivate2}</styles.heading1>
                        <styles.text1>{data_single.text3}</styles.text1>
                    </styles.field1>
                    <styles.field2 src={image1} />
                </styles.grid>
                <styles.grid1>
                    <styles.field3>
                        <styles.cellgrid>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faShip} size='4x'/></styles.icon>
                                <styles.heading2>{data_single.cell_heading1}</styles.heading2>
                                <styles.text2>{data_single.cell_text}</styles.text2>
                            </styles.cell>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faBoxOpen} size='4x'/></styles.icon>
                                <styles.heading2>{data_single.cell_heading2}</styles.heading2>
                                <styles.text2>{data_single.cell_text}</styles.text2>
                            </styles.cell>

                        </styles.cellgrid>
                        <styles.cellgrid>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faHandHoldingWater} size='4x'/></styles.icon>
                                <styles.heading2>{data_single.cell_heading3}</styles.heading2>
                                <styles.text2>{data_single.cell_text}</styles.text2>
                            </styles.cell>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faCloud} size='4x'/></styles.icon>
                                <styles.heading2>{data_single.cell_heading4}</styles.heading2>
                                <styles.text2>{data_single.cell_text}</styles.text2>
                            </styles.cell>

                        </styles.cellgrid>
                    </styles.field3>
                    <styles.field2 src={image2} />
                </styles.grid1>
        </div>
    )
}

export default single;

