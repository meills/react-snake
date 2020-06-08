import React from 'react';

const GRID_SIZE = 10;

class Grid extends React.Component {

    render() {
        const gridItems = this.state.grid.map((grid) => {
            return (<div key={grid.row.toString() + "," +grid.col.toString()} className='grid'></div>)
        });
    }
}

export default Grid;