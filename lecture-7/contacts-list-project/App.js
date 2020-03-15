
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';

import { fetchUsers } from './API';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: null,
    showAddContactForm: false
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const results = await fetchUsers();
    this.setState({ contacts: results });
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  toggleAddContactForm = () => {
    this.setState(prevState => ({
      showAddContactForm: !prevState.showAddContactForm
    }))
  }

  sort = () => {
    this.setState(prevState => ({
      //Immutability is important
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }
  
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      showAddContactForm: false
    }))
  }

  render() {
    if(this.state.showAddContactForm) return <AddContactForm onSubmit={this.addContact} />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="toggle add contact" onPress={this.toggleAddContactForm} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
