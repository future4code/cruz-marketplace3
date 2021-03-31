import React, { Component } from 'react'

import logo from '../../img/ninja (2).png'

import { HeaderContainer, Logo } from './style'

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
         <Logo src={logo} alt= "logo" />
      </HeaderContainer>
    )
  }
}
