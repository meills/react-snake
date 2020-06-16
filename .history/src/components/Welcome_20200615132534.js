import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'

function Welcome() {
    return(<div className='welcome'>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;