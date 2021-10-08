import React from 'react';
import './App.css';
import Pokedex from './Pokedex';


class App extends React.Component {
  loading = () => {
    return <div className="loading">
        <div className="circle"></div>
    </div>
}
  render() {
    return (
      <div className="App">
         <h1> Pokedex </h1>
         <Pokedex />
      </div>
    )
  }
}

export default App;