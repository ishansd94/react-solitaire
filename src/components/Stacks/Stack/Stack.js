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

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevState)
    // }

    onDragOver(event) {
        event.preventDefault();
    }

    onDrop(event, index) {
        event.preventDefault();
        let card = JSON.parse(event.dataTransfer.getData("card"));

        if (card) {
            this.props.onCardDrop(card, index);
        }
    }

    render() {

        const cards = this.state.cards.map((c, index) => {

            let card;

            if (index === this.state.cards.length - 1) {
                card = <li key={c.name}><Card name={c.name} hidden={false} stackId={index}/></li>
            } else {
                card = <li key={c.name}><Card name={c.name} hidden={true}/></li>
            }

            return card;
        });


        return (
            <div
                className="card-stack"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => {
                    this.onDrop(e, this.props.index)
                }}
            >
                <ul style={StackStyles}>
                    {cards}
                </ul>
            </div>

        );
    }


}

export default Stack