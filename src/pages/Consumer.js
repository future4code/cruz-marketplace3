import styled from 'styled-components'
import React from 'react'
import {Filters} from '../components/Filters'
import {Footer} from '../components/Footer'
import {Card} from '../components/Cards'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CardsBox = styled.div`
  Display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
` 

export default class App extends React.Component {
  state= {
    minimum: '',
    maximum: '',
    searchName:'',
    ordination:'',
  }

  // função que altera o estado do app

  onChageMinimum = (event) => {
    this.setState({minimum: event.target.value})
  }
  onChageMaximum = (event) => {
    this.setState({maximum: event.target.value})
  }
  onChageSearchName = (event) => {
    this.setState({searchName: event.target.value})
  }
  onChageOrdination = (event) => {
    this.setState({ordination: event.target.value})
  }
  
  render() {
  return (
    <div>
    <Container>
      <Filters
      minimum={this.state.minimum}
      maximum={this.state.maximum}
      searchName={this.state.searchName}
      onChageMinimum={this.onChageMinimum}
      onChageMaximum={this.onChageMaximum}
      onChageSearchName={this.onChageSearchName}
      onChageOrdination={this.onChageOrdination}
      />
      <CardsBox>      
      <Card
        name={'Nome'}
        value={'R$400,00'}
        formOfPayments ={'Débito'} 
        descripition={'Esse serviço é ...'}
      /> 
      <Card
        name={'Nome'}
        value={'R$300,00'}
        formOfPayments ={'Crédito'} 
        descripition={'Esse serviço é ... '}
      /> 
      <Card
        name={'Nome'}
        value={'R$100,00'}
        formOfPayments ={'Pix'} 
        descripition={'Esse serviço é ...'}
      /> 
      <Card
        name={'Nome'}
        value={'R$400,00'}
        formOfPayments ={'Á vista'} 
        descripition={'Esse serviço é ...'}
      /> 
      <Card
        name={'Nome'}
        value={'R$500,00'}
        formOfPayments ={'À prazo'} 
        descripition={'Esse serviço é ...'}
      /> 
    </CardsBox>
    </Container>
    <Footer/>
    </div>
  );
  }
}
