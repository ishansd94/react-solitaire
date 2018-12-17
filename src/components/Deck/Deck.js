import React, {Component} from 'react';
import RedBack from '../../assets/cards/RED_BACK.svg'

class Deck extends Component{
    render() {
        return(
            <div>
                <img alt="deck" src={RedBack} height="150px" />
            </div>
        )
    }
}

export default Deck;