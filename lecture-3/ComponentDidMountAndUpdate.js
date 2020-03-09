import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    fontSize: 50
  }
});

class Count extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }

  componentDidUpdate() {
    console.log(this.props.count);
  }

  render() {
    return(
      <Text style={styles.paragraph}>{this.props.count}</Text>
    )
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    setInterval(() => this.inc(), 1000);
  }

  inc () {
    this.setState(prevState => ({
      count: this.state.count + 1
    }));
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Count count={this.state.count} />
      </View>
    );
  }
}
