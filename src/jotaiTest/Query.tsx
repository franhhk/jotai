import * as React from 'react';
import { Provider, useAtom } from 'jotai';
import { atomWithQuery } from 'jotai/query';

type UserType = {
  id: number;
  name: string;
  username: string;
  phone: string;
};
const usersAtom = atomWithQuery(() => ({
  queryKey: 'users',
  queryFn: async (): Promise<UserType[]> => {
    await new Promise(r => setTimeout(r, 1000));
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  }
}));

const User = ({ user }: { user: UserType }) => {
  return (
    <div>
      <i>
        {user.name} | @{user.username}
      </i>
      <br />
      <i>{user.phone}</i>
      <br />
    </div>
  );
};
const Users = () => {
  const [users, dispatch] = useAtom(usersAtom);
  console.log('fetched');
  return (
    <div>
      <button onClick={() => dispatch({ type: 'refetch' })}>refetch</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <User user={user} />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default function App() {
  return (
    <Provider>
      <React.Suspense fallback="loading">
        <Users />
      </React.Suspense>
    </Provider>
  );
}
