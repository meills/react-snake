import React from 'react';
import { render } from '@testing-library/react';

class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
      }
    
      startGame() {
        alert('Hello!');
      }

    render() {
        return(<div className='start-btn'><button type='button'>start</button></div>);  
    }
    
}

export default StartButton;