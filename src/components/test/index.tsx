import React, { useCallback } from 'react';
import { IUser } from './types';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { addAgeAction, decAgeAction, addFriendAction } from './store/actions';
import useImmer from '../../hooks/useImmer';

const Test = () => {
  const [user, setUser] = useImmer<IUser>({
    name: 'zhangzhengsmiling',
    age: 18,
    hobby: 'coding',
    friends: [
      { name: '--', age: 12, hobby: 'game', friends: [] },
      { name: 'tim', age: 15, hobby: 'tim', friends: [] },
    ]
  });

  const onClick = useCallback(() => {
    setUser(draft => {
      draft.age = 16;
    });
  }, [setUser]);

  const onRemoveFriend = useCallback(() => {
    setUser(draft => {
      draft.friends = draft.friends.filter(u => u.name !== 'tim');
    });
  }, [setUser]);

  const onRename = useCallback(() => {

    setUser(draft => {
      const friend = draft.friends.find(item => item.name === '--');
      if (friend) friend.name = 'wanghuahua';
    });
  }, [setUser]);

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
      <p>
        <button onClick={onRename}>反正不记得你名字了，就赐你一个吧</button>
      </p>
    </div>
  );
};

// interface IPropsTest {
//   user: IUser;
//   addAge: () => void;
//   decAge: () => void;
//   addFriend: (friend: IUser) => void;
// }
//
// const Test = (props: IPropsTest) => {
//   const { user } = props;
//   const handleAddAge = useCallback(() => {
//     props.addAge();
//   }, []);
//
//   const handleDecAge = useCallback(() => {
//     props.decAge();
//   }, []);
//
//   const handleAddFriend = useCallback((name: string, age: number, hobby: string) => {
//     const u: IUser = {
//       name,
//       age,
//       hobby,
//       friends: []
//     }
//     props.addFriend(u);
//   }, [])
//
//   return (
//     <div>
//       <p>name: {user.name}</p>
//       <p>age: {user.age}</p>
//       <p>hobby: {user.hobby}</p>
//       <p>friends: {JSON.stringify(user.friends)}</p>
//       <p>
//         <button onClick={handleAddAge}>add age</button>
//       </p>
//       <p>
//         <button onClick={handleDecAge}>dec age</button>
//       </p>
//       <p>
//         <button onClick={() => {
//           handleAddFriend('wanghuahua', 22, 'game');
//         }}>I wanted a to make froends with you</button>
//       </p>
//     </div>
//   )
// }

const mapPropsFromState = (state: RootState) => {
  return {
    user: state.user,
  }
}

const mapPropsFromDispatch = (dispatch: any) => {
  return {
    addAge: () => dispatch(addAgeAction()),
    decAge: () => dispatch(decAgeAction()),
    addFriend: (friend: IUser) => dispatch(addFriendAction(friend)),
  }
}

export default connect(mapPropsFromState, mapPropsFromDispatch)(Test);
