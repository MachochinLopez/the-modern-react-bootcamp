import { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    render() {
        const { pokecards } = this.props;
        const { firstHand, secondHand } = getHandsAndWinner(pokecards);
        return (
            <div>
                <Pokedex
                    pokecards={firstHand}
                    totalExp={firstHand.totalExp}
                    isWinner={firstHand.isWinner}
                />
                <Pokedex
                    pokecards={secondHand}
                    totalExp={secondHand.totalExp}
                    isWinner={secondHand.isWinner}
                />
            </div>
        );
    }
}

/**
 * Devuelve las manos con sus pokemones y mostrando quién gana.
 * @param {array} pokecards 
 */
function getHandsAndWinner(pokecards) {
    let hands = pickHands(pokecards);
    hands = indicateWinner(hands);
    return hands;
}

/**
 * Distribuye las cartas equitativamente.
 * @param {array} pokecards 
 */
function pickHands(pokecards) {
    // Determinamos cuántas cartas se jugarán en cada mano repartiendo
    // equitativamente las cartas.
    const half = (pokecards.length % 2) === 0
        ? (pokecards.length / 2)
        : ((pokecards.length / 2) - 1);
    // Definimos los arreglos que guardarán las manos.
    let firstHand = [], secondHand = [];
    // Arreglo auxiliar.
    let arr = pokecards;

    for (let i = 0; i < half * 2; i++) {
        // Elegimos un índice al azar del arreglo.
        const randomNumber = Math.floor(Math.random() * arr.length);
        // Seleccionamos una pokecard del arreglo.
        const selectedPokecard = arr[randomNumber];

        // Lo incorporamos a alguna de las manos.
        if (i % 2 === 0) {
            firstHand.push(selectedPokecard);
        } else {
            secondHand.push(selectedPokecard);
        }

        // Lo sacamos del arreglo.
        arr = arr.filter(el => el !== selectedPokecard);
    }

    return { firstHand, secondHand };
}

/**
 * Determina la mano ganadora y le agrega el parámetro de isWinner.
 * @param {object} hands 
 */
function indicateWinner(hands) {
    // Calcula el nivel de experiencia de cada mano.
    hands.firstHand.totalExp = getExperienceLevel(hands.firstHand);
    hands.secondHand.totalExp = getExperienceLevel(hands.secondHand);
    
    // Modifica la mano y le agrega el parámetro isWinner.
    if (hands.firstHand.totalExp > hands.secondHand.totalExp) {
        hands.firstHand.isWinner = true;
    } else {
        hands.secondHand.isWinner = true;
    }

    return hands;
}

/**
 * Devuelve la cantidad de experiencia de la mano.
 * @param {array} hand 
 */
function getExperienceLevel(hand) {
    return hand.reduce((totalExp, pokecard) => totalExp + pokecard.base_experience, 0);
}

export default Pokegame;