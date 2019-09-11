import * as React from 'react'
import { Component, Fragment } from 'react';
import pontoActions from '../../actions/pontoAction';
import { Table } from '../table/Table';

const columns = [
    {
        label: "Data",
        name: "data"
    },
    {
        label: "Hora de Início",
        name: "horaInicio"
    },
    {
        label: "Hora Final",
        name: "horaFim"
    },
    {
        label: "Tarefa",
        name: "tarefa.tipo"
    },
    {
        label: "Descrição",
        name: "tarefa.descricao"
    },
];

export class PontoDataTable extends Component {

    constructor(props) {
        super(props);

        this.props.store.dispatch({ type: pontoActions.RESUMO_PONTO});
        this.props.store.subscribe(() => {
            this.setState({ pontos: this.props.store.getState().resumoReducers });
        });
    }

    render() {
        return(
            <Fragment>
                { this.state ? <Table lista={this.state.pontos} columns={columns} /> : null}
            </Fragment>
        );
    }
}