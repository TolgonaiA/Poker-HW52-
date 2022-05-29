import Card from './Card/Card';
import CardDeck from './CardDeck';
import PokerHand from './PokerHand';
import { Component } from 'react';
import './App.css';
let myDeck = new CardDeck();
let cards = myDeck.getCards(5);
let myNewDeck = myDeck;
console.log(myNewDeck);
let myHand = new PokerHand(cards);
let hand = myHand.getOutCome();
let count = 0;

const getScore = (val) => {
  if (val === 'one pair') {
    count = count + 10;
  } else if (val === 'two pairs') {
    count = count + 20;
  } else if (val === 'three of a kind') {
    count = count + 30;
  } else if (val === 'straight') {
    count = count + 40;
  } else if (val === 'flush') {
    count = count + 50;
  } else if (val === 'full house') {
    count = count + 60;
  } else if (val === 'four of a kind') {
    count = count + 70;
  } else if (val === 'straight flush') {
    count = count + 80;
  } else if (val === 'royal flush') {
    count = count + 90;
  } else if (val === 'try again') {
    count = count;
  }
}

getScore(hand);



class App extends Component {
  state = {
    cards: cards,
    hand: hand,
    leftDeck: myNewDeck,
    score: count
  };


  changeDeck = () => {
    let newMyDeck = new CardDeck();
    let newCards = newMyDeck.getCards(5);
    console.log(newCards);
    console.log(newMyDeck);
    myNewDeck = newMyDeck;
    let myHand = new PokerHand(newCards);
    let newHand = myHand.getOutCome();
    console.log(newHand)

    count = 0;

   
    getScore(newHand);


    this.setState({
      cards: newCards,
      hand: newHand,
      leftDeck: myNewDeck,
      score: count
    })
  };


  changeCards = () => {
    let newCards = myNewDeck.getCards(5);
    console.log(newCards)
    let myHand = new PokerHand(newCards);
    let newHand = myHand.getOutCome();
    console.log(myNewDeck);

    
    getScore(newHand);

    this.setState({
      cards: newCards,
      hand: newHand,
      leftDeck: myNewDeck,
      score: count
    })
  }

  
  

  render () {
    return (
      <div className='wrap'>
        <div className="playingCards wrap-block">
          <div className="playingCards fourColours faceImages cards-block">
            {
              this.state.cards.map(card => {
                return (
                  <Card
                  rankVal={card.rank}
                  suitVal={card.suitVal}
                  rankClass={card.rankClass}
                  suitClass={card.suitClass}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='hand'>{this.state.hand}</div>
        <div className='score'>Your bank: {this.state.score} $$$</div>
        <div className='btn-wrap'>
          <button className='btn' onClick={this.changeDeck}>New Deck</button>
          <button className='btn' onClick={this.changeCards}>Change Deck</button>
        </div>
      </div>
    );
  };

};







export default App;