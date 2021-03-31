import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0px 70px 20px 70px;
  width: 20%;
  height: 90%;
  border: 1px solid black;
`
const DivData =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  color: #8861b6;
` 

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100%; 
  height: 30%;
  color: #8861b6;
`
const BtnSendProp =styled.button`
  margin: 10px;
  cursor: pointer;
`

export class Card extends React.Component {
  render(){
    return(
      <CardContainer>
        <DivData>
          <h3>{this.props.name}</h3>
          <p>Valor de remuneração:{this.props.value}</p>
          <p>Método de Pagamento: {this.props.formOfPayments}</p>
        </DivData>
        <Div>
          <p>Descrição:{this.props.descripition}</p>
        </Div>
        <BtnSendProp>Enviar Proposta</BtnSendProp>
      </CardContainer>
    )
  }
}