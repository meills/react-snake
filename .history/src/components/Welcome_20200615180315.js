import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'

function Welcome() {
    return(<div className='welcome'>
                <a href='../../public/244786.png'></a>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;