import { Component } from 'react';
import Joke from './Joke';
import './DadJokesContainer.css';
import axios from 'axios';

class DadJokesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      isLoading: false
    };

    this.seenJokes = new Set(this.state.jokes.map(joke => joke.id));
    this.handleVote = this.handleVote.bind(this);
    this.getJokes = this.getJokes.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    this.setState({
      isLoading: true
    });
    const jokes = [];
    for (let i = 0; i < 10; i++) {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
      const newJoke = response.data
      if (!this.seenJokes.has(newJoke.id)) {
        newJoke.score = 0;
        this.seenJokes.add(newJoke.id);
        jokes.push(newJoke);
      }
    }
    
    this.setState({
      jokes: [...this.state.jokes, ...jokes],
      isLoading: false
    }, () => {
      window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
    });
  }

  handleVote(id, type) {
    const joke = this.state.jokes.find(joke => joke.id === id);
    const jokes = this.state.jokes.filter(joke => joke.id !== id);

    if (type === "up") {
      joke.score += 1;
    } else {
      joke.score -= 1;
    }

    jokes.push(joke);
    jokes.sort((a, b) => {
      return b.score - a.score;
    });

    window.localStorage.setItem("jokes", JSON.stringify(jokes));

    this.setState({ jokes });
  }

  render() {
    return this.state.isLoading 
      ? (
        <div className="DadJokesContainer-loading">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <div>Loading...</div>
        </div>
      )
      :(
        <div className="DadJokesContainer">
          <div className="DadJokesContainer-leftContainer">
            <h1 className="DadJokesContainer-title">Dad <span>JOKES</span></h1>
            <img alt="Emoji" src="https://i.pinimg.com/originals/5c/99/6e/5c996e6663a3c2ef1b92ad9ef13ffef7.png" />
            <button onClick={this.getJokes}>New Jokes</button>
          </div> 
          <div className="DadJokesContainer-rightContainer">
            {
              this.state.jokes.map(joke => {
                return (
                  <Joke
                    id={joke.id}
                    key={joke.id}
                    description={joke.joke} 
                    score={joke.score}
                    vote={this.handleVote}
                  />
                );
              })
            }
          </div> 
        </div>
      );
  }
}

export default DadJokesContainer;