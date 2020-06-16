import React from 'react';

class Game extends React.Component {
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
        

    }



}

export default Game;