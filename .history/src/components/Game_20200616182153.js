import React from 'react';
import SnakeBoard from './SnakeBoard.js';

function Game(props) {
    return (<div>
                <SnakeBoard endGame={props.endGame}/> 
            </div>);
}

export default Game;