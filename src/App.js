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



class App extends Component {
  state = {
    cards: cards,
    hand: hand,
    leftDeck: myNewDeck
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


    this.setState({
      cards: newCards,
      hand: newHand,
      leftDeck: myNewDeck
    })
  };


  changeCards = () => {
    let newCards = myNewDeck.getCards(5);
    console.log(newCards)
    let myHand = new PokerHand(newCards);
    let newHand = myHand.getOutCome();
    console.log(myNewDeck);

    this.setState({
      cards: newCards,
      hand: newHand,
      leftDeck: myNewDeck
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
        <div className='btn-wrap'>
          <button className='btn' onClick={this.changeDeck}>New Deck</button>
          <button className='btn' onClick={this.changeCards}>Change Deck</button>
        </div>
      </div>
    );
  };

};







export default App;