import {Component} from 'react';
import './cards.css';

class Card extends Component {
  render () {
    return (
      <div className={`card ${this.props.rankClass} ${this.props.suitClass}`}>
        <span className="rank">{this.props.rankVal}</span>
        <span className="suit"></span>
      </div>
    )
  }
}

export default Card