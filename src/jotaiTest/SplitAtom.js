import { Provider, atom, useAtom } from 'jotai';
import { splitAtom } from 'jotai/utils';

const initialState = [
  {
    task: 'help the town',
    done: false
  },
  {
    task: 'feed the dragon',
    done: false
  }
];

const todosAtom = atom(initialState);
const todoAtomsAtom = splitAtom(todosAtom);

const TodoItem = ({ todoAtom, remove }) => {
  const [todo, setTodo] = useAtom(todoAtom);
  console.log('TodoItem - ', todo);
  return (
    <div>
      <input
        value={todo.task}
        onChange={e => {
          setTodo(oldValue => ({ ...oldValue, task: e.target.value }));
        }}
      />
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          setTodo(oldValue => ({ ...oldValue, done: !oldValue.done }));
        }}
      />
      <button onClick={remove}>remove</button>
    </div>
  );
};

const TodoList = () => {
  const [todoAtoms, dispatch] = useAtom(todoAtomsAtom);
  console.log('todoAtoms - ', todoAtoms);
  return (
    <ul>
      {todoAtoms.map(todoAtom => (
        <TodoItem
          todoAtom={todoAtom}
          remove={() => dispatch({ type: 'remove', atom: todoAtom })}
        />
      ))}
    </ul>
  );
};

const SplitAtom = () => (
  <Provider>
    <TodoList />
  </Provider>
);

export default SplitAtom;
