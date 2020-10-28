import React from 'react'
import Cards  from './PhaseCard/cards'
import Card from './card'
import {Data} from './data'
import * as styles from './style'
export default function Phases() {
    return (
        <Cards>
            <Cards.Wrapper>
            <styles.title>Phases Of Project Management</styles.title>
            <Cards.Row>
                {Data.map((item,index)=>{
                        return(
                            <Cards.Column key={index}>
                                <Card iconName = {item.iconName} heading = {item.heading} description = {item.description} />
                            </Cards.Column>
                        )
                    })}
            </Cards.Row>
            </Cards.Wrapper>
        </Cards>
    )
}