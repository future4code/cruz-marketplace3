import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../img/networking1.png'

const Header = styled.header`
  background: rgb(47,67,104);
  background: linear-gradient(351deg, rgba(47,67,104,0.9444854599170471) 11%, rgba(44,71,150,0.8538113026136763) 51%, rgba(84,7,174,0.9931371453103055) 82%), url(${props => props.urlImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 99.24vw;
`

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header urlImg={image} />
        <p>Pronto para começar!</p>
      </div>
    )
  }
}
