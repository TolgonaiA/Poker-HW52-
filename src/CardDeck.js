const suit = ['spades', 'clubs', 'hearts', 'diams' ];
const suitPicArr = ['♠','♣','♥','♦'];
const rank = ['A', 2,3,4,5,6,7,8,9,10,'J','Q','K'];

// const rank = ['A', 9,10,'J'];


let totalCards = 52;
let letter = null;

class CardDeck {
  constructor() {
    this.cardDeck = [];
    for (let i = 0; i < suit.length; i++){
      for (let j = 0; j < rank.length; j++) {
        if (typeof(rank[j])==='string') {
          letter = 'rank-' + rank[j].toLowerCase();
        } else {
          letter = 'rank-' + rank[j];
        }
        let suitPic = '';
        if (suit[i] === 'spades') {
          suitPic = suitPicArr[0]
        } else if (suit[i] === 'clubs') {
          suitPic = suitPicArr[1]
        } else if (suit[i] === 'hearts') {
          suitPic = suitPicArr[2]
        } else if (suit[i] === 'diams') {
          suitPic = suitPicArr[3]
        }
        let card = {suitClass: suit[i], suitVal: suitPic, rankClass: letter, rank: rank[j]};
        this.cardDeck.push(card);
      }
    }
  };

  getCard () {
    let index = Math.floor(Math.random()*totalCards);
    const pickedCard = this.cardDeck.splice(index,1);
    totalCards = this.cardDeck.length;
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
