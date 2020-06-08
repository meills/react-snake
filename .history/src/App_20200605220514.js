import React, {React.Component} from 'react';
import './styles/App.css';

const GRID_SIZE = 10;

class App extends React.Component {
  
  //Initiate state 
  this.state = {
    rows: GRID_SIZE,
    cols: GRID_SIZE,
    grid: []
  };

  const grid = [];

  for (let row = 0; row < this.state.rows; rows++) {
    for (let col = 0; col < this.state.cols; col++) {
      grid.push({ row, col});
    }
  }
 
}

export default App;
