import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import Todo from './components/Todo';
import Header from './components/layout/Header';
import Alert from './components/layout/Alert';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

const App = () => {
  const [todos, setTodos] = useState([
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
  ]);

  const [alert, setAlert] = useState(null);

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complected = !todo.complected;
        }
        console.log('App -> markComplete -> todo', todo);
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // console.log(this.state.todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      complected: false,
    };
    setTodos([...todos, newTodo]);
  };

  const addAlert = (message, classname) => {
    setAlert({ message, classname });
    setTimeout(() => setAlert(null), 2000);
  };
  // console.log(this.state);

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Alert alert={alert} />

          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} addAlert={addAlert} />
                <Todo todos={todos} markComplete={markComplete} delTodo={delTodo} />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
