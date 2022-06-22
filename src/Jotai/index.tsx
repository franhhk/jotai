import React from 'react';
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubledCountAtom = atom(get => get(countAtom) * 2);

export default function Jotai() {
  console.log('count --------');

  // useAtom 을 사용하면 랜더링이 한번 더 이뤄진다.
  const [count, setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledCountAtom);

  const handleCountUp = () => {
    setCount(prev => prev + 1);
  };

  return (
    <h1>
      count : {count} <br />
      doubledCount : {doubledCount}
      <br />
      <button onClick={handleCountUp}>count up</button>
    </h1>
  );
}
