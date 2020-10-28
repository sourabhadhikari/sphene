import React from 'react'
import img from '../../../../Assets/Images/image-edge.jpg'
import * as styles from './styles'

const Creative = () =>{  
    return(
        <>
            <styles.container>
                <styles.content>
                    <styles.heading>The Heart of Creativity</styles.heading>
                    <styles.text>Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information after ethical communities.</styles.text>
                    <styles.button>PURCHASE NOW</styles.button>
                </styles.content>
                <styles.image src={img}/>
                
            </styles.container>
        </>
    )

}

export default Creative