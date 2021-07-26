import { GlobalAction, GlobalState } from "./global";

export type KnownAction = GlobalAction;

export type AppState = GlobalState;

export type ThunkKnownAction = (dispatch: (action: KnownAction) => void, getState: () => AppState) => void;
