import React from 'react';
import Snakeboard from './Snakeboard.js';
import ScoreBoard from './ScoreBoard.js';

function Game(props) {
    return (<div>
                <Snakeboard endGame={props.endGame}/> 
                <ScoreBoard />
            </div>);
}

export default Game;