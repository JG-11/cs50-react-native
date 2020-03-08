import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    //this.increaseCount = this.increaseCount.bind(this);
    //this.increaseCount = () => this.setState({ count: this.state.count + 1 });
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        {/*<button onClick={this.increaseCount.bind(this)}>Increase</button>*/}
        <button onClick={() => this.increaseCount()}>Increase</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
