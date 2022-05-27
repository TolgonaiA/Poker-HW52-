const suit = ['spades', 'clubs', 'hearts', 'diams' ];
const rank = ['A', 2,3,4,5,6,7,8,9,10,'J','Q','K'];


class CardDeck {
  constructor() {
    this.cardDeck = [];

    for (let i = 0; i < suit.length; i++){
      for (let j = 0; j < rank.length; j++) {
        let card = {suit: suit[i], rank: rank[j]};
        this.cardDeck.push(card);
      }
    }
  };

  getCard () {
    let index = Math.floor(Math.random()*53);
    const pickedCard = this.cardDeck.splice(index,1);
    return pickedCard[0];
  }

  getCards(howMany) {
    let randomCards = [];
    for (let i = 0; i < howMany; i++) {
      let randomCard = this.getCard();
      randomCards.push(randomCard);
    }
    return randomCards;
  }
};


export default CardDeck
