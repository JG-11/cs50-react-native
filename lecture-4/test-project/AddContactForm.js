import React from 'react'
import {View, Button, TextInput, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Constants from 'expo-constants'

class AddContactForm extends React.Component {
    static propTypes = {
        addContact: PropTypes.func
    }
    
    state = {
        name: '',
        phone: ''
    }

    handleNameChange = name => {
        this.setState({
            name
        })
    }

    handlePhoneChange = phone => {
        this.setState({
            phone
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.name} onChangeText={this.handleNameChange}/>
                <TextInput style={styles.input} value={this.state.phone} onChangeText={this.handlePhoneChange} keyboardType='numeric'/>
                <Button title="Add contact"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 20
    }
})

export default AddContactForm