import React from 'react';

function PlayAgainButton(props)){
    render() {
        return(<button className='start-btn' type='button' onClick={this.props.startGame}>play again</button>);  
    }
    
}

export default PlayAgainButton;