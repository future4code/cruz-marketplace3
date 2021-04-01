import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  width: 20%;
  height: 100%;
  background-color: #8661B6;
  border-radius: 5px;
  button{
    margin: 10px;
    cursor: pointer;
    font-size: 10px;
  }
`
const DivData =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  color: white;
` 

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  width: 100%; 
  height: 40px;
  color: white;
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
        <Button variant="contained" color="primary" onClick={this.sendInfo}>
                    Enviar Proposta
                        </Button>
      </CardContainer>
    )
  }
}