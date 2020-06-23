import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

class ScreenOne extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 25, borderColor: 'teal'}}>
                <Button 
                    title="Go to Screen Two"
                    onPress={() => this.props.navigation.navigate('Screen Two')}/>
            </View>
        )
    }
}

class ScreenTwo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 25, borderColor: 'orange'}}>
                <Button
                    title="Go to Screen One"
                    onPress={() => this.props.navigation.navigate('Screen One')}/>
            </View>
        )
    }
}

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Screen One" component={ScreenOne}/>
            <Stack.Screen name="Screen Two" component={ScreenTwo}/>
        </Stack.Navigator>
    )
}

export default class App extends React.Component {
    render() {
        return(
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        )
    }
}