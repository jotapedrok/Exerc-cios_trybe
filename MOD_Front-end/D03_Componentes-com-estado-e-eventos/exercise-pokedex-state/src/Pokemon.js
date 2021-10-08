import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p>Name: {name} </p>
                    <p>Type: {type} </p>
                    <p>Weight: {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;