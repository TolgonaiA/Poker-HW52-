import Card from './Card/Card';
import CardDeck from './CardDeck';
import PokerHand from './PokerHand';
import { Component } from 'react';
import './App.css';
let myDeck = new CardDeck();
let cards = myDeck.getCards(5);
let myHand = new PokerHand(cards);
let hand = myHand.getOutCome();



class App extends Component {
  state = {
    cards: cards,
    hand: hand
  };


  changeCards = () => {
    let newMyDeck = new CardDeck();
    let newCards = newMyDeck.getCards(5);
    console.log(newCards)
    let myHand = new PokerHand(newCards);
    let newHand = myHand.getOutCome();
    console.log(newHand)


    this.setState({
      cards: newCards,
      hand: newHand
    })
  };


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
          <button className='btn' onClick={this.changeCards}>New Deck</button>
        </div>
      </div>
    );
  };
};







export default App;