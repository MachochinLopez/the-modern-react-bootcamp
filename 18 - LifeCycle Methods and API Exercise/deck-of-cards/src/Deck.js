import { Component } from 'react';
import './Deck.css';
import axios from 'axios';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: '',
            cards: [],
            isLoading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
        this.setState({
            deckId: response.data.deck_id
        });
    }

    async handleClick() {
        this.setState({
            isLoading: true
        });

        const response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`);

        if (response.data.success) {
            const degrees = Math.floor(Math.random() * 45);
            const inclination = Math.random() > 0.5 ? -degrees : degrees;
            const xPos = Math.random() * 40 - 20;
            const yPos = Math.random() * 40 - 20;
            response.data.cards[0].inclination = inclination;
            response.data.cards[0].xPos = xPos;
            response.data.cards[0].yPos = yPos;

            this.setState({
                cards: [...this.state.cards, response.data.cards[0]]
            });
        } else {
            alert("No more cards!");
        }

        this.setState({
            isLoading: false
        })
    }

    render() {
        return (
            <div className="Deck">
                <h1 className="Deck-title">CARD DEALER</h1>
                <h3 className="Deck-title">A LITTLE DEMO MADE WITH REACT</h3>
                <button className="Deck-button" onClick={this.handleClick}>DEAL ME A CARD!</button>
                <div className="Deck-cards" style={ this.state.isLoading ? {opacity: 0.8} : {}}>
                    {
                        this.state.cards.map(card => {
                            return <img 
                                    style={{transform: `rotate(${card.inclination}deg) translate(${card.xPos}px, ${card.yPos}px)`}}
                                    src={card.image} 
                                    alt={`${card.value} OF ${card.suit}`}
                                    key={card.code}
                                />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Deck;