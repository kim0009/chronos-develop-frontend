import * as React from 'react'
import { Component, Fragment } from 'react';
import { RegistroPonto } from './RegistroPonto';
import pontoActions from '../../actions/pontoAction';
import { pontoStore } from '../../stores/pontoStores';
import { PontoService } from '../../services/ponto.service';
import { TipoTarefaService } from '../../services/tipo-tarefa.service';
import { PontoDataTable } from './PontoDataTable';

const store = pontoStore;

export class Ponto extends Component {

    constructor () {
        super();
        PontoService.get(store.dispatch, pontoActions.RESUMO_PONTO);
        TipoTarefaService.get(store.dispatch, pontoActions.TIPO_TAREFA);
    }

    render() {
        return (
            <Fragment>
                <main>
                    <header>
                        <ul>
                            <li>
                                <h1>CHRONOS</h1>
                            </li>
                        </ul>
                    </header>
                    <nav>
                        <ul>
                            <li>Resumo</li>
                            <li>Relatórios</li>
                            <li>Teste</li>
                        </ul>
                    </nav>
                </main>
                <div className="corpo">
                    <RegistroPonto store={store} action={pontoActions.TIPO_TAREFA} />
                    <PontoDataTable store={store} />
                </div>
            </Fragment>
        );
    }
}