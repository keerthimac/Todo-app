import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="navbar bg-primary">
      <h1>TodoList</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

// const linkStyle = {
//   color: '#fff',
//   textAlign: 'center',
//   padding: '10px',
// };

// const headerStyle = {
//   background: '#333',
//   color: '#fff',
//   textAlign: 'center',
//   padding: '10px',
// };
