import { atom, useAtom } from 'jotai';
import { focusAtom } from 'jotai/optics';

const initialData = {
  people: [
    {
      name: 'Luke Skywalker',
      information: { height: 172 },
      siblings: ['John Skywalker', 'Doe Skywalker']
    },
    {
      name: 'C-3PO',
      information: { height: 167 },
      siblings: ['John Doe', 'Doe John']
    }
  ],
  films: [
    {
      title: 'A New Hope',
      planets: ['Tatooine', 'Alderaan']
    },
    {
      title: 'The Empire Strikes Back',
      planets: ['Hoth']
    }
  ],
  info: {
    tags: ['People', 'Films', 'Planets', 'Titles']
  }
};

const dataAtom = atom(initialData);
const peopleAtom = focusAtom(dataAtom, optic => optic.prop('people'));

// https://jotai.org/docs/integrations/optics
export default function FocusAtom() {
  console.log('FocusAtom ---- ');
  const [peopleList, setPeopleList] = useAtom(peopleAtom);
  const [data] = useAtom(dataAtom);

  console.log('peopleList - ', peopleList);
  console.log('data - ', data);

  const handleClick = () => {
    setPeopleList(prev => [...prev, { name: `A-${prev.length + 1}` }]);
  };

  return (
    <div>
      <ul>
        {peopleList.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>add people</button>
    </div>
  );
}
