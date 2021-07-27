import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { GlobalAction, GlobalState } from './global';
import { UserAction, UserState } from './user';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export type KnownAction = GlobalAction | UserAction;

export interface AppState {
  Global: GlobalState;
  User: UserState;
}

export type ThunkKnownAction = (dispatch: (action: KnownAction) => void, getState: () => AppState) => void;
