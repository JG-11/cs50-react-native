import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import MapView, { Marker } from 'react-native-maps'

class App extends React.Component {
  state = {
    userLocation: null,
    placeName: '',
    markerCoordinate: null,
    secondMarkerCoordinate: null
  }

  getUserLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)

    if(status !== 'granted') {
      console.error('Permiso no garantizado')
      
      return
    }

    let userLocation = await Location.getCurrentPositionAsync({});

    let placeName = (await Location.reverseGeocodeAsync(userLocation.coords))[0]

    this.setState({
      userLocation,
      placeName
    })
  }

  getMarkersCoordinates = async () => {
    let markerCoordinate = (await Location.geocodeAsync("Alcatraz Island"))[0]

    let secondMarkerCoordinate = (await Location.geocodeAsync("The Castro Theatre"))[0]

    this.setState({
      markerCoordinate,
      secondMarkerCoordinate
    })
  }

  componentDidMount() {
    this.getMarkersCoordinates()
    //this.getUserLocation()
  }

  render() {
    /*if(!this.state.userLocation) {
      return <AppLoading />
    }*/

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={this.state.markerCoordinate}
            title="Isla de Alcatraz"
            description="La prisión más famosa del mundo"
            pinColor="blue"
          />
          <Marker
            coordinate={this.state.secondMarkerCoordinate}
            title="The Castro Theatre"
            description="Monumento Histórico #100 de San Francisco"
            pinColor="green"
          />
        </MapView>
        {/*<MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.userLocation.coords.latitude,
            longitude: this.state.userLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  map: {
    flex: 1
  }
});

export default App