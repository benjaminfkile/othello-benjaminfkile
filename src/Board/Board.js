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

        this.setState({ squares: temp })

    }



    flip = (args, row, col) => {


        let temp = args

        if (this.state.player === 1) {
            console.log('P1')
            if (row > 0 && col > 0) {
                for (let i = 0; i < 8; i++) {
                    if (temp[row][i].owner === "P2") {
                        temp[row][i].owner = "P1"
                    }
                    if (temp[i][col].owner === "P2") {
                        temp[i][col].owner = "P1"
                    }
                }
            }
        }

        //they have to change within a straight line fool

        if (this.state.player === 2) {
            console.log('P2')
            if (row > 0 && col > 0) {
                for (let i = 0; i < 8; i++) {
                    if (temp[row][i].owner === "P1") {
                        temp[row][i].owner = "P2"
                    }
                    if (temp[i][col].owner === "P1") {
                        temp[i][col].owner = "P2"
                    }
                }
            }
        }

        console.log(this.state.player)


        this.setState({ squares: temp })
    }

    render() {

        // console.log(this.state.player)

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
            </div>
        )
    }
}

export default Board