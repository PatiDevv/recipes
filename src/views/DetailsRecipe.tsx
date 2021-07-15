import { RouteComponentProps } from "react-router";
import { initialState } from "./Recipes";

interface IRecipeParams {
  id: string;
}

const DetailsRecipe = ({ match: { params } }: RouteComponentProps<IRecipeParams>) => {
  // console.log(params.id);

  const itemRecipe = initialState.recipes.find((item) => item.id.toString() === params.id);

  if (itemRecipe == null) {
    return <h1>Nie znaleziono przepisu o id: {params.id}</h1>;
  }

  return <div>{itemRecipe.title}</div>;
};

export default DetailsRecipe;
