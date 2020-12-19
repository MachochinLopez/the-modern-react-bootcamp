import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, idx) => (
      <button
        key={idx}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  restart() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /** render: render game */
  render() {
    const hasWon = this.guessedWord().join("") === this.state.answer;
    const hasLost = this.state.nWrong >= this.props.maxWrong;

    const words = !(hasLost) 
      ? <p className='Hangman-word'>{this.guessedWord()}</p>
      : '';
    // Si supera el máximo de errores...
    const buttons = !(hasLost || hasWon) 
      ? <p className='Hangman-btns'>{this.generateButtons()}</p>
      : hasWon ? '' : (
          <div>
            <p>The correct word was:</p>
            <p className='Hangman-word'><strong>{this.state.answer}</strong></p>
          </div>
        );

    const message = (<div>
      {(hasLost && <p>YOU LOST!</p>)}
      {(hasWon && <p>YOU WON!</p>)}
      <button className="Hangman-restart" onClick={this.restart}>Restart</button>
    </div>)
  
    const imgNumber = `${this.state.nWrong}/6`;
    
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={imgNumber} />
        <p>Number wrong: {imgNumber}</p>
        {words}
        {buttons}
        { (hasLost || hasWon) && message}
      </div>
    );
  }
}

export default Hangman;
