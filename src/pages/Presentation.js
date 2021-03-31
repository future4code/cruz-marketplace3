import React from 'react'
import styled from 'styled-components'
import {Theme} from '../Theme'

import image from '../img/networking1.png'

const Header = styled.header`
  background: rgb(47,67,104);
  background: linear-gradient(351deg, rgba(47,67,104,0.9444854599170471) 11%, rgba(44,71,150,0.8538113026136763) 51%, rgba(84,7,174,0.9931371453103055) 82%), url(${props => props.urlImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 99.24vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
      margin: 0;
      color: white;
      font-size: 2.8em;
      letter-spacing: 2px;
      text-transform: uppercase;
  }
`

const Main = styled.main`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100vh;
padding: 10px 0;
font-family: 'Arial';
`

const TextPresentation = styled.section`
display:flex;
flex-direction: column;
align-items: center;
h3 {
  font-size: 3em;
  color: #3E0C79;
  text-transform: uppercase;
  letter-spacing: 2px;
}
p{
  max-width: 70%;
  word-wrap: wrap;
  font-size: 1.5em;
  text-align: justify;
}
`

const ButtonsContainer = styled.section`
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ButtonWorkers = styled.button`
background-color: #000000;
color: #F5F3FC;
height: 5em;
width: 30%;
border: 1px double #F5F3FC;
border-radius: 50px 0;
cursor: pointer;
font-size: 1.5em;
`

const ButtonHirer = styled.button`
background-color: #3E0C79;
color: #F5F3FC;
height: 5em;
width: 30%;
border: 1px double #F5F3FC;
border-radius: 50px 0;
cursor: pointer;
font-size: 1.5em;
`

export default class Presentation extends React.Component {
  
  handlePageConsumer = () => {
    this.props.changePage('Consumer')
  }
  
  handlePageProvider = () => {
    this.props.changePage('Provider')
  }

  render() {
    return (
      /* <ThemeProvider there={Theme}> */
      <div>
        <Header urlImg={image} >
          <h1>Pronto para contratar profissionais Ninjas?</h1>
        </Header>
        <Main>
          <TextPresentation>
            <h3>Somos a FutureNinja</h3>
            <p>Nossa missão: tornar a conexão entre contratantes e prestadores de serviço mais ágil e eficiente. Nossa visão: tornarmo-nos a maior plataforma de conexões profissionais do país! Caso você tenha um trabalho que precisa ser realizado, aqui poderá encontrar os melhores profissionais, verdadeiros ninjas de seus ramos! Caso você esteja buscando atuar como prestador de serviços, aqui encontrará as oportunidades perfeitas para demonstrar suas habilidades (e ter ótimos retornos)! Venha, mostre seu potencial, amplie seu networking e faça parte dessa rede brasileira de ninjas!</p>
          </TextPresentation>
          <ButtonsContainer>
            <ButtonWorkers onClick={this.handlePageProvider}>Sou prestador de serviços</ButtonWorkers>
            <ButtonHirer onClick={this.handlePageConsumer}>Sou contratante</ButtonHirer>
          </ButtonsContainer>
        </Main>
        </div>
      /* </ThemeProvider> */
    )
  }
}
