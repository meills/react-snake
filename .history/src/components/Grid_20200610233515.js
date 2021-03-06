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


    resetGrid() {
        const grid = [];
        const snake = {head: {}};
        const food = this.getFood();
        
        snake.head = this.getGridCenter();
        this.state.snake.head = snake.head;

        //this.setState = {snake: { head: this.getGridCenter(), }};

        for (let row = 0; row < this.state.rows; row++) {
          for (let col = 0; col < this.state.cols; col++) {
            const isFood = row === food.row && col === food.col;
            const isHead = row === snake.head.row && col === snake.head.col
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
                let newCol = col + 1;
                console.log(col);
                this.setState({snake: {head: {row: row, col: newCol,}}});
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
    }

   componentDidMount() {
        this.resetGrid();

       //console.log(this.state.grid);
        window.fnInterval = setInterval(() => {
            this.gameTick();
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