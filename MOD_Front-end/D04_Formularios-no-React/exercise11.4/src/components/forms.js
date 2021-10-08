import React from 'react';
import './forms.css';

class Forms extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nome: '',
      sobrenome: '',
      senha: '',
      resumo: '',
      aceita: false,
      estado: ''
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }
 
  render() {
    return (
      <div className="form-group">
        <form className="form">
          
          <input
          type="text"
          name="nome"
          className="form-name"
          value={this.state.nome}
          placeholder="NOME"
          onChange={this.handleChange}
          />

          <input
          type="text"
          name="sobrenome"
          className="form-last-name"
          value={this.state.sobrenome}
          placeholder="SOBRENOME"
          onChange={this.handleChange}
          />

          <input
          type="password"
          name="senha"
          className="form-password"
          value={this.state.senha}
          placeholder="SENHA"
          onChange={this.handleChange}
          />

          <textarea
          name="resumo"
          className="form-resum"
          value={this.state.resumo}
          placeholder="RESUMO PESSOAL"
          onChange={this.handleChange}
          />

          <input
          type="checkbox"
          name="aceita"
          className="form-checkbox"
          value={this.state.aceita}
          onChange={this.handleChange}
          />

          <select
          name="estado"
          className="form-State"
          value={this.state.estado}
          placeholder="ESTADO"
          onChange={this.handleChange}>
            <option value=""></option>
            <option value="RJ">RJ</option>
            <option value="SP">SP</option>
            <option value="MG">MG</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Forms;