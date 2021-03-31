import React, { Component } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Theme} from '../Theme/Theme'
import {ThemeProvider} from '@material-ui/styles';

import Button from '@material-ui/core/Button';
export default class Form extends Component {
  render() {
    return (
        <ThemeProvider theme={Theme}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </ThemeProvider>
    )
  }
}
