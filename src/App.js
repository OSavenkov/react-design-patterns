import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './dummy/Button.jsx';
import ClassButton from './dummy/ClassButton.jsx';
import FunctionalButton from './dummy/FunctionalButton.jsx';

class App extends Component {
  get initialProperties() {
    return {id: 1, text: "push"}
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Button {...this.initialProperties}/>
        <ClassButton {...this.initialProperties}></ClassButton>
        <FunctionalButton {...this.initialProperties}></FunctionalButton>
      </div>
    );
  }
}

export default App;