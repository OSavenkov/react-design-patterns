/* eslint-env browser */
import React, {Component} from 'react';

class ClassButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "class-button"
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log(this.state.data);
  }
  render() {
    return <div className="button-place">
      <button id={this.props.id} data={this.state.data} onClick={this.onClick}>{this.props.text}</button>
    </div>
  }
}

ClassButton.propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string
};

ClassButton.defaultProps = {
  id: -1,
  text: "default-class-button-text"
};

export default ClassButton