import { Reducer } from "redux";
import fakeDataArray from "./recipesData";

// ------------------- Reducer State & Action Types ------------------- //

// Reducer State //

export interface GlobalState {
  recipesData: FakeDataItem[];
  search: string;
}

export interface FakeDataItem {
  id: string;
  name: string;
  source: string;
  preptime: number;
  waittime: number;
  cooktime: number;
  servings: number;
  comments: string;
  calories: number;
  fat: number;
  satfat: number;
  carbs: number;
  fiber: number;
  sugar: number;
  protein: number;
  instructions: string;
  ingredients: string[];
  tags: string[];
  image: string;
}

// Action Types //

export type GlobalAction =
  | {
      type: "SEARCH";
      search: string;
    }
  | {
      type: "CHANGE_THEME";
      theme: "dark" | "light";
    };

// ------------------- Actions ------------------- //

export const globalSearch = (search: string): GlobalAction => {
  return {
    type: "SEARCH",
    search: search,
  };
};

// ------------------- Reducer ------------------- //

export const initialState: GlobalState = {
  recipesData: fakeDataArray,
  search: "",
};

const globalReducer: Reducer<GlobalState, GlobalAction> = (state = initialState, action): GlobalState => {
  switch (action.type) {
    case "SEARCH": {
      return {
        ...state,
        search: action.search,
      };
    }
    default:
      return state;
  }
};

export default globalReducer;
