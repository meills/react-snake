import React from 'react';

const GRID_SIZE = 10;

class Grid extends React.Component {
    constructor() {
        super();

        //Initiate state 
        this.state = {
          rows: GRID_SIZE,
          cols: GRID_SIZE,
          grid: [],
        };
    
        const grid = [];
    
        const food = this.getFood();

        for (let row = 0; row < this.state.rows; row++) {
          for (let col = 0; col < this.state.cols; col++) {
            const isFood = this.row == food.row && this.col == food.col;
            grid.push({ row, col, isFood});
          }
        }
        
        this.state.grid = grid;
    }

    getFood() {
        return {
            row: Math.floor(Math.random() * GRID_SIZE), 
            col: Math.floor(Math.random() * GRID_SIZE),
        };
    }

    componentDidMount() {
        const food = this.getFood();
    }

    render() {
        const gridItems = this.state.grid.map((grid) => {
            return <div key={grid.row.toString() + "," + grid.col.toString()} className={grid.isFood ? 'grid-item' : 'grid-item is-food'}></div>;
        });

    return (<div className='grid'> {gridItems} </div>);
    }
}

export default Grid;