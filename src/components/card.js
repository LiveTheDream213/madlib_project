import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            colorL: '',
            PluralNoun: '',
        }
    }
    
    
    render() {
        return (
            <div className="card">
                { Input('Color') }
                { Input('Plural Noun') }
            </div>
        )
    }
}

export default Card;