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

  /*increaseCount() {
    //Here the function queue batches and merges the same states
    this.setState({
      count: this.state.count + 1
    });

    this.setState({
      count: this.state.count + 1
    });

    console.log(this.state.count);
  }*/

  increaseCount() {
    //Here we actually want the previous state exists beforehand
    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    console.log(this.state.count);
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
