import React from 'react';

class StartButton extends React.Component {
    render() {
        return(<button className='start-btn' type='button' onClick={this.props.startGame}>start</button>);  
    }
    
}

export default StartButton;