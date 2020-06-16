import React from 'react';
import Snake from './SnakeBoard.js';

function Game(props) {
    return (<div>
                <Snake endGame={props.endGame}/> 
            </div>);
}

export default Game;