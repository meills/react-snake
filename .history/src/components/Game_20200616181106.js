import React from 'react';
import SnakeBoard from './Snakeboard.js';
import ScoreBoard from './ScoreBoard.js';

function Game(props) {
    return (<div>
                <SnakeBoard endGame={props.endGame}/> 
                <ScoreBoard />
            </div>);
}

export default Game;