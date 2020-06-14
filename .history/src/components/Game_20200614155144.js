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
        currDir: 'right',
        tickTime: TICK_TIME,
        gameOver: false,
    } 



}

export default Game;