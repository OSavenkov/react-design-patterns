/* eslint-env browser */
import React from 'react';

var Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {id: -1, text: "default-button-text"}
  },
  getInitialState() {
    return {data: "button"}
  },
  onClick() {
    console.log(this.state.data);
  },
  render() {
    return <div className="button-place">
      <button id={this.props.id} data={this.state.data} onClick={this.onClick}>{this.props.text}</button>
    </div>
  }
});

export default Button;