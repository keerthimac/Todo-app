import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, markComplete, delTodo }) => {
  // const getStyle = () => {
  //   return {
  //     background: '#f4f4f4',
  //     padding: '10px',
  //     borderBottom: '1px #ccc dotted',
  //     textDecoration: todo.complected ? 'line-through' : 'none',
  //   };
  // };

  const { id, title } = todo;

  const onCheck = () => {
    markComplete(id);
  };

  const onClick = () => {
    delTodo(id);
  };

  return (
    <div className="card bg-light" style={{ textDecoration: todo.complected ? 'line-through' : 'none', padding: '0.7rem' }}>
      <p>
        <input type="checkBox" onChange={onCheck} /> {title}
        <button className="btn bg-danger" style={{ borderRadius: '10%', float: 'right' }} onClick={onClick}>
          Delete
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

// const btnStyle = {
//   backgroundColor: '#ff0000',
//   color: '#fff',
//   padding: '5px 9px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right',
// };
export default TodoItem;
