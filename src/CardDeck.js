export const Suits = {
    SPADES: "S",
    CLUBS: "C",
    HEARTS: "H",
    DIAMONDS: "D"
};

export const Ranks =  ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const RanksValues = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13
};

export class CardDeck {

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
            let suite = this.getSuite(c);
            let value = this.getValue(c);

            cards.push({
                name: cardName,
                imageName: imageName,
                suite: suite,
                value: value,
            });
        });

        return this.shuffle(cards);
    }

    shuffle(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    getSuite(c) {
        return c.substr(c.length - 1)
    }

    getValue(c) {
        return c.substr(0, c.length - 1);
    }

}