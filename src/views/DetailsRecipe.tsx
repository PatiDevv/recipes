import { RouteComponentProps } from 'react-router';
import { useAppSelector } from '../redux/types';

interface IRecipeParams {
  id: string;
}

const DetailsRecipe = ({ match: { params } }: RouteComponentProps<IRecipeParams>) => {
  const recipes = useAppSelector((s) => s.Global.recipesData);

  const itemRecipe = recipes.find((item) => item.id.toString() === params.id);

  if (itemRecipe == null) {
    return <h1>Nie znaleziono przepisu o id: {params.id}</h1>;
  }

  return <div>{itemRecipe.name}</div>;
};

export default DetailsRecipe;
