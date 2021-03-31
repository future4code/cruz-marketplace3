import React from 'react'
import styled from 'styled-components'

import { Theme } from '../Theme'

const Button = styled.button`
	background-color: ${props => props.color};
`

export default class Provider extends React.Component {

    // função que altera o estado do app
    
	render() {
		return (
			<div>
				<Button color={Theme.palette.primary.main}>Button com backgroun</Button>
				<h1>Hello Provider</h1>
			</div>
		)
	}
}
