import React from 'react';
import Snakeboard from './components/Snakeboard.js';
import Welcome from './components/Welcome.js';
import GameOver from './Components/Welcome.js';
import './styles/App.css';
import './styles/snakeboard.css';

const GRID_SIZE = 30;
const TICK_TIME = 100;

class App extends React.Component {
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


  render() {

    if (gameStart) {
      return (<div className="snake-container"> 
                <Snakeboard />
              </div>);
    } 
    
    if (!gameStart) {
      return (<div className="snake-container"> 
      <Welcome />
    </div>);
    }

    if (gameOver) {

    }
     

  }

}

export default App;
