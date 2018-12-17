import React, {Component} from 'react';
import Stacks from "../Stacks/Stacks";
import Deck from "../Deck/Deck";
import Slots from "../Slots/Slots";
import {CardDeck} from "../../CardDeck";

const STACK_COUNT = 7;

class Board extends Component {

    constructor(props) {
        super(props);

        let cd = new CardDeck();
        this.state = {
            deck: cd,
            allCards: cd.cards,
            remainingCards: [],
            stacks: [],
        }
    }

    componentDidMount() {
        this.deal();
    }

    deal() {
        let stacks = [];
        let deckPosition = 0;

        for (let stackIndex = 0; stackIndex < STACK_COUNT; stackIndex++) {

            let stack = [];
            for (let deckIndex = 0; deckIndex <= stackIndex; deckIndex++, deckPosition++) {
                stack.push(this.state.allCards[deckPosition]);
            }

            stacks.push(stack);
        }

        this.setState({
            stacks: stacks,
            remainingCards: this.state.allCards.slice(deckPosition, this.state.allCards.length)
        });

    }

    onCardDrop(card, droppedStackId) {
        console.log("drop", card, droppedStackId);

        if (droppedStackId != card.stackId) {

            this.setState((prevState, props) => {

                let stacks = prevState.stacks;

                let cardIndex = stacks[card.stackId].findIndex(c => c.name === card.name);

                stacks[card.stackId].splice(cardIndex, 1);

                stacks[droppedStackId].push(card);

                return {
                    stacks: stacks
                }
            })
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <Deck cards={this.state.remainingCards}/>
                    </div>
                    <div className="col-sm-8">
                        <Slots/>
                    </div>


                </div>
                <hr/>
                <div className="row">
                    <Stacks stacks={this.state.stacks} onCardDrop={this.onCardDrop.bind(this)}/>
                </div>

            </div>
        )
    }
}

export default Board;