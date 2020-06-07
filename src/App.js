import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todo';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Take out the trash',
          complected: false,
        },
        {
          id: uuidv4(),
          title: 'Dinner with wife',
          complected: false,
        },
        {
          id: uuidv4(),
          title: 'Meeting with friends',
          complected: false,
        },
      ],
    };
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.complected = !todo.complected;
        }
        console.log('App -> markComplete -> todo', todo);
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
    // console.log(this.state.todos.filter((todo) => todo.id !== id));
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      complected: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    // console.log(this.state);

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
