import React from 'react';
import GameOverMessage from './GameOverMessage.js';
import PlayAgainButton from './PlayAgainButton.js';


function GameOver(props) {
    return (<div className='game-message-window'>
                <GameOverMessage />
                <Score />
                <PlayAgainButton startGame={props.startGame}/> 
            </div>);
}

export default GameOver;