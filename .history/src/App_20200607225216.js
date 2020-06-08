import React from 'react';
import Grid from './components/Grid.js';
import './styles/App.css';



class App extends React.Component {
  constructor(props) {
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
    
    this.setState({ grid: grid });
  }


  render() {
    

    return (
      <div className="snake-container"> 
        <Grid />
      </div>
    )
  }
 
}

export default App;
