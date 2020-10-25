import React from 'react'
import * as styles from './styles'
import {Cards,Cards2} from './FeaturedData'

import styled from 'styled-components'
const Featured = () => {
    return(
            <>
                <styles.title>Featured Product</styles.title>
                <styles.div>
                    {Cards.map((card,index) =>{
                        return(
                            <>
                            <styles.cards>
                                <div key={index}>
                                        <styles.outerwrap>
                                            <styles.icon>{card.icon}</styles.icon>
                                            <styles.innerwrap>
                                            <styles.service>{card.Service}</styles.service>
                                            
                                            <styles.text>{card.text}</styles.text>
                                            </styles.innerwrap>
                                        </styles.outerwrap>
                                    
                                </div>
                            </styles.cards>
                            
                            </>
                        )
                    })}
                </styles.div>
                <styles.div>
                    {Cards2.map((card,index) =>{
                        return(
                            <>
                            <styles.cards>
                                <div key={index}>
                                        <styles.outerwrap>
                                            <styles.icon>{card.icon}</styles.icon>
                                            <styles.innerwrap>
                                            <styles.service>{card.Service}</styles.service>
                                            
                                            <styles.text>{card.text}</styles.text>
                                            </styles.innerwrap>
                                        </styles.outerwrap>
                                    
                                </div>
                            </styles.cards>
                            
                            </>
                        )
                    })}
                </styles.div>
            </>
    )
}
export default Featured;