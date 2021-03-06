import React from 'react';

const GRID_SIZE = 10;
const TICK_TIME = 5000;

class Grid extends React.Component {
    constructor() {
        super();

        //Initiate state 
        this.state = {
          rows: GRID_SIZE,
          cols: GRID_SIZE,
          grid: [],
          food: {},
          snake: {
              head: {},
          },
          currDir: 'right',
          tickTime: TICK_TIME,
        };

        const grid = [];
        const snake = {head: {}};
        const food = this.getFood();
        
        snake.head = this.getGridCenter();
        console.log(snake.head);

        //this.setState = {snake: { head: this.getGridCenter(), }};

        for (let row = 0; row < this.state.rows; row++) {
          for (let col = 0; col < this.state.cols; col++) {
            const isFood = row === food.row && col === food.col;
            const isHead = row === snake.head.row && col === snake.head.col
            this.state.grid.push({ row, col, isFood, isHead});
          }
        }
        
        this.setState = {grid: grid};
        
        console.log(this.state.grid);
    }

    getFood() {

        return {
            row: Math.floor(Math.random() * GRID_SIZE), 
            col: Math.floor(Math.random() * GRID_SIZE),
        };
    }

    getGridCenter() {
        return ({ 
            row: Math.floor(GRID_SIZE/2),
            col: Math.floor(GRID_SIZE/2),
        });
    }

    gameTick() {
        console("snake moving");
        let {currDir} = this.state;
        let {row, col} = this.state.snake.head;

        switch (currDir) {
            case 'left':
                col--;
                break;

            case 'right':
                col++;
                break;

            case 'up':
                row--;
                break;

            case 'down':
                row++;
                break;

            default:
                break;
        }
    }

   componentDidMount() {
        window.fnInterval = setInterval(() => {
            this.gameTick();
        }, this.state.tickTime);
    }

    render() {
        const gridItems = this.state.grid.map((grid) => {
            return <div key={grid.row.toString() + "," + grid.col.toString()} 
                        className={(grid.isFood ? "grid-item is-food" : "grid-item") + (grid.isHead ? " snake-head" : "") }> 
                    </div>;
        });

    return (<div className='grid'> {gridItems} </div>);
    }
}

export default Grid;