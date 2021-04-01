import React from 'react';
import styled from 'styled-components';


const FiltersContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100vh;
  padding: 10px;
  background-color: whitesmoke;
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
  render() {
    return (
      <FiltersContainer>

          <h3>Filtros</h3>
      <ReseachName>

        <TitleFilter>Filtros</TitleFilter>
        <ReseachName>
          <label>Pesquisar por nome</label>
          <input
            type="text"
            value={this.props.searchName}
            onChange={this.props.onChageSearchName}
            placeholder="Título ou Descrição"
          />
        </ReseachName>

        <ValuesInput>
          <label>Valor mínimo</label>
          <input
            type="number"
            min="0"
            value={this.props.minimum}
            onChange={this.props.onChageMinimum}
            placeholder="R$"
          />
          <label>Valor maximo</label>
          <input
            type="number"
            max="10000"
            value={this.props.maximum}
            onChange={this.props.onChageMaximum}
            placeholder="R$"
          />
        </ValuesInput>
        <Order>
          <label>Ordenar </label>
          <select onChange={this.props.onChageOrdination}>
            <option></option>
            <option>Título</option>
            <option>Valor</option>
            <option>Prazo</option>
          </select>
        </Order>
      </FiltersContainer>
    );
  }
}
