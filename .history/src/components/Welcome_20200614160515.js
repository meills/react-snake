import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'

function Welcome() {
    return(<div className='grid'>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;