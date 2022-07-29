import React, { useRef } from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    { id: 1, username: 'psy', email: 'losajjang@naver.com' },
    { id: 2, username: 'pjm', email: 'losajjang@gmail.com' },
    { id: 3, username: 'ssh', email: 'taxphs@naver.com' },
    { id: 4, username: 'pjt', email: '111@naver.com' },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  console.log(nextId.current)
  return <UserList users={users} />;
}

export default App;
