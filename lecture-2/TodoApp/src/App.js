import React from "react";
import "./styles.css";

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>Delete!</button>
    <span>{props.todo.text}</span>
  </li>
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
    const text = prompt("Type the assignment you want to achieve: ");
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          id: id++,
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
      <div className="App">
        <h1>Assignments list</h1>
        <h3>Todos: {this.state.todos.length}</h3>
        <h3>
          Pending todos: {this.state.todos.filter(todo => !todo.checked).length}
        </h3>
        <button onClick={() => this.addTodo()}>
          Click me to create a new todo
        </button>
        <ol>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.deleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ol>
      </div>
    );
  }
}
