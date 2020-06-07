import React, { useState } from 'react';

const AddTodo = (props) => {
  const { addTodo, addAlert } = props;

  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      addAlert('Please enter something', 'danger');
    } else {
      addTodo(title);
      addAlert('Todo added', 'success');
      setTitle('');
    }
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        style={{ flex: '10', padding: '5px', marginRight: '3px', borderRadius: '5%' }}
        placeholder="Add Todo.."
        value={title}
        onChange={onChange}
      />
      <input type="submit" value="submit" className="btn bg-primary" style={{ borderRadius: '5%', float: 'right', flex: '1' }} />
    </form>
  );
};

export default AddTodo;
