import React from 'react';

function PlayAgainButton(props){
    return(<button className='start-btn play-again-btn' type='button' onClick={props.startGame}>play again</button>);  
}

export default PlayAgainButton;