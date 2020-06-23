import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { getQuote } from './API'

export default class App extends React.Component {
  state = {
    quote: null,
    character: null,
    image: null
  }

  componentDidMount() {
    this.getResult();
  }

  getResult = async () => {
    const result = await getQuote();
    this.setState({
      quote: result[0].quote,
      character: result[0].character,
      image: result[0].image
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>En palabras de {this.state.character}</Text>
          <Text style={styles.paragraph}>{this.state.quote}</Text>
          <Image
            style={styles.imageContainer}
            source={{uri: this.state.image}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Quiero otra frase"
            onPress={() => this.getResult()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraph: {
    marginTop: 25,
    fontSize: 20,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  imageContainer: {
    marginTop: 50,
    width: 200,
    height: 300,
    alignSelf: 'center'
  },
  buttonContainer: {
    marginTop: 25
  }
});
