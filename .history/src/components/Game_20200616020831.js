import React from 'react';
import Snakeboard from './Snakeboard';

class Game extends React.Component {

    render() {
        return (<Snakeboard endGame={this.props.endGame}/>);
    }

}

export default Game;