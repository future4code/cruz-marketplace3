import React from 'react';
import styled from 'styled-components';
import { InputLabel, FormControlLabel, Checkbox, FormLabel, FormGroup, FormControl, Input, MenuItem, Select, Typography, Slider} from '@material-ui/core';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  /* height: 100%; */
  padding: 20px;
  font-size: 15px;
  top: 0;
  left: 0;
  align-self: flex-start;
  background-color: #F5F3FC;
  align-self: stretch;
  h3{
    color: #3E0C79;
  }
 
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
const MinMax = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
h5{
  width: 50%;
}
`
export class Filters extends React.Component {
  render() {
    return (
      <FiltersContainer>
        <h2>Filtros</h2>

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

     

      <Typography  gutterBottom>
        Remuneração
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={"100"}
        defaultValue={[0, this.props.maximumValue]}
        max={this.props.maximumValue}
        // value={[this.props.minimum, this.props.maximum]}
        onChange={this.props.onChageRemuneration}
        fullWidth
      />
      <MinMax>
        <h5>Min: {this.props.minimum}</h5>
        <h5>Máx: {this.props.maximum} </h5>
      </MinMax>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label"   fullWidth>Ordenar:</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
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
