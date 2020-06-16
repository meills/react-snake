import React from 'react';

function StartButton(props) {
    render() {
        return(<button className='start-btn' type='button' onClick={this.props.startGame}>start</button>);  
    }
    
}

export default StartButton;