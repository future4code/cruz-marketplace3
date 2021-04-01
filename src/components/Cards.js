import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
  background-color: #F5F3FC;
  border-radius: 5px;
  padding:10px;
  font-size: 18px;
  width: 300px;

  .paymentMethods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
  }
  
  p{
     color: #4A4A4A;
      margin-left: 4px;
      font-weight: 500;
      overflow: none;
      span{
    font-weight: 700;
    font-size: 17px;
    color: black;
  }
    }
    button{
    margin: 10px;
    cursor: pointer;
    font-size: 10px;
    align-self: center;
    font-size: 15px;
    width: 100%;
    color: white;
    font-weight: 700;
  }
`
const DivData =styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  h3{
    align-self: center;
    color: #5F4582;
    margin: 3px;
    text-align: center;
  }
` 

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid black;
  flex-grow: 1;
  width: 100%;
`

export class Card extends React.Component {
  render(){
    return(
      <CardContainer>
        <DivData>
          <h3>{this.props.name}</h3>
          <p><span>Valor de remuneração: </span>R$ {this.props.value}</p>
          <p><span>Método(s) de Pagamento: </span></p>
          <p  class="paymentMethods">{this.props.paymentMethods}</p> 
          <p><span>Data limite:  </span>{this.props.dueDate}</p>
        </DivData>
        <Div>
          <p><span>Descrição: </span>{this.props.descripition}</p>
        </Div>

        <Button variant="contained" color="primary" onClick={this.sendInfo}>
                    Enviar Proposta
                        </Button>
      </CardContainer>
    )
  }
}