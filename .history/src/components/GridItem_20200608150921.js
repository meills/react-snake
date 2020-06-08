import React from 'react';

function GridItem(props) {
    return <div key={grid.row.toString() + "," +grid.col.toString()} className='grid'></div>;
}

export default GridItem;