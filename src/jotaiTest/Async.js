import { Suspense } from 'react';
import { atom, useAtom } from 'jotai';

const countAtom = atom(1);
const asyncAtom = atom(async get => get(countAtom) * 2);

const ComponentUsingAsyncAtoms = () => {
  const [num] = useAtom(asyncAtom);
  console.log('num - ', num);
  // here `num` is always `number` even though asyncAtom returns a Promise
};
const AsyncComp = () => {
  return (
    <Suspense fallback={'loading'}>
      <ComponentUsingAsyncAtoms />
    </Suspense>
  );
};

export default AsyncComp;
