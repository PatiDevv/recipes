import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/organisms/Header';
import RecipeCard from '../components/organisms/RecipeCard';
import { filterRecipes } from '../helpers/FilterRecipes';
import { globalSearch } from '../redux/global';
import { useAppSelector } from '../redux/types';

const StyledWrapper = styled.div`
  background-color: #fff;
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
  // const recipes = useAppSelector((s) => s.Global.recipesData);
  // const search = useAppSelector((s) => s.Global.search);
  const { recipesData, search } = useAppSelector((s) => s.Global);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalSearch(''));
  }, []);

  return (
    <StyledWrapper>
      <Header></Header>
      <RecipeCardWrapper>
        {filterRecipes(recipesData, search).map((item, i) => (
          <RecipeCard key={i} {...item} time={item.cooktime + item.waittime + item.preptime}></RecipeCard>
        ))}
      </RecipeCardWrapper>
    </StyledWrapper>
  );
};

export default Recipes;
