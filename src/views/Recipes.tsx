import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/organisms/Header";
import RecipeCard from "../components/organisms/RecipeCard";
import { filterRecipes } from "../helpers/FilterRecipes";
import { globalSearch, GlobalState } from "../redux/global";

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
  const recipes = useSelector((s: GlobalState) => s.recipesData);
  const search = useSelector((s: GlobalState) => s.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalSearch(""));
  }, []);

  return (
    <StyledWrapper>
      <Header></Header>
      <RecipeCardWrapper>
        {filterRecipes(recipes, search).map((item, i) => (
          <RecipeCard key={i} {...item} time={item.cooktime + item.waittime + item.preptime}></RecipeCard>
        ))}
      </RecipeCardWrapper>
    </StyledWrapper>
  );
};

export default Recipes;
