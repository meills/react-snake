import React from 'react';
import Game from './components/Game.js';
import Welcome from './components/Welcome.js';
import GameOver from './components/GameOver.js';
import './styles/App.css';
import './styles/snakeboard.css';

const GRID_SIZE = 30;
const TICK_TIME = 100;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  state = {
    rows: GRID_SIZE,
    cols: GRID_SIZE,
    grid: [],
    food: {},
    snake: {
        head: {},
        tail: [],
    },
    currDir: 'left',
    tickTime: TICK_TIME,
    gameStart: false,
    gameOver: {
      isOver: false, 
      snakeAteTail: false,
      snakeHitWall: false,
    }
  } 

  startGame() {
    this.setState({gameStart: true});
  }

  endGame() {
    this.setState({gameStart:false, gameOver: true});
  }


  render() {

    if (this.state.gameStart) {
      return (<div className='snake-container'> 
                <Game endGame={this.endGame}/>
              </div>);
    } 
    
    if (this.state.gameOver) {
      return(<div className='snake-container'> <GameOver /> </div>)
    }

    if (!this.state.gameStart) {
      return (<div className='snake-container'> 
                <Welcome startGame={this.startGame} />
              </div>);
    }
     

  }

}

export default App;
