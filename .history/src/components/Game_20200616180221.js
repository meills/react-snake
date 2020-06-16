import React from 'react';
import Snakeboard from './Snakeboard.js';
import ScoreBoard from './ScoreBoard.js';
class Game extends React.Component {

    render() {
        return (<div>
                    <Snakeboard endGame={this.props.endGame}/> 
                    <ScoreBoard />
                </div>);
    }

}

export default Game;