import React, { Component } from 'react';

const App = () => (<Counter></Counter>)


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusbutton = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleMinusbutton = () => {
    this.setState({ count: this.state.count - 1})
    if (this.state.count > 3) {
      console.log("uhohohoho")
    }
  }

  render() {

    return (
      <React.Fragment>      
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusbutton}>+1</button>
        <button onClick={this.handleMinusbutton}>-1</button>
      </React.Fragment>

    )
  }

}

export default App;
