import { FakeDataItem } from "../redux/global";

export const cardItemContainsSearchTerm = (val: FakeDataItem, search: string) => {
  const formatedValue = search.trim().toLowerCase();

  if (formatedValue === "") {
    return true;
  }

  return val.name.toLowerCase().includes(formatedValue) || val.ingredients.find((item) => item.toLowerCase().includes(formatedValue));
};


