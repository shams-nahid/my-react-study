import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 22 },
  { name: 'Michel', age: 25 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => name === user.name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {user && user.name}
      {user && user.age}
    </div>
  );
};

export default UserSearch;
