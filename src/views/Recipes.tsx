import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/organisms/Header';
import RecipeCard from '../components/organisms/RecipeCard';
import { cardItemContainsSearchTerm } from '../helpers/FilterRecipes';
import { globalSearch } from '../redux/global';
import { useAppSelector } from '../redux/types';

const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.Neuton};
  background-color: #fff;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  color: #fff;
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
      <Header />
      <RecipeCardWrapper>
        {recipesData
          .filter((val) => cardItemContainsSearchTerm(val, search))
          .map((item, i) => (
            <RecipeCard key={i} {...item} time={item.cooktime + item.waittime + item.preptime}></RecipeCard>
          ))}
      </RecipeCardWrapper>
    </StyledWrapper>
  );
};

export default Recipes;
