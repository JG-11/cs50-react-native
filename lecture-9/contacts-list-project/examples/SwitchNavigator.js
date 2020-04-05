import React from 'react';
import { View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

class ScreenOne extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 25, borderColor: 'teal'}}>
                <Button 
                    title="Go to Screen Two"
                    onPress={() => this.props.navigation.navigate('RouteNameTwo')}/>
            </View>
        )
    }
}

class ScreenTwo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 25, borderColor: 'teal'}}>
                <Button
                    title="Go to Screen One"
                    onPress={() => this.props.navigation.navigate('RouteNameOne')}/>
            </View>
        )
    }
}

const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenOne,
    "RouteNameTwo": ScreenTwo
});

export default class App extends React.Component {
    render() {
        return <AppNavigator/>
    }
}