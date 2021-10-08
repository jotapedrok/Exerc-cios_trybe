import React from 'react';
const estados = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];

class FormsPersonal extends React.Component {
  render() {
    return(
      <fieldset className="form-personal-fieldset fieldset">
        <label>
          Name:
          <input
          onChange={this.props.handleChange}
          name="name"
          id="name"
          type="text"
          className="form-name"
          maxLength="40"
          required
          />
        </label>

        <label>
          Email:
          <input
          onChange={this.props.handleChange}
          name="email"
          id="email"
          type="email"
          className="form-email"
          maxLength="50"
          required
          />
        </label>

        <label>
          CPF:
          <input
          onChange={this.props.handleChange}
          name="cpf"
          id="cpf"
          type="number"
          className="form-cpf"
          maxLength="11"
          required
          />
        </label>

        <label>
          Address:
          <input
          onChange={this.props.handleChange}
          name="address"
          id="address"
          type="text"
          className="form-address"
          maxLength="200"
          required
          />
        </label>

        <label>
          City:
          <input
          onChange={this.props.handleChange}
          name="city"
          id="city"
          type="text"
          className="form-city"
          maxLength="28"
          required
          />
        </label>
        <label>
          State:
          <select
          onChange={this.props.handleChange}
          name="state"
          id="state"
          type="number"
          className="form-state"
          required>
            {estados.map(estado => {
             return (<option key={estado} className={`opt-${estado}`} value={estado}>{estado}</option>)
          })}
          </select>
        </label>
        <div className="form-homeType" onChange={this.props.handleChange}>

          <p>Home Type:</p>
          <div className="form-radio">
            <label>
              <input
              type="radio"
              name="home"
              value="house"
              required/>
              House
            </label>

            <label>
              <input
              type="radio"
              name="home"
              value="apart"
              required
              />
              Apart
            </label>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default FormsPersonal;