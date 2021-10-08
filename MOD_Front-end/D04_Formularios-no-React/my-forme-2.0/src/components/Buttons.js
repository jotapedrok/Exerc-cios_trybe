import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <input type="button" className="send" onClick={this.props.click} value="SEND"/>
        <input type="button" className="clear" value="CLEAR"/>
      </div>
    )
  }
}

export default Buttons;