import { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        imgs: ["https://www.automotivesupplynews.com.mx/wp-content/uploads/2017/01/peso.png", "https://qph.fs.quoracdn.net/main-qimg-1ef972dc05fb50af499160db2f563507"]
    }
    
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            totalFlips: 0,
            totalHeads: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        // Saca 1 o 0 al azar.
        const face = Math.round(Math.random());
        // Suma de los totalFlips
        const totalFlips = this.state.totalFlips + 1;
        // Si cayó cara lo agrega al contador de caras.
        const totalHeads = this.state.totalHeads + face;
        // Escoge la imagen correspondiente.
        const img = this.props.imgs[face]; 
        // Crea el nuevo objeto para state-
        const newState = { totalFlips, totalHeads , img};
        // Lo asigna
        this.setState(newState);
    }

    render() {
        const { img, totalFlips, totalHeads } = this.state;
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin img={img} />
                <button onClick={this.flipCoin}>FLIP MEEE!</button>
                <p>Out of {totalFlips} flips, there have been {totalHeads} heads and {totalFlips - totalHeads} tails</p>
            </div>
        );
    }
}

export default CoinFlip;