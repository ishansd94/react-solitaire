import React, {Component} from 'react';
import Card from '../../Card/Card';
import StackStyles from './Stack.css';

class Stack extends Component {

    state = {
        cards: []
    };

    componentDidMount() {

        this.setState({
            cards: this.props.cards
        });
    }

    onDragOver(event) {
        event.preventDefault();
    }

    onDrop(event, index) {
        event.preventDefault();
        let card = JSON.parse(event.dataTransfer.getData("card"));

        console.log(card)

        if(card){
            this.props.onCardDrop(card, index);
        }
    }

    render() {

        const cards = this.state.cards.map((c, index) => {

            let card;

            if (index === this.state.cards.length - 1) {
                card = <li key={c.name}><Card cardName={c.imageName} hidden={false} stackId={index}/></li>
            } else {
                card = <li key={c.name}><Card cardName={c.imageName} hidden={true}/></li>
            }

            return card;
        });


        return (
            <div
                className="card-stack"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => {this.onDrop(e, this.props.index)}}
            >
                <ul style={StackStyles}>
                    {cards}
                </ul>
            </div>

        );
    }


}

export default Stack