import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../img/ninja (2).png'

const Logo = styled.img`
    width: 150px;
    
`

const HeaderContainer = styled.div`
   background-color: #8661b6;
   align-items: center;
   justify-content: center;
   display: flex; 
`

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
         <Logo src={logo} alt= "logo" />
      </HeaderContainer>
    )
  }
}
