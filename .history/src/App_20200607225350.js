import React from 'react';
import Grid from './components/Grid.js';
import './styles/App.css';



class App extends React.Component {
  


  render() {
    

    return (
      <div className="snake-container"> 
        <Grid />
      </div>
    )
  }
 
}

export default App;
