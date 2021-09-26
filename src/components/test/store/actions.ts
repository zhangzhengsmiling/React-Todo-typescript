import { ADD_AGE, DEC_AGE, ADD_FRIEND } from './action-types';
import { IUser } from '../types';

export const addAgeAction = () => {
  return {
    type: ADD_AGE,
  }
}

export const decAgeAction = () => {
  return {
    type: DEC_AGE,
  }
}

export const addFriendAction = (friend: IUser) => {
  return {
    type: ADD_FRIEND,
    payload: friend,
  }
}

export type ActionTypeAddAge =  ReturnType<typeof addAgeAction>;
export type ACtionTypeDecAge = ReturnType<typeof decAgeAction>;
export type ActionTypeAddFriend = ReturnType<typeof addFriendAction>;
