import React, { useState, useCallback } from 'react';
import { produce } from 'immer';

const Test = () => {
  const [user, setUser] = useState({
    name: 'zhangzhengsmiling',
    age: 18,
    hobby: 'coding',
    friends: [
      { name: 'nick', age: 12, hobby: 'game' },
      { name: 'tim', age: 15, hobby: 'tim' },
    ]
  });

  const onClick = useCallback(() => {
    setUser(produce(draft => {draft.age = 16}));
  }, []);

  const onRemoveFriend = () => {
    setUser(produce(draft => {
      draft.friends = draft.friends.filter(u => u.name !== 'nick');
    }))
  }

  return (
    <div>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>hobby: {user.hobby}</p>
      <p>freinds: {JSON.stringify(user.friends)}</p>
      <p>
        <button onClick={onClick}>click me!</button>
      </p>
      <p>
        <button onClick={onRemoveFriend}>不想和你做朋友</button>
      </p>
    </div>
  );
};

export default Test;
