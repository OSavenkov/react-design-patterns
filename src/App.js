/* eslint-env browser */
import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import List from './dummy/Gists/List';
import WithFetchedData from './dummy/Gists/WithFetchedData';

// import Gists from './dummy/Gists/Gists';
// import Counter from './dummy/Counter/Counter';
// import Button from './dummy/Button.jsx';
// import ClassButton from './dummy/ClassButton.jsx';
// import FunctionalButton from './dummy/FunctionalButton.jsx';
// import PostList from './dummy/PostList.jsx';

// const withClassName = Component => props => <Component {...props} className="abra" />;
// const MyClassButton = withClassName(Button);

// const FunctionAsChildButton = ({children}) => children("Oleg");
// FunctionAsChildButton.propTypes = {
//   children: React.PropTypes.func.isRequired
// };

const withGists = WithFetchedData(props => `https://api.github.com/users/${props.username}/gists`)
const ListWithGists = withGists(List)

export default class App extends Component {
  // get initialProperties() {
  //   return {
  //     attributes: {
  //       id: 1
  //     },
  //     text: "push"
  //   }
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          <h2>Welcome to React</h2>
        </div>
        <ListWithGists username="gaearon" keyName="id" valueName="description"/>
        {/*<Gists/>*/}
        {/*<Counter></Counter>*/}
        {/*<FunctionAsChildButton name="Oleg">
          { name => <button>Magic {name}</button> }
        </FunctionAsChildButton>
        <MyClassButton {...this.initialProperties}>Hello</MyClassButton>*/}
        {/*<ClassButton {...{ item: { id: 3, text: "press" } } }><p>child!</p></ClassButton>
        <FunctionalButton {...this.initialProperties}><p>hi</p></FunctionalButton>*/}
        {/*<PostList/>*/}
      </div>
    );
  }
}
