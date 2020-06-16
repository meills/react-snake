import React from 'react';

function StartButton(props) {
    return(<button className='start-btn' type='button' onClick={props.startGame}>start</button>);  
}

export default StartButton;