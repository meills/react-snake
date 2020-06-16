import React from 'react';
import { render } from '@testing-library/react';

class StartButton extends React.Component {

    render() {
        return(<div className='start-btn'><button type='button'>START</button></div>);  
    }
    
}

export default StartButton;