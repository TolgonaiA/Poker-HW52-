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
          <Card rankVal="K" suitVal="&spades;" rankClass="rank-k" suitClass="spades"/>
        </div>
      </div>
    );
  };
};



export default App;