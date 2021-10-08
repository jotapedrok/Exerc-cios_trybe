import React from 'react';
import FormsPersonal from './FormsPersonal';
import FormsProfessional from './FormsProfessional';
import Buttons from './Buttons';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: 0,
      address: '',
      city: '',
      state: '',
      home: '',
      resum: '',
      responsability: '',
      description: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form">
        <FormsPersonal handleChange={this.handleChange}/>
        <FormsProfessional  handleChange={this.handleChange}/>
        <Buttons />
      </form>
    )
  }
}

export default Forms;