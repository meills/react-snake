import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'

function Welcome() {
    return(<div className='welcome'>
                <img src='./244786.png' alt='snake game logo'></img>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;