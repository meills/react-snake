import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'

function Welcome() {
    return(<div className='welcome'>
                <img href='../../public/244786.png'></img>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default Welcome;