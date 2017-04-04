/* eslint-env browser */
import React, {Component} from 'react';

class ClassButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "class-button"
    }
    this.onClick = this
      .onClick
      .bind(this);
  }
  onClick() {
    console.log(this.state.data);
  }
  render() {
    return <div className="button-place">
      <button id={this.props.item.id} data={this.state.data} onClick={this.onClick}>{this.props.item.text}</button>
    </div>
  }
}

ClassButton.propTypes = {
  item: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired, 
    text: React.PropTypes.string.isRequired
  }).isRequired
};

ClassButton.defaultProps = {
  id: -1,
  text: "default-class-button-text"
};

export default ClassButton