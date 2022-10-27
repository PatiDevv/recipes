import fakeDataObject from './fakeBaseRecipes.json';
import { FakeDataItem } from './global';

const fakeData: { [key in string]: FakeDataItem } = fakeDataObject;

const fakeDataArray = Object.keys(fakeData).map((key) => fakeData[key]);

export default fakeDataArray;
