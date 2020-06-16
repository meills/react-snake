import React from 'react';

function ScoreBoard(props) {
    console.log(props.score);
    return(<div>{props.score}</div>);
    
}

export default ScoreBoard;