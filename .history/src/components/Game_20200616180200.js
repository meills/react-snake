import React from 'react';
import Snakeboard from './Snakeboard';

class Game extends React.Component {

    render() {
        return (<div>
                    <Snakeboard endGame={this.props.endGame}/> 
                    <ScoreBoard />
                </div>);
    }

}

export default Game;