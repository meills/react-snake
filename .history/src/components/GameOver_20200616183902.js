import GameOverMessage from './GameOverMessage.js';
import PlayAgainButton from './PlayAgainButton.js';
import React from 'react';

function GameOver(props) {
    return (<div className='game-message-window'>
                <GameOverMessage />
                <PlayAgainButton startGame={props.startGame}/> 
            </div>);
}

export default GameOver;