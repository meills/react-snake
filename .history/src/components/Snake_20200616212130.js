import React from 'react';

const GRID_SIZE = 30;
const TICK_TIME = 100;

class Snake extends React.Component {
    state = {
        rows: GRID_SIZE,
        cols: GRID_SIZE,
        grid: [],
        food: {},
        snake: {
            head: {},
            tail: [],
            prevTailStart: {},
        },
        currDir: 'right',
        tickTime: TICK_TIME,
        totorro: false,
    } 


    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    // Game tick function for snake 
    gameTick() {
        let {currDir} = this.state;
        let {row, col} = this.state.snake.head;
        let newRow = row, newCol = col;

        switch (currDir) {
            case 'up':
                --newRow;
                break;

            case 'right':
                ++newCol;
                break;       

            case 'down':
                ++newRow;
                break;

            case 'left':
                --newCol;
                break;

            default:
                break;
        }

        let {food} = this.state;
        let {head} = this.state.snake;
        let {tail} = this.state.snake;

        if (newRow === head.row && newCol === head.col) {
            this.props.endGame();
        }
    
        let newFood = this.state.food;

        let prevTailStart = {};

        if (tail.length > 0) {
            prevTailStart = tail[0];
        }

        // When snake eats food
        if (food.row === row && food.col === col) {
            newFood = this.getFood();
            this.setState({food: newFood});
            tail.unshift(head);
            this.props.setScore(this.state.snake.tail.length);
        } else {
            tail.unshift(head);
            tail.pop();
        }

        this.setState({food: newFood, snake: { head: {row: newRow, col: newCol}, tail: tail, prevTailStart: prevTailStart}});
        this.resetGrid(this.state);
    }


    // Intialises snake grid
    initGrid() {
        const grid = [];
        const food = this.getFood();
        const snake = {head: this.getGridCenter(), tail: [], prevTailStart:{},};
   
        for (let row = 0; row < this.state.rows; row++) {
          for (let col = 0; col < this.state.cols; col++) {
            const isFood = row === food.row && col === food.col;
            const isHead = row === snake.head.row && col === snake.head.col;
            grid.push({ row, col, isFood, isHead});
          }
        } 

        this.setState({grid: grid, food: food, snake: snake,});
    }

    // Resets grid with a given state
    resetGrid(state) {
        const grid = [];

        for (let row = 0; row < state.rows; row++) {
          for (let col = 0; col < state.cols; col++) {
            const isFood = row === state.food.row && col === state.food.col;
            const isHead = row === state.snake.head.row && col === state.snake.head.col;
            let isTail = false;

            for (let i = 0; i < state.snake.tail.length; i++) {
                if (state.snake.tail[i].row === row && state.snake.tail[i].col === col) {
                    isTail = true;
                    break;
                }
            }

            grid.push({ row, col, isFood, isHead, isTail});
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

    checkGameOver() {
        const {row, col} = this.state.snake.head;

        if (col >= GRID_SIZE || row >= GRID_SIZE || col < 0 || row < 0) {
            this.props.endGame();
            return true;
        }


        if (this.state.snake.tail.length > 0) {
            if(this.state.snake.prevTailStart.row === row && this.state.snake.prevTailStart.col === col) {
                this.props.endGame();
                return true;
            }
    
            for (let i = 0; i < this.state.snake.tail.length; i++) {
                if (this.state.snake.tail[i].row === row && this.state.snake.tail[i].col === col) {
                    this.props.endGame();
                    return true;
                }
            }
        }

        return false;
    }

    getGridCenter() {
        return ({ 
            row: Math.floor(GRID_SIZE/2),
            col: Math.floor(GRID_SIZE/2),
        });
    }

    handleKeyPress(e) {
        const {key} = e;

        switch (key) {
            case 'ArrowUp':
                this.setState({currDir: 'up'});
                break;
            case 'ArrowRight':
                this.setState({currDir: 'right'});
                break;
            case 'ArrowDown':
                this.setState({currDir: 'down'});
                break;
            case 'ArrowLeft':
                this.setState({currDir: 'left'});
                break;
            case 't': 
                console.log('pressed');
                this.setState({totorro: true});
                break;
            default:
                break;
        }
    }


    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        this.initGrid();

        window.fnInterval = setInterval(() => {
            this.gameTick();
            //console.log(this.state.snake);
            if (this.checkGameOver()) {
                clearInterval(window.fnInterval);
            }
        }, this.state.tickTime);
        
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const foodClass = this.state.totorro ? "grid-item is-totorro": "grid-item is-food";
        const headClass = this.state.totorro ? "grid-item is-totorro": "grid-item is-food";

        const gridItems = this.state.grid.map((grid) => {
            return <div key={grid.row.toString() + "," + grid.col.toString()} 
                        id = {grid.isFood ? "food" : "grid"} 
                        className={ (grid.isFood ? foodClass : "grid-item" 
                                  + (grid.isHead ? " snake-head" : "")
                                  + (grid.isTail ? " snake-tail" : ""))} > 
                    </div>;
        });
    
        return (<div className='grid'> {gridItems} </div>);
    }
}

export default Snake;