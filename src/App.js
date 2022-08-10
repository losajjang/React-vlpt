import React, {useCallback, useMemo, useReducer, useRef, useState} from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {username: '', email: ''},
  users: [
    {
      id: 1,
      username: 'psy',
      email: 'losajjang@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'pjm',
      email: 'losajjang@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'ssh',
      email: 'taxphs@naver.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active} : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        users: state.users.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const {users} = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.crrent += 1;
  }, [username, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
