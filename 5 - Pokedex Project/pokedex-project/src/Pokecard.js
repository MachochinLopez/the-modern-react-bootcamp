import { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const { id, name, type, experience } = this.props;
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                    <img src={img} alt={name} />
                </div>
                <p className="Pokecard-data">Type: {type}</p>
                <p className="Pokecard-data">EXP: {experience}</p>
            </div>
        );
    }
}

function addZeros(number) {
    const amountOfZeros = 3 - number.toString().length;

    return `${"0".repeat(amountOfZeros)}${number}`;
}

export default Pokecard;