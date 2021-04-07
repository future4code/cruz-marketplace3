import React from 'react'
import styled from 'styled-components'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Form from '../components/Form'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const Content = styled.div`
margin: 2% 0;
`

export default class Provider extends React.Component {


	render() {
		return (
			<MainContainer>
				<Header toHome={this.props.toHome} />
				<Content><Form /></Content>
				<Footer />
			</MainContainer>
		)
	}
}
