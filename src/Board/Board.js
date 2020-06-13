import React, { Component } from 'react'
import './Board.css'

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: [],
            player: 1,
        }
    }

    componentDidMount() {

        this.buildSquares()

    }

    handleClick = (args) => {

        let temp = this.state.squares

        if (this.state.player === 1) {
            this.setState({ player: 2 })
            temp[args.row][args.col].owner = "P1"
        } else {
            this.setState({ player: 1 })
            temp[args.row][args.col].owner = "P2"

        }
        this.flip(temp, args.row, args.col)
    }

    buildSquares = () => {

        let temp = []
        let midRow = Math.floor(this.props.rows / 2)
        let midCol = Math.floor(this.props.cols / 2)

        for (let i = 0; i < this.props.rows; i++) {
            temp.push([])
            for (let j = 0; j < this.props.cols; j++) {
                temp[i].push({ row: i, col: j, owner: null })
            }
        }

        temp[midRow - 1][midCol].owner = "P1"
        temp[midRow][midCol - 1].owner = "P1"
        temp[midRow - 1][midCol - 1].owner = "P2"
        temp[midRow][midCol].owner = "P2"

        this.getMoves(temp)
    }

    getMoves = (args) => {

        //todo

        let temp = args

        this.setState({ squares: temp })
    }


    flip = (args, row, col) => {

        let temp = args

        if (this.state.player === 1) {
            for (let i = 0; i < this.props.rows; i++) {
                if (temp[i][col].owner === "P2") {
                    temp[i][col].owner = "P1"
                }
            }
            for (let i = 0; i < this.props.rows; i++) {
                if (temp[row][i].owner === "P2") {
                    temp[row][i].owner = "P1"
                }
            }
        } else {
            for (let i = 0; i < this.props.rows; i++) {
                if (temp[i][col].owner === "P1") {
                    temp[i][col].owner = "P2"
                }
            }
            for (let i = 0; i < this.props.rows; i++) {
                if (temp[row][i].owner === "P1") {
                    temp[row][i].owner = "P2"
                }
            }
        }

        

        // this.setState({ squares: temp })
        this.getMoves(temp)
    }

    render() {

        console.log(this.state)

        return (

            <div className="Board">
                {this.state.squares.map((i) => (
                    <div className="Row" key={Math.random() / Math.random()}>
                        {i.map((j) => (
                            <div className="Square" key={j.col} onClick={() => this.handleClick(j)}>
                                {j.owner === "P2" && <div className="P2" key={Math.random() / Math.random()}></div>}
                                {j.owner === "P1" && <div className="P1" key={Math.random() / Math.random()}></div>}
                                {this.state.player === 1 && j.owner === "P1_Hint" && <div className="Hint" key={Math.random() / Math.random()}></div>}
                                {this.state.player === 2 && j.owner === "P2_Hint" && <div className="Hint" key={Math.random() / Math.random()}></div>}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="Game_Stats">
                    {this.state.player === 1 &&
                        <h1>
                            Black
                        </h1>}
                    {this.state.player === 2 &&
                        <h1>
                            White
                        </h1>}
                </div>
            </div>
        )
    }
}

export default Board