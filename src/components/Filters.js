import React from 'react';
import styled from 'styled-components';
import { InputLabel, FormControlLabel, Checkbox, FormLabel, FormGroup, FormControl, Input, MenuItem, Select, Typography, Slider } from '@material-ui/core';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  padding: 10px;
  font-size: 15px;
  top: 0;
  left: 0;
  align-self: flex-start;
  background-color: #F5F3FC;
  align-self: stretch;
 
`
const ReseachName = styled.div`
  display: flex;
  flex-direction: column;
`

const ValuesInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const Order = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export class Filters extends React.Component {
  render() {
    return (
      <FiltersContainer>
        <h3>Filtros</h3>

        <FormControl id="standard-textarea" fullWidth >
          <InputLabel>Pesquisar por nome</InputLabel>
          <Input
            variant="outlined"
            margin="dense"
            placeholder="Título ou Descrição"
            fullWidth
            value={this.props.searchName}
            onChange={this.props.onChageSearchName}
          />
        </FormControl>

        <ValuesInput>
          <label>Valor mínimo</label>
          <input
            type="number"
            min="0"
            value={this.props.minimum}
            onChange={this.props.onChageMinimum}
            placeholder="R$"
          />
          <label>Valor maximo</label>
          <input
            type="number"
            max="10000"
            value={this.props.maximum}
            onChange={this.props.onChageMaximum}
            placeholder="R$"
          />
        </ValuesInput>

        <div>
          <Typography gutterBottom>
            Remuneração
      </Typography>
          <Slider
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={"100"}
            defaultValue={[0, 10000]}
            max={10000}
            // value={[this.props.minimum, this.props.maximum]}
            onChange={this.props.onChageRemuneration}
          />
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label" fullWidth>Ordenar:</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={}
            // onChange={}
            onChange={this.props.onChageOrdination}
          >
            <MenuItem value="" fullWidth>
              <em>

              </em>
            </MenuItem>
            <MenuItem value="title">Título</MenuItem>
            <MenuItem value="value">Valor</MenuItem>
            <MenuItem value="deadline">Prazo</MenuItem>
          </Select>
        </FormControl>
      </FiltersContainer>
    );
  }
}
