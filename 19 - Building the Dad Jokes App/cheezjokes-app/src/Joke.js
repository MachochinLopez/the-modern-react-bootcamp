import { Component } from 'react';
import './Joke.css';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  getColorAndEmoji() {
    let result = {
      color: '',
      emoji: ''
    };
    
    if (this.props.score >= 15) {
      result.color = "#4CAF50";
      result.emoji = "em em-rolling_on_the_floor_laughing";
    } else if (this.props.score >= 12) {
      result.color = "#8BC34A";
      result.emoji = "em em-laughing";
    } else if (this.props.score >= 9) {
      result.color = "#CDDC39";
      result.emoji = "em em-smiley";
    } else if (this.props.score >= 6) {
      result.color = "#FFEB3B";
      result.emoji = "em em-slightly_smiling_face";
    } else if (this.props.score >= 3) {
      result.color = "#FFC107";
      result.emoji = "em em-neutral_face";
    } else if (this.props.score >= 0) { 
      result.color = "#FF9800";
      result.emoji = "em em-confused";
    } else {
      result.color = "#F44336";
      result.emoji = "em em-angry";
    }

    return result;
  }

  handleUpVote() {
    this.props.vote(this.props.id, 'up');
  }

  handleDownVote() {
    this.props.vote(this.props.id, 'down');
  }

  render() {
    const { color, emoji } = this.getColorAndEmoji();
    return (
      <div className="Joke">
        <div className="Joke-score">
          <button onClick={this.handleUpVote}><i className="fas fa-arrow-up"></i></button>
          <div style={{borderColor: color}} className="Joke-scoreNumber">{this.props.score}</div>
          <button onClick={this.handleDownVote}><i className="fas fa-arrow-down"></i></button>
        </div>
        <div className="Joke-description">{this.props.description}</div>
        <div className="Joke-emoji">
          <i className={emoji}></i>
        </div>
      </div>
    );
  }
}

export default Joke;