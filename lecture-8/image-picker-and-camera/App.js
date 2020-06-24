import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';


export default function App() {
  const [image, setImage] = React.useState(null)
  const [hasPermission, setHasPermission] = React.useState(null)
  const [type, setType] = React.useState(Camera.Constants.Type.back)

  const selectImage = async () => {
    let { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if(status !== 'granted') {
      console.error("ImagePicker Permission not granted!")

      return
    }

    let image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    })

    setImage(image.uri)
  }

  const openCamera = async () => {
    let { status } = await Camera.requestPermissionsAsync()

    if(status !== 'granted') {
      setHasPermission(false)

      console.error("Camera Permissions not granted!")

      return
    }

    setHasPermission(true)
  }

  const handleCamera = () => {
    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Image Picker and Camera
      </Text>
      
      <Button
        title="Select image"
        onPress={selectImage}
      />
      
      {
        image && 
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      }
  
      <Button
        title="Open camera"
        onPress={openCamera}
      />
      
      {
        !hasPermission && <Text style={styles.paragraph}> Camera permission not requested </Text>
      }

      {
        hasPermission && hasPermission === false &&
        <Text style={styles.paragraph}>
          Camera permission not granted
        </Text>
      }

      {
        hasPermission && hasPermission !== false &&
        <Camera
          style={styles.camera}
          type={type}
        >
          <View
            style={styles.background}>
            <TouchableHighlight
              style={styles.button}
              onPress={handleCamera}>
              <Text style={styles.flip}>Flip</Text>
            </TouchableHighlight>
          </View>
        </Camera>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  camera: {
    flex: 1
  },
  background: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    flex: 0.1
  },
  flip: { 
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  }
});
