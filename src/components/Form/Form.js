import React, { Component } from 'react'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel, FormControlLabel, Checkbox, FormLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const DivForm = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
button
{
    margin-top: 20px;
}
fieldset{
    margin: 8px 0;
}
>div{
    margin: 8px 0;
}
`


export default class Form extends Component {



    render() {
        return (
                <DivForm  noValidate autoComplete="off">
                        <FormControl id="standard-textarea" fullWidth >
                            <InputLabel>Valor da remuneração</InputLabel>
                            <Input
                                required
                                label="DDD Origem"
                                variant="outlined"
                                margin="dense"
                                placeholder="2000,00"
                                fullWidth
                                onKeyPress={this.inputTitle}
                                
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl id="standard-textarea" fullWidth >
                            <InputLabel>Descrição</InputLabel>
                            <Input
                                id="standard-textarea"
                                placeholder="Preciso de um predreito para trocar o piso do meu apartamento"
                                fullWidth
                                multiline
                                
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl id="standard-textarea" fullWidth >
                            <InputLabel>Valor da remuneração</InputLabel>
                            <Input
                                className=".Mui-error"
                                required
                                label="DDD Origem"
                                variant="outlined"
                                margin="dense"
                                placeholder="2000,00"
                                fullWidth
                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                }}
                            />
                            
                        </FormControl>


                        <FormControl id="standard-textarea" component="fieldset" row>
      <FormLabel component="legend">Métodos de pagamento</FormLabel>
      <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Crédito"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Débito"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Pix"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="À vista"
                            />
                              <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="À prazo"
                            />
                            </FormGroup>
                        </FormControl>


                        <FormControl id="standard-textarea" fullWidth >
                            <InputLabel>Prazo</InputLabel>
                            <Input
                                id="standard-textarea"
                                placeholder="22/04/2021"
                                fullWidth
                                type="date"

                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />

                        </FormControl>

                        <Button variant="contained" color="primary">
                            ENVIAR
                        </Button>
            </DivForm>
        )
    }
}

