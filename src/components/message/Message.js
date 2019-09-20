import * as React from 'react'
import { Component } from 'react';

export class Message extends Component { 

    render() {
        return(
            <span className="message-error">{this.props.message}</span>
        );
    }
}