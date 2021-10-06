import React from 'react';
import pokemons from '../data/data';

class Pokecard extends React.Component {
  render() {
    return (
      pokemons.map(pokemon => {
        const { name, type, averageWeight: {value,measurementUnit}, image, moreInfo } = pokemon
        return (
          <a href={moreInfo} target="_blank" rel="noreferrer">
            <section className="card">
              <div className="details">
                <p>{name}</p>
                <p>{type}</p>
                <p>{value}{measurementUnit}</p>
              </div>
              <img src={image} alt="pokemon"></img>
            </section>
          </a>
        )
      })
    )
  }
};

export default Pokecard;