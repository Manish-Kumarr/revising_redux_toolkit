import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { fetchUsers } from './features/userSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <h1>Users</h1>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default App;
