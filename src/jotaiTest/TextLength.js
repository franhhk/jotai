import { Provider, atom, useAtom } from 'jotai';

const textAtom = atom('hello');
const textLenAtom = atom(get => get(textAtom).length);
const uppercaseAtom = atom(get => get(textAtom).toUpperCase());

const Input = () => {
  console.log('Input -------------');
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={e => setText(e.target.value)} />;
};

const CharCount = () => {
  console.log('CharCount -------------');
  const [len] = useAtom(textLenAtom);
  return <div>Length: {len}</div>;
};

const Uppercase = () => {
  console.log('Uppercase -------------');
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

const TextLength = () => {
  console.log('textLength ----------------');
  return (
    <Provider>
      <Input />
      <CharCount />
      <Uppercase />
    </Provider>
  );
};

export default TextLength;
