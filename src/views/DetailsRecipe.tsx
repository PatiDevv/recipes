import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../reducers";
interface IRecipeParams {
  id: string;
}

const DetailsRecipe = ({ match: { params } }: RouteComponentProps<IRecipeParams>) => {
  const recipes = useSelector((s: RootState) => s.recipesData);

  const itemRecipe = recipes.find((item) => item.id.toString() === params.id);

  if (itemRecipe == null) {
    return <h1>Nie znaleziono przepisu o id: {params.id}</h1>;
  }

  return <div>{itemRecipe.name}</div>;
};

export default DetailsRecipe;
