import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
  margin-bottom: 20px;
  width: 20%;
  height: 30vh;
  border: 1px solid black;
`
const DivData =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25vh;
  color: #8861b6;
` 

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100%; 
  height: 10vh;
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
          <p>{this.props.value}</p>
          <p>{this.props.formOfPayments}</p>
        </DivData>
        <Div>
          <p>{this.props.descripition}</p>
        </Div>
        <BtnSendProp>Enviar Proposta</BtnSendProp>
      </CardContainer>
    )
  }
}