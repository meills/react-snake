import React from 'react';
import Game from './components/Game.js';
import Welcome from './components/Welcome.js';
import GameOver from './components/GameOver.js';
import './styles/App.css';
import './styles/snakeboard.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    //this.startGame = this.startGame.bind(this);
    //this.endGame = this.endGame.bind(this);
  }

  state = {
    gameStart: false,
    gameOver: false,
  } 

  /*startGame() {
    this.setState({gameStart: true, gameOver: false});
  }

  endGame() {
    this.setState({gameStart:false, gameOver: true});
  }*/

  render() {
    /*if (this.state.gameStart && !this.state.gameOver) {
      console.log("game starting")
      return (<div className='snake-container'> 
                <Game endGame={this.endGame}/>
              </div>);
    } 
    
    if (this.state.gameOver && !this.state.gameStart) {
      console.log("game over")
      return(<div className='snake-container'><GameOver startGame={this.startGame}/></div>)
    }*/

    if (!this.state.gameStart && !this.state.gameOver) {
      console.log("welcome")
      return (<div className='snake-container'> 
      hello
              </div>);
    }
  }

}

export default App;
