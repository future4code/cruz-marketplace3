import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../../img/networking1.png'

const Header = styled.header`
  background: rgb(47,67,104);
  background: linear-gradient(351deg, rgba(47,67,104,0.9444854599170471) 11%, rgba(44,71,150,0.8538113026136763) 51%, rgba(84,7,174,0.9931371453103055) 82%), url(${props => props.urlImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 99.24vw;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
      margin: 0;
      color: white;
      font-size: 3em;
      letter-spacing: 2px;
      text-transform: uppercase;
  }
`

export default class Presentation extends Component {
  render() {
    return (
      <div>
        <Header urlImg={image} >
            <h1>Pronto para contratar profissionais Ninjas?</h1>
        </Header>
      </div>
    )
  }
}
