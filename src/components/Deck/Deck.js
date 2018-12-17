import React, {Component} from 'react';
import RedBack from '../../assets/cards/RED_BACK.svg'

class Deck extends Component{

    state={
        currentPosition:0
    };

    handleClick(){
        this.setState((prevState, props)=> {
            return {
                currentPosition: prevState.currentPosition++
            }
        })
    }

    componentDidMount() {
        this.setState({
            remainingCards: this.props.remainingCards
        })
    }

    render() {


        return(
            <div>
                <img alt="deck" src={RedBack} height="150px" onClick={this.handleClick}/>

                {/*<Card cardName={this.state.remainingCards[this.state.currentPosition].imageName} hidden={false}/>*/}

            </div>
        )
    }
}

export default Deck;