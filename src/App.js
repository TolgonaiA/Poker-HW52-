import Card from './Card/Card';
import CardDeck from './CardDeck';
import { Component } from 'react';
let myDeck = new CardDeck();
let cards = myDeck.getCards(5);
console.log(cards);



class App extends Component {
  state = {
    cards: cards
  };


  changeCards = () => {
    let newMyDeck = new CardDeck();
    let newCards = newMyDeck.getCards(5);

    this.setState({
      cards: newCards
    })
  };



  render () {
    return (
      <div className='wrap'>
        <div className="playingCards">
          <div className="playingCards fourColours faceImages">
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
        <div className='btn-wrap'>
          <button onClick={this.changeCards}>Change cards</button>
        </div>
      </div>
    );
  };
};


export default App;