import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, username: 'psy', email: 'losajjang@naver.com' },
    { id: 2, username: 'pjm', email: 'losajjang@gmail.com' },
    { id: 3, username: 'ssh', email: 'taxphs@naver.com' },
  ];

  return (
    // map 안의 인자 user는 자유로운 네이밍이 가능하다. ex. a, b, c
    // map 안의 인자명과 동일한 인자명을 User 함수에 넘겨준다.
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;