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
        phone: '',
        isFormValid: false
    }

    handleNameChange = name => {
        this.setState({name}, this.validateForm)
    }

    handlePhoneChange = phone => {
        if(+phone >= 0 && phone.length <= 10) {
            this.setState({phone}, this.validateForm)
        }     
    }

    handleSubmit = () => {
        //this.props.onSubmit({...this.state})
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
            this.props.onSubmit(this.state)
        }
    }

    validateForm = () => {
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
            this.setState({isFormValid: true})
        } else {
            this.setState({isFormValid: false})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                    placeholder="Name"/>
                <TextInput
                    style={styles.input} value={this.state.phone}
                    onChangeText={this.handlePhoneChange}
                    keyboardType="numeric"
                    placeholder="Phone number"/>
                <Button
                    title="Add contact"
                    onPress={this.handleSubmit}
                    disabled={!this.state.isFormValid}/>
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