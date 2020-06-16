import React from 'react';
import SnakeBoard from './SnakeBoard.js';
import ScoreBoard from './ScoreBoard.js';

function Game(props) {
    return (<div>
                <Snake endGame={props.endGame}/> 
            </div>);
}

export default Game;