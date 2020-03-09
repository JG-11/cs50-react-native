import React from "react";
import {View, ScrollView, Text, Button, StyleSheet, Switch} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight
  },
  fill: {
    flex: 1
  }
});

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="Delete!"/>
    <Text>{props.todo.text}</Text>
  </View>
);

let id = 0;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    id++
    const text = `Assignment #${id} to achieve`;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          id: id,
          checked: false
        }
      ]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Assignments list</Text>
        <Text>Todos: {this.state.todos.length}</Text>
        <Text>
          Pending todos: {this.state.todos.filter(todo => !todo.checked).length}
        </Text>
        <Button onPress={() => this.addTodo()} title="Click me to create a new todo"/>
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.deleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}