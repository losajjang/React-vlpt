import React from 'react';

function User({user, onRemove}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({users, onRemove}) {
  return (
    // map 안의 인자 user는 자유로운 네이밍이 가능하다. ex. a, b, c
    // map 안의 인자명과 동일한 인자명을 User 함수에 넘겨준다.
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
