// const SPADES="S";
// const CLUBS="C";
// const HEARTS="H";
// const DIAMONDS="D";

class CardDeck {

    _cards = [
        'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
        'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
        'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
        'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH'
    ];


    get cards() {
        let cards = [];

        this._cards.forEach(c => {


            let cardName = c;
            let imageName = c;
            let suite = c.substr(c.length-1);
            let value = c.substr(0, c.length-1);

            // switch (c.substring(1)) {
            //     case SPADES: suite=SPADES; break;
            //     case CLUBS: suite=CLUBS; break;
            //     case DIAMONDS: suite=DIAMONDS; break;
            //     case HEARTS: suite=HEARTS; break;
            // }


            cards.push({
                name: cardName,
                imageName: imageName,
                suite: suite,
                value: value,
            });
        });

        return this.shuffle(cards);
    }

    shuffle(cards){
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }
}


export default CardDeck;