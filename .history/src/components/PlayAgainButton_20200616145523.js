import React from 'react';

class PlayAgainButton extends React.Component {
    render() {
        return(<button className='start-btn' type='button' onClick={this.props.startGame}>play again</button>);  
    }
    
}

export default PlayAgainsButton;