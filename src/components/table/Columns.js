import * as React from 'react'
import { Component, Fragment } from 'react';

export class Columns extends Component {

    constructor(props) {
        super(props);
        this.setField = this.setField.bind(this);
    }

    setField(entidade, field) {
        let fields = field.split('.');
        if(fields.length > 1) {
            let prop = fields[0];
            fields.splice(0,1);
            return this.setField(entidade[prop], fields.join('.'));
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
                                <td key={index} className="table-cell">{this.setField(col, field.name)}</td>
                            )}
                        </tr>)
                })}
            </Fragment>
        );
    }
}