import React from 'react';

function GridItem(props) {
    return <div key={props.row.toString() + "," + props.col.toString()} className='grid'></div>;
}

export default GridItem;