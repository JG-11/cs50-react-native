import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  counter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    fontSize: 50
  }
});

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.inc(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  inc () {
    this.setState(prevState => ({
      count: this.state.count + 1
    }));
  }

  render() {
    return (
      <View style={styles.counter}>
        <Text style={styles.paragraph}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  onToggle = () => {
    this.setState(prevState => ({
      showCounter: !prevState.showCounter
    }))
  }

  render() {
    if(this.state.showCounter) {
      return(
        <View style={styles.appContainer}>
          <Button title="toggle" onPress={this.onToggle}/>
          <Counter />
        </View>
      )
    } else {
      return(
        <View style={styles.appContainer}>
          <Button title="toggle" onPress={this.onToggle}/>
        </View>
      )
    }
  }
}