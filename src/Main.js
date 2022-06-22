import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <h1>List</h1>
      <ul>
        <li>
          <Link to="/jotai">Jotai</Link>
        </li>
        <li>
          <Link to="/text-color-change">text color change</Link>
        </li>
        <li>
          <Link to="/text-length">text length</Link>
        </li>
      </ul>
    </>
  );
}
