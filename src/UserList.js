import React, {useContext} from 'react';
import {UserDispatch} from './App';

const User = React.memo(function User({user}) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => {
          dispatch({type: 'TOGGLE_USER', id: user.id});
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({type: 'REMOVE_USER', id: user.id});
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({users}) {
  return (
    // map 안의 인자 user는 자유로운 네이밍이 가능하다. ex. a, b, c
    // map 안의 인자명과 동일한 인자명을 User 함수에 넘겨준다.
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
