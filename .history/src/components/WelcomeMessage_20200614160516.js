import React from 'react';

function WelcomeMessage() {
    return(<div className='grid'>
                <WelcomeMessage />
                <StartButton />
           </div>);
}

export default WelcomeMessage;