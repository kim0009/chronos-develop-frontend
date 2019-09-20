import * as React from 'react'
import { Component, Fragment } from 'react';

export class Columns extends Component {

    constructor(props) {
        super(props);
        this.getValue = this.getValue.bind(this);
    }

    getValue(entidade, field) {
        if(field.includes(".")) {
            let fields = field.split('.');
            let prop = fields[0];
            fields.splice(0,1);
            return this.getValue(entidade[prop], fields.join('.'));
        }

        return entidade[field];
    }

    render() {
        return (
            <Fragment>
                {this.props.lista.map(col => {
                    return (
                        <tr className="table-row" key={col.id}>
                            {this.props.columns.map((field, index) =>
                                <td key={index} className="table-cell">{this.getValue(col, field.name)}</td>
                            )}
                        </tr>)
                })}
            </Fragment>
        );
    }
}