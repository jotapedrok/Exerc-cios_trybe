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
      resultDiv: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }


  renderDiv = () => {
    return (
      <div className="result">
        <h3>Name:</h3> <p>{this.state.name}</p>
        <h3>Email:</h3> <p>{this.state.email}</p>
        <h3>CPF:</h3> <p>{this.state.cpf}</p>
        <h3>Address:</h3> <p>{this.state.address}</p>
        <h3>City:</h3> <p>{this.state.city}</p>
        <h3>Home Type:</h3> <p>{this.state.home}</p>
        <h3>Curriculum resum:</h3> <p>{this.state.resum}</p>
        <h3>Last Job:</h3> <p>{this.state.responsability}</p>
        <h3>Job Description:</h3> <p>{this.state.description}</p>
      </div>
    )
  }

  click = () => {
    this.setState({
      resultDiv: this.renderDiv(),
    });
  }

  render() {
    return (
      <form className="form">
        <FormsPersonal handleChange={this.handleChange} setGender={this.setGender}/>
        <FormsProfessional  handleChange={this.handleChange}/>
        <Buttons click={this.click}/>
        {this.state.resultDiv}
      </form>
    )
  }
}

export default Forms;