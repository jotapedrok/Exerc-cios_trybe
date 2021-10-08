import React from 'react';

class FormsProfessional extends React.Component {
  render() {
    return (
      <fieldset className="form-profissional-fieldset fieldset">
        <label for="resum">
          Curriculum Resum:
          <br/>
          <textarea
          onChange={this.props.handleChange}
          name="resum"
          id="resum"
          className="form-resum"
          maxLength="1000"
          required
          />
        </label>

        <label for="responsability">
          Last Job:
          <input
          onChange={this.props.handleChange}
          type="text"
          name="responsability"
          id="responsability"
          className="form-responsability"
          maxLength="40"
          required
          />
        </label>

        <label for="description">
          Job description:
          <br/>
          <textarea
          onChange={this.props.handleChange}
          name="description"
          id="description"
          className="form-description"
          maxLength="500"
          required
          />
        </label>
      </fieldset>
    )
  }
}

export default FormsProfessional;