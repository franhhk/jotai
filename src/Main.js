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
        <li>
          <Link to="/atom-in-atom-count">atom in atom count</Link>
        </li>
        <li>
          <Link to="/focusAtom">FocusAtom</Link>
        </li>
        <li>
          <Link to="/splitAtom">SplitAtom</Link>
        </li>
        <li>
          <Link to="/query">query</Link>
        </li>
        <li>
          <Link to="/async">Async</Link>
        </li>
      </ul>
    </>
  );
}
