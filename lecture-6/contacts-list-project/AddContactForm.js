import React from 'react'
import {KeyboardAvoidingView, View, Button, TextInput, StyleSheet, Keyboard} from 'react-native'
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

    componentDidUpdate(prevProps, prevState) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
          this.validateForm();
        }
    }

    /*getHandler = key => {
        return val => {
            this.setState({[key]: val})
        }
    }*/

    //handleNameChange = this.getHandler(name)

    handleNameChange = name => {
        //this.setState({name}, this.validateForm)
        this.setState({name})
    }

    handlePhoneChange = phone => {
        if(+phone >= 0 && phone.length <= 10) {
            //this.setState({phone}, this.validateForm)
            this.setState({phone})
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
        //console.error("This is an error");
        //console.warn("Let's just show a warning");
        //throw new Error("This is another way of showing an error pop-up");
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                    //onChangeText={this.getHandler('name')}
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
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 20
    }
})

export default AddContactForm