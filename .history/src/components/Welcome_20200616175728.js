import React from 'react';
import WelcomeMessage from './WelcomeMessage.js'
import StartButton from './StartButton.js'
import SnakeImage from '../images/244786.png'

class Welcome extends React.Component {

    render() {
        return(<div className='snake-title'>
        <WelcomeMessage />
        <img src={SnakeImage} alt='snake game logo' className="snake-image"></img>
        
        <StartButton startGame={this.props.startGame} />
         </div>);
    }

}

export default Welcome;