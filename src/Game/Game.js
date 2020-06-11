import React, { Component } from 'react'
import Board from '../Board/Board'


class Game extends Component {

    constructor() {
        super();
        this.state = {
            cols: 8,
            rows: 8,
        }
    }

    render() {
        return (
            <div className="Game">
                <Board 
                cols={this.state.cols}
                rows={this.state.rows}
                />
            </div>
        )
    }
}

export default Game