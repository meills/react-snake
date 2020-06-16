import React from 'react';
import GameOverMessage from './GameOverMessage.js';
import PlayAgainButton from './PlayAgainButton.js';
import Score from './Score.js';

function GameOver(props) {
    return (<div className='game-message-window'>
                <GameOverMessage />
                <Score score={props.score}/>
                <PlayAgainButton startGame={props.startGame}/> 
            </div>);
}

export default GameOver;