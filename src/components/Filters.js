import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 60vh;
  margin-top: 20vh;
  border: 1px solid black;
  padding: 10px;
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
const RangerInput = styled.input`
  cursor: pointer;
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
            <h3>Filtros</h3>
        <ReseachName>
            <label>Pesquisar por nome:</label>
              <input
              type='text' value='' onChange='' placeholder='Título ou Descrição'
              />
      </ReseachName>
      <ValuesInput>
      <label>Pesquisar por preço</label>
      <RangerInput type="range" min="0" max="10000" value="5000"/>
            {/* <label>Valor Mínimo:</label>
              <input
              type='number' min='0' value='' onChange='' placeholder='R$'
              />
            <label>Valor Maximo:</label>
              <input
              type='number' max='10000' value='' onChange='' placeholder='R$'
              /> */}
      </ValuesInput>
      <Order> 
            <label>Ordenar </label>               
                <select>
                  <option >Título</option>
                  <option >Valor</option>
                  <option >Prazo</option>
              </select>        
      </Order>
      </FiltersContainer>
    )
  }
}
