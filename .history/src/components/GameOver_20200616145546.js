import Game from "./Game";
import GameOverMessage from './GameOverMessage.js';
import PlayAgainButton from './PlayAgainButton.js';
import React from 'react';

class GameOver extends React.Component {


    render() {
        return (<GameOverMessage />
                <PlayAgainButton />);
    }
}

export default GameOver;