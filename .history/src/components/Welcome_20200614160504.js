import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'

function Welcome() {
    return(<div className='grid'>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;