import React, { useState } from 'react';

const AddTodo = (props) => {
  const { addTodo } = props;

  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={onSubmit}>
      <input type="text" name="title" style={{ flex: '10', padding: '5px' }} placeholder="Add Todo.." value={title} onChange={onChange} />
      <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
    </form>
  );
};

export default AddTodo;
