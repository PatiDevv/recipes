import { Link } from "react-router-dom";

export const initialState = {
  recipes: [
    {
      id: 1,
      title: "Przeps 1",
    },
    {
      id: 2,
      title: "Przeps 2",
    },
    {
      id: 3,
      title: "Przeps 3",
    },
    {
      id: 4,
      title: "Przeps 4",
    },
  ],
};

const Recipes = () => {
  return (
    <>
      {initialState.recipes.map((item) => (
        <Link key={item.id} to={`/recipes/${item.id}`}>
          <h1> Tytuł: {item.title}</h1>
        </Link>
      ))}
    </>
  );
};

export default Recipes;
