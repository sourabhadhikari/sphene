import React from 'react'
import Cards from '../cards/card/card'
import Card  from '../cards/Cards'
import {Data} from '../cards/CardData'
export default function FooterContainer() {
    return (
        <Cards>
            <Cards.Title>Featured Services</Cards.Title>
            <Cards.Wrapper>
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