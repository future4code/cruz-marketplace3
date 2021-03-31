import React from 'react';
import styled from 'styled-components';


const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 60vh;
  padding: 10px;
  background-color: #8661b6;
`
const TitleFilter = styled.h3`
  margin: 25px 0 25px 0;
` 
const ReseachName =styled.div`
  display: flex;
  flex-direction: column;
` 
const ValuesInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  
`

const Order = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export class Filters extends React.Component {
  render(){
    return (
      
      <FiltersContainer>
          <TitleFilter>Filtros</TitleFilter>
        <ReseachName>
            <label>Pesquisar por nome</label>
              <input
              type='text' value={this.props.searchName} onChange={this.props.onChageSearchName} placeholder='Título ou Descrição'
              />
      </ReseachName>
      
      <ValuesInput>
            <label>Valor mínimo</label>
              <input
              type='number' min='0' value={this.props.minimum} onChange={this.props.onChageMinimum} placeholder='R$'
              />
            <label>Valor maximo</label>
              <input
              type='number' max='10000' value={this.props.maximum} onChange={this.props.onChageMaximum} placeholder='R$'
              />
      </ValuesInput>
      <Order> 
            <label>Ordenar </label>               
                <select onChange={this.props.onChageOrdination}>
                  <option ></option>
                  <option >Título</option>
                  <option >Valor</option>
                  <option >Prazo</option>
              </select>        
      </Order>
      </FiltersContainer>
      
    )
  }
}
