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
        this.setState({ remuneration: e.target.value })
    }

    onChangeDeadline = (e) => {
        this.setState({ deadline: e.target.value })
    }

    onClickCredit = () => {
        this.setState({ credit: !this.state.credit })
    }

    onClickDebit = () => {
        this.setState({ debit: !this.state.debit })
    }

    onClickPix = () => {
        this.setState({ pix: !this.state.pix })
    }

    onClickCashPayment = () => {
        this.setState({ cashPayment: !this.state.cashPayment})
    }

    onClickDeferredPayment = () => {
        this.setState({ deferredPayment: !this.state.deferredPayment })
    }

    sendInfo = async() =>{
        let chosenMethod = []
            if(this.state.credit){
                chosenMethod.push('crédito')
            }
            if(this.state.debit){
                chosenMethod.push('débito')
            }
            if(this.state.pix){
                chosenMethod.push('pix')
            }
            if(this.state.cashPayment){
                chosenMethod.push('à vista')
            } if(this.state.deferredPayment){
                chosenMethod.push('à prazo')
            }
        if(chosenMethod.length===0){
            alert('Favor selecionar um ou mais métodos de pagamento.')
        } else{
            let newJob = {
                title: this.state.title,
                description:this.state.description,
                value: Number(this.state.remuneration),
                paymentMethods:chosenMethod,
                dueDate:this.state.deadline,
            }
            try{
                let jobWasCreated = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasThree/jobs`, newJob)
                this.setState({title: '', description:'', remuneration:'', deadline:''})
                console.log('deu bom')
            }catch(error){
                console.log(error.response)
            }
        }
    }

    render() {
        return (
            <DivForm noValidate autoComplete="off">
                <Title color={Theme.palette.primary.dark}>Cadastro de serviço</Title>
                <FormControl id="standard-textarea" fullWidth >
                    <InputLabel>Serviço</InputLabel>
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
                    <InputLabel>Descrição</InputLabel>
                    <Input
                        id="standard-textarea"
                        placeholder="Preciso de um predreito para trocar o piso do meu apartamento"
                        fullWidth
                        multiline
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        value={this.state.description}
                        onChange={this.onChangeDescription}
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
                        value={this.state.remuneration}
                        onChange={this.onChangeRemuneration}
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
                                    onClick={this.onClickCredit}
                                />
                            }
                            label="Crédito"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                    onClick={this.onClickDebit}
                                />
                            }
                            label="Débito"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                    onClick={this.onClickPix}
                                />
                            }
                            label="Pix"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                    onClick={this.onClickCashPayment}
                                />
                            }
                            label="À vista"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                    onClick={this.onClickDeferredPayment}
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
                        value={this.state.deadline}
                        onChange={this.onChangeDeadline}
                    />

                </FormControl>

                <Button variant="contained" color="primary" onClick={this.sendInfo}>
                    ENVIAR
                        </Button>
            </DivForm>
        )
    }
}

