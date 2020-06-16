import React from 'react';
import { render } from '@testing-library/react';

class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
      }
    

    render() {
        return(<button className='start-btn' type='button' onClick={this.props.startGame}>start</button>);  
    }
    
}

export default StartButton;