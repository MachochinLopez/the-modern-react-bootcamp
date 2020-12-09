import { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        const { pokecards, isWinner, totalExp } = this.props;
        
        let title;
        if (isWinner) {
            title = <h1 className="Pokedex-winner">WINNER HAND!</h1>; 
        } else {
            title = <h1 className="Pokedex-loser">LOSER HAND!</h1>; 
        }

        return (
            <div className="Pokedex">
                { title }
                <h4>Total experience: { totalExp }</h4>
                <div className="Pokedex-cards">
                    {
                        pokecards.map((pokecard, index) => {
                            return <Pokecard key={index}
                                id={pokecard.id}
                                name={pokecard.name}
                                type={pokecard.type}
                                experience={pokecard.base_experience}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pokedex;