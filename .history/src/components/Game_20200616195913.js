import React from 'react';
import Snake from './Snake.js';

function Game(props) {
    return (<div>
                <Snake setScore={props.setScore} endGame={props.endGame}/> 
            </div>);
}

export default Game;