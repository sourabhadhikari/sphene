import React from 'react'
import Cards  from './PhaseCard/cards'
import Card from './card'
import {Data} from './data'
export default function Phases() {
    return (
        <Cards>
            <Cards.Wrapper>
            <Cards.Title>Phases Of Project Management</Cards.Title>
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