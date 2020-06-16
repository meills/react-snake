import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'
import SnakeImage from '../images/244786.png'

function Welcome() {
    return(<div className='welcome'>
                <WelcomeMessage />
                <img src={SnakeImage} alt='snake game logo' className="snake-image"></img>
                
                <StartButton />
           </div>);
}

export default Welcome;