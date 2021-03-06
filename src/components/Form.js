import React, { Component } from 'react'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel, FormControlLabel, Checkbox, FormLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Theme } from '../Theme'
import axios from 'axios';

const DivForm = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
button
{
    margin-top: 20px;
    width: 100%;
}
fieldset{
    margin: 8px 0;
}
>div{
    margin: 8px 0;
}
`

const Title = styled.div`
color: ${props => props.color};
font-weight:500;
font-size: 1.6em;
letter-spacing:2px;
text-align: center;
width: 100%;
padding-bottom: 4%;
`

export default class Form extends Component {

    state = {
        title: '',
        description: '',
        remuneration: '',
        deadline: '',
        credit: false,
        debit: false,
        pix: false,
        cashPayment: false,
        deferredPayment: false,

    }

    onChangeTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    onChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    onChangeRemuneration = (e) => {
        let s = "";
        let cp = "";
        let vr = e.target.value;
        let tam = vr.length;
        for (let i = 0; i < tam; i++) {
            if (vr.substring(i, i + 1) === "0" ||
                vr.substring(i, i + 1) === "1" ||
                vr.substring(i, i + 1) === "2" ||
                vr.substring(i, i + 1) === "3" ||
                vr.substring(i, i + 1) === "4" ||
                vr.substring(i, i + 1) === "5" ||
                vr.substring(i, i + 1) === "6" ||
                vr.substring(i, i + 1) === "7" ||
                vr.substring(i, i + 1) === "8" ||
                vr.substring(i, i + 1) === "9") {
                s = s + vr.substring(i, i + 1);
            }
        }   
        
        // console.log("AASD", s, s.length)
        // console.log("S0", s)
        for (let i = 0; i < s.length; i++) {
            // console.log("S1 for", i, s.substring(i, 1))
            if (s.substring(0, 1) == "0"){
                    s = s.substring(1);
            }
            else{
                // s2 = s2 + s.substring(i);
                break;
            }
        }
        // console.log("S1", s)
    
        //  console.log("S2",s)
        if (s.length > 2) {
            cp = s.substring(0, s.length - 2) + ',' + s.substring(s.length - 2)
       
        }else if(s.length > 1){
            cp = '00,' + s
        } 
        else {
            cp = '00,0' + s
       }
        // cp = Number(cp)
        console.log(cp)
         this.setState({ remuneration: cp })
    }

    onChangeDeadline = (e) => {
        this.setState({ deadline: e.target.value })
    }

    onClickCredit = (e) => {
        this.setState({ credit: e.target.checked })
    }

    onClickDebit = (e) => {
        this.setState({ debit: e.target.checked })
    }

    onClickPix = (e) => {
        this.setState({ pix: e.target.checked })
    }

    onClickCashPayment = (e) => {
        this.setState({ cashPayment: e.target.checked })
    }

    onClickDeferredPayment = (e) => {
        this.setState({ deferredPayment: e.target.checked })
    }

    sendInfo = async () => {
        let chosenMethod = []
        if (this.state.credit) {
            chosenMethod.push('cr??dito')
        }
        if (this.state.debit) {
            chosenMethod.push('d??bito')
        }
        if (this.state.pix) {
            chosenMethod.push('pix')
        }
        if (this.state.cashPayment) {
            chosenMethod.push('?? vista')
        } if (this.state.deferredPayment) {
            chosenMethod.push('?? prazo')
        }
        if (chosenMethod.length === 0) {
            alert('Favor selecionar um ou mais m??todos de pagamento.')
        } else {
            let newJob = {
                title: this.state.title,
                description: this.state.description,
                value: Number(this.state.remuneration.replace(",", ".")),
                paymentMethods: chosenMethod,
                dueDate: this.state.deadline,
            }
            try {
                await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasThree/jobs`, newJob)
                this.setState({ title: '', description: '', remuneration: '', deadline: '', credit: false, debit: false, pix: false, cashPayment: false, deferredPayment: false })
                alert('Servi??o criado com sucesso!')
            } catch (error) {
                // console.log(error.response)
                if (error.response.status === 400) {
                    alert('Os dados inseridos podem estar equivocados. Favor conferi-los.')
                } else {
                    alert('Ocorreu um erro no sistema e estamos trabalhando para resolv??-lo. Por favor, tente novamente mais tarde.')
                }
            }
        }
    }

    render() {
        return (
            <DivForm noValidate autoComplete="off">
                <Title color={Theme.palette.primary.dark}>Cadastro de servi??o</Title>
                <FormControl id="standard-textarea" fullWidth >
                    <InputLabel>Servi??o</InputLabel>
                    <Input
                        required
                        label="DDD Origem"
                        variant="outlined"
                        margin="dense"
                        placeholder="Reformas prediais"
                        fullWidth
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                    />
                </FormControl>
                <FormControl id="standard-textarea" fullWidth >
                    <InputLabel>Descri????o</InputLabel>
                    <Input
                        id="standard-textarea"
                        placeholder="Preciso de um predreiro para trocar o piso do meu apartamento"
                        fullWidth
                        multiline
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                </FormControl>
                <FormControl id="standard-textarea" fullWidth >
                    <InputLabel>Valor da remunera????o</InputLabel>
                    <Input
                        type="text"
                        className=".Mui-error"
                        required
                        label="DDD Origem"
                        variant="outlined"
                        margin="dense"
                        placeholder="2000.00"
                        fullWidth
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        value={this.state.remuneration}
                        onChange={this.onChangeRemuneration}
                    />

                </FormControl>

                <FormControl id="standard-textarea" component="fieldset" row>
                    <FormLabel component="legend">M??todos de pagamento</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="credit"
                                    color="primary"
                                    onClick={this.onClickCredit}
                                    checked={this.state.credit}
                                />
                            }
                            label="Cr??dito"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="debit"
                                    color="primary"
                                    onClick={this.onClickDebit}
                                    checked={this.state.debit}
                                />
                            }
                            label="D??bito"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="pix"
                                    color="primary"
                                    onClick={this.onClickPix}
                                    checked={this.state.pix}
                                />
                            }
                            label="Pix"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="cashPayment"
                                    color="primary"
                                    onClick={this.onClickCashPayment}
                                    checked={this.state.cashPayment}
                                />
                            }
                            label="?? vista"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="deferredPayment"
                                    color="primary"
                                    onClick={this.onClickDeferredPayment}
                                    checked={this.state.deferredPayment}
                                />
                            }
                            label="?? prazo"
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
                        value={this.state.deadline}
                        onChange={this.onChangeDeadline}
                    />

                </FormControl>

                <Button variant="contained" color="primary" onClick={this.sendInfo}>ENVIAR</Button>
            </DivForm>
        )
    }
}

