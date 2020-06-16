import React from 'react';
import Snakeboard from './components/Snakeboard.js';
import './styles/App.css';
import './styles/snakeboard.css';


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
    return (<div className="snake-container"> 
              <Snakeboard />
            </div>);
  }

}

export default App;
