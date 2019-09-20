import * as React from 'react'
import { Component } from 'react';
import { Message } from '../message/Message';
import pontoActions from '../../actions/pontoAction';
import MESSAGE from '../../utils/aplicationMessages';

export class RegistroPonto extends Component {

    constructor(props) {
        super(props);
        let date  = new Date();
        let formulario = {
            tarefa: {
                projeto: '',
                tipo: '',
                descricao: ''
            },
            data: date.toISOString().substring(0, 10),
            horaInicio: `${date.toTimeString().substring(0, 5)}`,
            horaFim: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
        this.state = {formulario, tipoTarefas: []};
        
        this.props.store.dispatch({ type: pontoActions.TIPO_TAREFA});
        
        this.props.store.subscribe(() => {
            this.setState({ formulario: this.state.formulario, tipoTarefas: this.props.store.getState().tipTarefaReducers });
        });
    }

    handleChange(event) {
        let {name, value} = event.target;
        let newState = {...this.state.formulario};
        this.setValue(newState, name, value);
        this.setState(newState);
    }

    setValue(entity, field, value) {
        if(field.includes(".")) {
            let fields = field.split(".");
            let prop = fields[0];
            fields.splice(0,1);
            return this.setValue(entity[prop], fields.join("."), value);
        }
        entity[field] = value
        return entity;
    }

    handleSumit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <nav className="menu-vertical">
                <form onSubmit={this.handleSumit}>
                    <div className="form-group">
                        <label htmlFor="">Hora de Início*</label>
                        {!this.state.formulario.horaInicio ? <Message message={MESSAGE.ERROR_EMPTY_FIELD}/> : null}
                        <input className="form-input data-input" value={this.state.formulario.horaInicio} name="horaInicio" onChange={this.handleChange} type="time" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Hora Final</label>
                        <input className="form-input data-input" value={this.state.formulario.horaFim} name="horaFim" onChange={this.handleChange} type="time" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Data*</label>
                        {!this.state.formulario.data ? <Message message={MESSAGE.ERROR_EMPTY_FIELD}/> : null}
                        <input className="form-input data-input" value={this.state.formulario.data} name="data" onChange={this.handleChange} type="date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Projeto*</label>
                        {this.state.formulario.tarefa.projeto ? <Message message={MESSAGE.ERROR_EMPTY_FIELD}/> : null}
                        <input className="form-input" value={this.state.formulario.tarefa.projeto} name="tarefa.projeto" onChange={this.handleChange} type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tarefa*</label>
                        {/* {!this.state.formulario.tarefa.tipo ? <Message message={MESSAGE.ERROR_EMPTY_FIELD}/> : null} */}
                    <select className="form-input" value={this.state.formulario.tarefa.tipo} name="tarefa.tipo" onChange={this.handleChange}>
                        <option value=""  selected disabled>Escolha a Tarefa</option>
                            {this.state.tipoTarefas.map(tarefa => 
                                <option  key={tarefa.id} value={tarefa.id}>{tarefa.description}</option>    
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea value={this.state.formulario.tarefa.descricao} name="tarefa.descricao" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn button-primary" value="Confirmar" />
                    </div>
                </form>
            </nav>
        );
    }
}