import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeIndex: 0,
        }
    }

    clickLeftBtn = () => {
        if (!this.props.filter) {
            if (this.state.pokeIndex === 0) {
                this.setState({pokeIndex: this.props.pokemons.length-1});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex - 1}))
            }
        } else {
            const filteredPokes = this.props.pokemons.filter(pokemon => pokemon.type === this.props.filter)
            if (this.state.pokeIndex === 0) {
                this.setState({pokeIndex: filteredPokes.length-1});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex - 1}))
            }
        }
    }

    clickRightBtn = () => {
        if (!this.props.filter) {
            if (this.state.pokeIndex === this.props.pokemons.length-1) {
                this.setState({pokeIndex: 0});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex + 1}))
            }
        } else {
            const filteredPokes = this.props.pokemons.filter(pokemon => pokemon.type === this.props.filter)
            if (this.state.pokeIndex === filteredPokes.length-1) {
                this.setState({pokeIndex: 0});
            } else {
                this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex + 1}))
            }
        }
    }

    allPokes = () => {
        if (this.state.pokeIndex !== 0) {
            this.setState({pokeIndex: 0})
            return this.props.pokemons.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
        }
        return this.props.pokemons.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    }

    filterPokes = () => {
        const filteredPokes = this.props.pokemons.filter(pokemon => pokemon.type === this.props.filter)
        if (filteredPokes) {
            if (this.state.pokeIndex > filteredPokes.length-1) {
                this.setState({pokeIndex: 0})
                return filteredPokes.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
            }
            const x = filteredPokes.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)

            return (x);
            }
    }

    render() {
        const filter = this.props.filter;
        return (
            <div className="pokedex">
                <div className="buttons">
                    <button className="beforeBtn" onClick={this.clickLeftBtn}>ᐊ</button>
                    <button className="nextBtn" onClick={this.clickRightBtn}>ᐅ</button>
                </div>
                {filter ? this.filterPokes() : this.allPokes()}
            </div>
        );
    }
}

export default Pokedex;
