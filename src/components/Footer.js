import React, { Component } from 'react'
import styled from 'styled-components'
import Rede1 from '../img/rede-social(1).ico'
import Rede2 from '../img/rede-social(2).ico'
import Rede3 from '../img/rede-social(3).ico'
import Rede4 from '../img/rede-social(4).ico'

import Bandeira1 from '../img/boleto-bancario.png'
import Bandeira2 from '../img/elo_logo.png'
import Bandeira3 from '../img/mastercard-logo.png'
import Bandeira4 from '../img/pix-logo.png'

const DivFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #4A4A4A;
    justify-content: space-around;
    align-items: center;

    color: white;
    > div{
        width: 250px;
        padding: 20px;
    }
    > div:last-of-type{
        width: 400px;
    }
    h4{
            margin: 5px;
        }
    span{
        font-size: 36px;
    }
`
const DivIconesRedes = styled.div`
    display: flex;
    img{
        width: 30px;
        filter:invert(1);
        margin-right: 5px;
    }
    img:hover{
        filter:invert(0);
    }
    margin-bottom: 10px;

`
const DivIconesBandeiras = styled.div`
 display: flex;
    img{
        height: 30px;
        margin-right: 5px;
    }
   
`
export class Footer extends Component {
  render() {
    return (
      <DivFooter>
          
          <div><h4>Redes Sociais</h4>
          <DivIconesRedes>
          <a href="#"><img src={Rede1}/></a>
          <a href="#"><img src={Rede2}/></a>
          <a href="#"><img src={Rede3}/></a>
          <a href="#"><img src={Rede4}/></a>
          </DivIconesRedes>
          <h4>Métodos de pagamentos</h4>
          <DivIconesBandeiras>
          <img src={Bandeira1}/>
          <img src={Bandeira2}/>
          <img src={Bandeira3}/>
          <img src={Bandeira4}/>
          </DivIconesBandeiras>
          </div>
          <div>
              <h4>© 2021 FutureNinja S.A.  49.999.120/0001-58
Rua Capote Valente, 09 - São Paulo, SP - 05409-000</h4></div>
          <div>
                <h4>
                    Como falar com a gente?</h4>
                <h4>
                    (99) 4002-8922 </h4>
                <h4>
                    Segunda à sexta das 8h às 21h, e aos Sábados das 8h às 16h.</h4>
                <h4>
                    tenhointeresse@FutureNinja.com.br</h4>
                <h4>
                    Respostas em até um dia útil</h4>
                <h4>
                    imprensa@FutureNinja.com.br</h4>
                
          </div>
      </DivFooter>
    )
  }
}
