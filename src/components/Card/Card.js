import React, {Component} from 'react';
// import cardStyles from './Card.css';
import RedBack from '../../assets/cards/RED_BACK.svg'

class Card extends Component {

    state = {
        name: '',
        image: null,
        stackId: null,
        hidden: true
    };

    componentDidMount() {

        let card = {
            name: '',
            image: null,
            stackId: null,
            hidden: true
        };

        if (this.props.hidden) {
            card.image = RedBack;

        } else {
            card.image = require('../../assets/cards/' + this.props.name + '.svg');

        }

        card.stackId = this.props.stackId;
        card.hidden = this.props.hidden;
        card.name = this.props.name ? this.props.name : "NONE";

        this.setState(card);
    }

    onDragStart(event) {
        event.dataTransfer.setData("card", JSON.stringify(this.state));
    }

    onClick(event){
        console.log(this.state)
    }


    render() {

        const card = <img alt={this.state.name} src={this.state.image} height="150px"/>;

        return (
            this.state.hidden ?
                <div className="playing-card"> {card} </div> :
                <div className="playing-card"
                     draggable
                     onDragStart={(e) => this.onDragStart(e)}
                     onClick={(e)=>{this.onClick(e)}}
                > {card} </div>
        );
    }

}

export default Card