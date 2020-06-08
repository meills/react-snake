import React from 'react';

const GRID_SIZE = 10;

class Grid extends React.Component {
    constructor() {
        super();

        //Initiate state 
        this.state = {
          rows: GRID_SIZE,
          cols: GRID_SIZE,
          grid: []
        };
    
        const grid = [];
    
        for (let row = 0; row < this.state.rows; row++) {
          for (let col = 0; col < this.state.cols; col++) {
            grid.push({ row, col});
          }
        }
        
        this.state.grid = grid;
      }

    render() {
        const gridItems = this.state.grid.map((grid) => {
            return <div 
            key={grid.row.toString() + "," +grid.col.toString()} className='grid'></div>;
        });

    return (<div> {gridItems} </div>);
    }
}

export default Grid;