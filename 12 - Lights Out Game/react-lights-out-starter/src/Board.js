import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  static defaultProps = {
    ncols: 6,
    nrows: 6,
    chanceLightStartsOn: Math.random()
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.drawBoard()
    }

    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  // Dibuja el tablero.
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  drawBoard = () => {
    let board = [];
  
    // Por cada row...
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      // Por cada columna...
      for (let y = 0; y < this.props.ncols; y++) {
        // Define si el botón está encendido o apagado.
        const isLit = Math.random() > this.props.chanceLightStartsOn 
          ? true 
          : false;
        // Lo mete a la row.
        row.push(isLit);
      }
      // Lo mete al tablero.
      board.push(row);
    }
  
    return board;
  };


  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y, x + -1);

    const hasWon = this.state.board.every(row => {
      return row.every(col => {
        return col == false
      });
    });

    this.setState({ hasWon, board });
  }


  /** Render game board or winning message. */
  render() {

    const content = this.state.hasWon 
      ? (<p>YOU WON!</p>) 
      : (
          <table className="Board">
            <tbody>
              {
                // Por cada columna...
                this.state.board.map((col, row) => {
                  return (
                      <tr key={row} className="Board-row">
                        {
                          // Dibujamos una celda...
                          col.map((cell, col) => {
                            const coord = `${row}-${col}`;
    
                            return <Cell 
                              key={coord} 
                              isLit={cell}
                              flipCellsAroundMe={() => { this.flipCellsAround(coord) }}
                            />
                          })
                        }
                      </tr>
                    )
                })
              }
            </tbody>
          </table>
        );

    return (
      <div>
        <div className="Board-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        {content}
      </div>
    ); 
  }
}

export default Board;
