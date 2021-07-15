import styled from "styled-components";
import Header from "../components/organisms/Header";
import RecipeCard from "../components/organisms/RecipeCard";
import fakeDataArray from "../store/recipesData";

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

const StyledWrapper = styled.div`
  background-color: #f9f7f4;
  background-size: 100%;
  width: 100vw;
  height: 100vh;

  margin: 0;
`;

const RecipeCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3%;
  justify-content: center;
`;

const Recipes = () => {
  return (
    <StyledWrapper>
      <Header></Header>
      <RecipeCardWrapper>
        {fakeDataArray.map((item, i) => (
          <RecipeCard key={i} {...item} time={item.cooktime + item.waittime + item.preptime}></RecipeCard>
        ))}
      </RecipeCardWrapper>

      {/* {initialState.recipes.map((item) => (
        <Link key={item.id} to={`/recipes/${item.id}`}>
          <StyledH1> Tytuł: {item.title}</StyledH1>
        </Link>
      ))} */}
    </StyledWrapper>
  );
};

export default Recipes;
