import React from 'react';
import Snakeboard from './components/Snakeboard.js';
import Welcome from './components/Welcome.js';
import GameOver from './components/Welcome.js';
import './styles/App.css';
import './styles/snakeboard.css';

const GRID_SIZE = 30;
const TICK_TIME = 100;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
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
    gameOver: false,
  } 

  startGame() {
    this.setState({gameStart: true});
  }


  render() {

    if (this.state.gameStart) {
      return (<div className="snake-container"> 
                <Snakeboard />
              </div>);
    } 
    
    if (!this.state.gameStart) {
      return (<div className="snake-container"> 
                <Game startGame={this.startGame} />
              </div>);
    }

    if (this.state.gameOver) {

    }
     

  }

}

export default App;
