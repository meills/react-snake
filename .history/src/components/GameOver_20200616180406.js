import Game from "./Game";
import GameOverMessage from './GameOverMessage.js';
import PlayAgainButton from './PlayAgainButton.js';
import React from 'react';

function GameOver() {


    render() {
        return (<div className='game-message-window'>
                    <GameOverMessage />
                    <PlayAgainButton /> 
                </div>);
    }
}

export default GameOver;