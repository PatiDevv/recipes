import fakeDataObject from "./fakeBaseRecipes.json";

const fakeData: { [key in string]: FakeDataItem } = fakeDataObject;

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

const fakeDataArray = Object.keys(fakeData).map((key) => fakeData[key]);

export default fakeDataArray;
