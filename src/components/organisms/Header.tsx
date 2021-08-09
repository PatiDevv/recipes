import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { globalSearch } from '../../redux/global';
import { useAppSelector } from '../../redux/types';
import SearchInput from '../atoms/Input/SearchInput';

const StyedSearchInput = styled(SearchInput)`
  margin: 1%;
  width: 50%;
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: 400;
`;

const StyledWrapper = styled.div`
  background: #1d976c;
  background: -webkit-linear-gradient(to left, #93f9b9, #1d976c);
  background: linear-gradient(to right, #93f9b9, #1d976c);
  background-size: 100%;
  width: 100vw;
  height: 100px;
  margin: 0;

  display: flex;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: baseline;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const recipes = useAppSelector((s) => s.Global.recipesData);

  return (
    <StyledWrapper>
      <H2>Recipes ({recipes.length})</H2>
      <StyedSearchInput placeholder="Find Me - Your Perfect Recipe for Today" onChange={(e) => dispatch(globalSearch(e.target.value))}></StyedSearchInput>

      <H2>Sort By</H2>
      <H2>Filter</H2>
    </StyledWrapper>
  );
};
export default Header;
