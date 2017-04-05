/* eslint-env browser */
import React from 'react';

var Button = React.createClass({
  propTypes: {
    attributes: React.PropTypes.object,
    text: React.PropTypes.string.isRequired,
    children: React.PropTypes.node,
    className: React.PropTypes.string
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
    return <div className={this.props.className}>
      <button {...this.props.attributes} onClick={this.onClick}>{this.props.children}<p>{this.props.text}</p></button>
    </div>
  }
});

export default Button;