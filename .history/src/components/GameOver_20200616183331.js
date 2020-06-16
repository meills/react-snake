import GameOverMessage from './GameOverMessage.js';
import PlayAgainButton from './PlayAgainButton.js';
import React from 'react';

function GameOver(props) {
    return (<div className='game-message-window'>
                <GameOverMessage />
                <PlayAgainButton restartGame={props.restartGame}/> 
            </div>);
}

export default GameOver;