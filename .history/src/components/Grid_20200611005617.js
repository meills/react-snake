import React from 'react';

const GRID_SIZE = 10;
const TICK_TIME = 500;

class Grid extends React.Component {
    state = {
        rows: GRID_SIZE,
        cols: GRID_SIZE,
        grid: [],
        food: {},
        snake: {
            head: {},
        },
        currDir: 'right',
        tickTime: TICK_TIME,
    }    

    initGrid() {
        const grid = [];
        const food = this.getFood();
        const snake = {head: this.getGridCenter()};
   
        for (let row = 0; row < this.state.rows; row++) {
          for (let col = 0; col < this.state.cols; col++) {
            const isFood = row === food.row && col === food.col;
            const isHead = row === snake.head.row && col === snake.head.col;
            grid.push({ row, col, isFood, isHead});
          }
        } 

        this.setState({grid: grid, food: food, snake: snake,});
    }

    resetGrid(state) {
        const grid = [];

        for (let row = 0; row < state.rows; row++) {
          for (let col = 0; col < state.cols; col++) {
            const isFood = row === state.food.row && col === state.food.col;
            const isHead = row === state.snake.head.row && col === state.snake.head.col
            grid.push({ row, col, isFood, isHead});
          }
        }  
        this.setState({grid: grid});
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
        let {currDir} = this.state;
        let {row, col} = this.state.snake.head

        //console.log(this.state.snake.head.col);

        switch (currDir) {
            case 'left':
                this.setState({col: col--});
                break;

            case 'right':
                this.setState({snake: {head: {row: row, col: ++col,}}});
                break;

            case 'up':
                this.setState({row: row--});
                break;

            case 'down':
                this.setState({row: row++});
                break;

            default:
                break;
        }

        //console.log(this.state.grid);

        this.resetGrid(this.state);
    }

   componentDidMount() {
        this.initGrid();
            

       //console.log(this.state.grid);
        window.fnInterval = setInterval(() => {
            this.gameTick();
            console.log(this.state);
        }, this.state.tickTime);
        
    }

    render() {
        const gridItems = this.state.grid.map((grid) => {
            return <div key={grid.row.toString() + "," + grid.col.toString()} 
                        className={ (grid.isFood ? "grid-item is-food" : "grid-item") 
                                  + (grid.isHead ? " snake-head" : "") }> 
                    </div>;
        });

    return (<div className='grid'> {gridItems} </div>);
    }
}

export default Grid;