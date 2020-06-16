import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'
import SnakeImage from './244786.png'

function Welcome() {
    return(<div className='welcome'>
                <img src={SnakeImage} alt='snake game logo'></img>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;