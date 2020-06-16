import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'
import SnakeImage from '../images/244786.png'

function Welcome(props){


        return(<div className='game-message-window'>
        <WelcomeMessage />
        <img src={SnakeImage} alt='snake game logo' className="snake-image"></img>
        <StartButton startGame={props.startGame} />
         </div>);

}

export default Welcome;