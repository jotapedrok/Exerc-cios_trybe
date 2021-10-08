import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import "./TypeButtons.css";

const types = pokemons.reduce((acc, curr) => { 
  if(!acc.includes(curr.type)) {
    acc.push(curr.type);
  }
  return (acc);
}, [])

class TypeButtons extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: false,
    }
  }

  click = (event) => {
    const target = event.target;
    const exAble = Array.from(target.parentNode.children).find((element) => element.classList.contains('able'));
    if (exAble && exAble !== target) { 
      exAble.classList.remove('able');
    }
    if (target.classList.contains('able')) {
      target.classList.remove('able');
     } else {
       target.classList.add('able');
      }
    const filter = Array.from(target.parentNode.children).find((element) => element.classList.contains('able'));
    if (filter) {
      this.setState({filter: filter.innerText});
    } else {
      this.setState({filter: false});
    }
  }

  render() {
    return (
      <div className="main-app">
        <Pokedex pokemons={pokemons} filter={this.state.filter}/>
      <section className="type-buttons">
        {types.map(type => {
          return (
            <button key={type} onClick={this.click} className={`${type}type-btn typeBtn`}>{type}</button>
            )
          })}
      </section>
          </div>
    )
  }
}

  export default TypeButtons;

