import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import "./TypeButtons.css";

const types = pokemons.reduce((acc, curr) => { 
  if(!acc.includes(curr.type)) {
    acc.push(curr.type);
  }
  return (acc);
}, [])

class Pokedex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: false,
      pokeIndex: 0,
    }
  }

  click = (event) => {
    this.setState((lastState) => {lastState.pokeIndex = 0})
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

  clickLeftBtn = () => {
        if (!this.state.filter) {
            if (this.state.pokeIndex === 0) {
                this.setState({pokeIndex: pokemons.length-1});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex - 1}))
            }
        } else {
            const filteredPokes = pokemons.filter(pokemon => pokemon.type === this.state.filter)
            if (this.state.pokeIndex === 0) {
                this.setState({pokeIndex: filteredPokes.length-1});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex - 1}))
            }
        }
    }

    clickRightBtn = () => {
        if (!this.state.filter) {
            if (this.state.pokeIndex === pokemons.length-1) {
                this.setState({pokeIndex: 0});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex + 1}))
            }
        } else {
            const filteredPokes = pokemons.filter(pokemon => pokemon.type === this.state.filter)
            if (this.state.pokeIndex === filteredPokes.length-1) {
                this.setState({pokeIndex: 0});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex + 1}))
            }
        }
    }

    allPokes = () => {
        if (this.state.pokeIndex !== 0) {
            // this.setState({pokeIndex: 0})
            return pokemons.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
        }
        return pokemons.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    }

    filterPokes = () => {
        const filteredPokes = pokemons.filter(pokemon => pokemon.type === this.state.filter)
        if (filteredPokes) {
            if (this.state.pokeIndex > filteredPokes.length-1) {
                // this.setState({pokeIndex: 0})
                return filteredPokes.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
            }
            const x = filteredPokes.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)

            return (x);
            }
    }

  
  render() {
    return (
      <div className="main-app">
        <div className="pokedex">
                <div className="buttons">
                    <button className="beforeBtn arrowBtn" onClick={this.clickLeftBtn}>ᐊ</button>
                    <button className="nextBtn arrowBtn" onClick={this.clickRightBtn}>ᐅ</button>
                </div>
                {this.state.filter ? this.filterPokes() : this.allPokes()}
        </div>
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

  export default Pokedex;
