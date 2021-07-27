import { Reducer } from 'redux';

// ------------------- Reducer State & Action Types ------------------- //

// Reducer State //

export interface UserState {}

// Action Types //

export type UserAction = { type: '@user/FETCH_DETAILS' };

// ------------------- Actions ------------------- //

export const fetchUserDetails = (search: string): UserAction => {
  return {
    type: '@user/FETCH_DETAILS',
  };
};

// ------------------- Reducer ------------------- //

export const initialState: UserState = {};

const userReducer: Reducer<UserState, UserAction> = (state = initialState, action): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
