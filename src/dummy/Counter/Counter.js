import React from "react";
import Buttons from './Buttons';
import Display from './Display';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleDecrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return <div>
          <Display counter={this.state.counter} />
          <Buttons onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        </div>
    }
}

export default Counter;