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
        if (this.state.pokeIndex === 0) {
            this.setState({pokeIndex: this.props.pokemons.length-1});
        } else {
            this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex - 1}))
        }
    }

    clickRightBtn = () => {
        if (this.state.pokeIndex === this.props.pokemons.length-1) {
            this.setState({pokeIndex: 0});
        } else {
            this.setState((lastState, _x) => ({pokeIndex: lastState.pokeIndex + 1}))
        }
    }

    render() {
        return (
            <div className="pokedex">
                <div className="buttons">
                    <button className="beforeBtn" onClick={this.clickLeftBtn}>ᐊ</button>
                    <button className="nextBtn" onClick={this.clickRightBtn}>ᐅ</button>
                </div>
                {this.props.pokemons.filter((_poke, i) => i === this.state.pokeIndex).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;