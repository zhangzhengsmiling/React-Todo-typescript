import { IUser } from '../types';
import { ActionTypeAddAge, ACtionTypeDecAge, ActionTypeAddFriend } from './actions';
import { ADD_AGE, DEC_AGE, ADD_FRIEND } from './action-types';
import { produce } from 'immer';

const initialUser: IUser = {
  name: 'zhangzhengsmiling',
  age: 18,
  hobby: 'coding',
  friends: [],
};

type ActionTypeUser = ActionTypeAddAge | ACtionTypeDecAge | ActionTypeAddFriend;

const userReducers = produce((user: IUser = initialUser, actions: ActionTypeUser) => {
  switch(actions.type) {
    case ADD_AGE:
      user.age++;
      break;
    case DEC_AGE:
      user.age--;
      break;
    case ADD_FRIEND:
      user.friends.push((actions as ActionTypeAddFriend).payload);
      break;
  }
  return user;
});

export default userReducers;
