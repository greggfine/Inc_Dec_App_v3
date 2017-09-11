import React, { Component } from 'react';
import Counter from './counter';
export default class Buttons extends Component {
  constructor(props) {
    super(props);


    this.state={total: 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }

  increment() {
    this.setState({total: this.state.total+=1});
  }

  decrement() {
    this.setState({total: this.state.total-=1});
    if (this.state.total < 0) {
      this.setState({total: 0});
    }
  }

  render() {
    return (
      <div className="container">
        <Counter total={this.state.total}/>
        <button className="btn btn-inc" onClick={this.increment}>Increment</button>
        <button className="btn btn-dec" onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
