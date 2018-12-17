import React, {Component} from 'react';
// import cardStyles from './Card.css';
import RedBack from '../../assets/cards/RED_BACK.svg'

class Card extends Component {

    state={
        cardName:'',
        card: null,
    };

    componentDidMount() {
        const card = require('../../assets/cards/'+this.props.cardName+'.svg');
        this.setState({
            cardName: this.props.cardName ? this.props.cardName : "None",
            card: card
        });

    }

    onDragStart(event, card){
        event.dataTransfer.setData("card", JSON.stringify({
            name: card,
            stackId: this.props.stackId
        }));
    }


    render() {

        const front =  <img alt={this.state.cardName} src={this.state.card} height="150px" />;

        const back =   <img alt={this.state.cardName} src={RedBack} height="150px" />;

        return(
            this.props.hidden ?
                <div className="playing-card"> {back} </div> :
                <div className="playing-card" draggable onDragStart={(e)=> this.onDragStart(e, this.state.cardName)} > {front} </div>
        );
    }

}

export default Card