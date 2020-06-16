import React from 'react';
import SnakeBoard from './SnakeBoard.js';
import ScoreBoard from './ScoreBoard.js';

function Game(props) {
    return (<div>
                <SnakeBoard endGame={props.endGame}/> 
                <ScoreBoard score={props.getscore}/>
            </div>);
}

export default Game;