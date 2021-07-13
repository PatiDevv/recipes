import { Link } from "react-router-dom";
import SearchInput from "../components/atoms/Input/SearchInput";
import styled from "styled-components";

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

const StyedSearchInput = styled(SearchInput)`
  margin: 1%;
  width: 50%;
  position: absolute;
  left: 10%;
  top: 2%;
`;

const Recipes = () => {
  return (
    <>
      <StyedSearchInput placeholder="Find Me - Your Perfect Recipe for Today"></StyedSearchInput>
      {initialState.recipes.map((item) => (
        <Link key={item.id} to={`/recipes/${item.id}`}>
          <h1> Tytuł: {item.title}</h1>
        </Link>
      ))}
    </>
  );
};

export default Recipes;
