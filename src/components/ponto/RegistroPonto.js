import * as React from 'react'
import { Component } from 'react';
import pontoActions from '../../actions/pontoAction';

export class RegistroPonto extends Component {

    constructor(props) {
        super(props);

        let formulario = {
            tarefa: {
                projeto: '',
                tipo: '',
                descricao: ''
            },
            data: Date.now,
            horaInicio: '',
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
        let newState = this.state;
        if(name.includes(".")) {
            let array = name.split(".");
            newState.formulario[array[0]][array[1]] = value;
        }
        else
            newState.formulario[name] = value;
        this.setState(newState);
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
                        <input className="form-input" value={this.state.formulario.horaInicio} name="horaInicio" onChange={this.handleChange} type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Hora Final</label>
                        <input className="form-input" value={this.state.formulario.horaFim} name="horaFim" onChange={this.handleChange} type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Projeto*</label>
                        <input className="form-input" value={this.state.formulario.tarefa.projeto} name="tarefa.projeto" onChange={this.handleChange} type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tarefa*</label>
                        <select className="form-input" value={this.state.formulario.tarefa.tipo} name="tarefa.tipo" onChange={this.handleChange}>
                            <option>Escolha a Tarefa</option>
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