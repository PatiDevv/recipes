import { Reducer } from "redux";
import { Action, SEARCH } from "../actions/indnex";
import fakeDataArray, { FakeDataItem } from "../store/recipesData";

export interface RootState {
  recipesData: FakeDataItem[];
  search: string;
}

const initialState: RootState = {
  recipesData: fakeDataArray,
  search: "",
};

const rootReducer: Reducer<RootState, Action> = (state = initialState, action): RootState => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        search: action.search,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
