import React from 'react';
import Snakeboard from './components/Snakeboard.js';
import './styles/App.css';
import './styles/snakeboard.css';


class App extends React.Component {
  state = {
    gameStart: false,
  }


  render() {
    return (<div className="snake-container"> 
              <Snakeboard />
            </div>);
  }

}

export default App;
