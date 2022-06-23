import { atom, useAtom } from 'jotai';

const countsAtom = atom([atom(1), atom(2), atom(3)]);

const Counter = ({ countAtom }) => {
  console.log('Counter ------------ ', countAtom.init);
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count} <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
};

const AtomInAtomCount = () => {
  console.log('AtomInAtomCount ------------');
  const [counts, setCounts] = useAtom(countsAtom);

  const addNewCount = () => {
    const newAtom = atom(counts.length + 1);
    setCounts(prev => [...prev, newAtom]);
  };

  return (
    <div>
      {counts.map(countAtom => (
        <Counter countAtom={countAtom} key={countAtom} />
      ))}
      <button onClick={addNewCount}>Add</button>
    </div>
  );
};

export default AtomInAtomCount;
