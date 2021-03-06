import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'
import SnakeImage from '../images/244786.png'

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div className='welcome'>
        <WelcomeMessage />
        <img src={SnakeImage} alt='snake game logo' className="snake-image"></img>
        
        <StartButton startGame={props.startGame} />
         </div>);
    }

}

export default Welcome;