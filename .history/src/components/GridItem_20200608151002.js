import React from 'react';

function GridItem() {
    return <div key={grid.row.toString() + "," +grid.col.toString()} className='grid'></div>;
}

export default GridItem;