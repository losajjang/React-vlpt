import React, {useMemo, useRef, useState} from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user)); //스프레드 문법과 같이 concat은 불변성을 지킨다.

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  const onRemove = id => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦.
    //user.id가 id인 것을 제거함.
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user,
      ),
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
