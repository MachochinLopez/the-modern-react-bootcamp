import { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        const { face, isRolling } = this.props;
        const dieFaceClass = `fas fa-dice-${getTextNumber(face)}`;
        const classes = `Die ${ isRolling ? 'Die-rolling' : ''}`;
        return (
            <div className={classes}>
                <i class={dieFaceClass}></i>
            </div>
        );
    }
}

const getTextNumber = (number) => {
    let result = 'one';
    switch(number) {
        case 2: {
            result = 'two';
            break;
        }
        case 3: {
            result = 'three';
            break;
        }
        case 4: {
            result = 'four';
            break;
        }
        case 5: {
            result = 'five';
            break;
        }
        case 6: {
            result = 'six';
            break;
        }
        default: {
            break;
        }
    } 

    return result;
}

export default Die;