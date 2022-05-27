import Card from './Card/Card';
import CardDeck from './CardDeck';
import { Component } from 'react';
const myDeck = new CardDeck();
let cards = myDeck.getCards(5);
console.log(cards);



class App extends Component {
  state = {
    cards: cards
  }

  render () {
    return (
      <div className="playingCards">
        <div className="playingCards fourColours faceImages">
          <Card rankVal={this.state.cards[0].rank} rankClass={this.state.cards[0].rankClass} suitClass={this.state.cards[0].suitClass}/>
          <Card rankVal={this.state.cards[1].rank} rankClass={this.state.cards[1].rankClass} suitClass={this.state.cards[1].suitClass}/>
          <Card rankVal={this.state.cards[2].rank} rankClass={this.state.cards[2].rankClass} suitClass={this.state.cards[2].suitClass}/>
          <Card rankVal={this.state.cards[3].rank} rankClass={this.state.cards[3].rankClass} suitClass={this.state.cards[3].suitClass}/>
          <Card rankVal={this.state.cards[4].rank} rankClass={this.state.cards[4].rankClass} suitClass={this.state.cards[4].suitClass}/>
        </div>
      </div>
    );
  };
};



export default App;