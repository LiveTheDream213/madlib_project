import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            PluralNoun: ''
        }
    }


    handleInputChange() {
        this.setState({ color: 'red'})
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ color: event.target.value })
    }

    
    render() {
       
    
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <input/>
                <input value={this.state.color} onChange={(event) => this.handleInputChange(event)}/>
            </div>
        )
    }
}

export default Card;