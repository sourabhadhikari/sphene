import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import * as styles from './styles'
export default class Card extends Component {
    render() {
        return (
            <styles.CardBody>
					<styles.CardContent>
						<styles.CardElement>
							<styles.Icon>
								<FontAwesomeIcon  icon = {this.props.iconName}></FontAwesomeIcon>
							</styles.Icon>
							<h4>{this.props.heading} </h4>
							<p>{this.props.description}</p>
						</styles.CardElement>
					</styles.CardContent>
				</styles.CardBody>
        )
    }
}
