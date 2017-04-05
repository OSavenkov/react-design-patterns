/* eslint-env browser */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './dummy/Button.jsx';
// import ClassButton from './dummy/ClassButton.jsx';
// import FunctionalButton from './dummy/FunctionalButton.jsx';
import PostList from './dummy/PostList.jsx';

const withClassName = Component => props => <Component {...props} className="abra" />;
const MyClassButton = withClassName(Button);

export default class App extends Component {
  get initialProperties() {
    return {
      attributes: {
        id: 1 
      },
      text: "push"
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <MyClassButton {...this.initialProperties}>Hello</MyClassButton>
        {/*<ClassButton {...{ item: { id: 3, text: "press" } } }><p>child!</p></ClassButton>
        <FunctionalButton {...this.initialProperties}><p>hi</p></FunctionalButton>*/}
        <PostList/>
      </div>
    );
  }
}
