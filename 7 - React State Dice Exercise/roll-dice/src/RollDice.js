import { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: 1,
            die2: 2,
            isRolling: false
        }
        this.roll = this.roll.bind(this);
        this.defaultProps = {
            maxNumber: 6
        };
    }
    roll() {
        const random1 = getRandomNumber(this.defaultProps.maxNumber);
        const random2 = getRandomNumber(this.defaultProps.maxNumber);
        this.setState({ isRolling: true });
            
        setTimeout(() => {
            this.setState({
                isRolling: false,
                die1: random1,
                die2: random2
            });
        }, 1000);
    }
    render() {
        let button;
        if (this.state.isRolling) { 
            button = <button className="RollDice-button" disabled>Rolling...</button>
        } else {
            button = <button className="RollDice-button" onClick={this.roll}>Roll Dice!</button>
        }

        return (
            <div className="RollDice">
                <div className="RollDice-dice">
                    <Die isRolling={this.state.isRolling} face={this.state.die1} />
                    <Die isRolling={this.state.isRolling} face={this.state.die2} />
                </div>
                {button}
            </div>
        );
    }
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
};

export default RollDice;