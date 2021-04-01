import React, { Component } from "react"
import styled from "styled-components"
import logo from "../img/ninja (2).png"

const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #8661b6;
  align-items: center;
  justify-content: center;
  display: flex;
`

export class Header extends Component {
  toHome = () => {
    this.props.toHome("Presentation")
  }

  render() {
    return (
      <HeaderContainer>
        <Logo src={logo} alt="logo" onClick={this.toHome} />
      </HeaderContainer>
    )
  }
}
