import * as React from 'react'
import { Component } from 'react';
import { Columns } from './Columns'

export class Table extends Component {

    render() {
        return (
            <section>
                <h2>Resumo Diário</h2>
                <table>
                    <thead>
                        <tr>
                            {this.props.columns.map((x, index) =>
                                <th key={index}>{x.label}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <Columns lista={this.props.lista} columns={this.props.columns} />
                    </tbody>
                </table>
            </section>
        );
    }
}