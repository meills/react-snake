import React from 'react';
import Game from './components/Game.js';
import Welcome from './components/Welcome.js';
import GameOver from './components/GameOver.js';
import './styles/App.css';
import './styles/snakeboard.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  state = {
    gameStart: false,
    gameOver: false,
    score: 0,
  } 

  startGame() {
    this.setState({gameStart: true, gameOver: false});
  }

  endGame() {
    this.setState({gameStart:false, gameOver: true});
  }

  setScore(score) {
    this.setState({score: score})
  }

  render() {
    if (this.state.gameStart && !this.state.gameOver) {
      return (<div className='snake-container'> 
                <Game setScore= {this.setScore} endGame={this.endGame}/>
              </div>);
    } 
    
    if (this.state.gameOver && !this.state.gameStart) {
      return(<div className='snake-container'>
                <GameOver startGame={this.startGame}/>
              </div>)
    }

    if (!this.state.gameStart && !this.state.gameOver) {
      return (<div className='snake-container'> 
                <Welcome startGame={this.startGame} />
              </div>);
    }
  }

}

export default App;
