import styled from "styled-components";
import Button from "../atoms/Button/Button";
import SearchInput from "../atoms/Input/SearchInput";
import { globalSearch } from "../../actions/indnex";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";

const StyedSearchInput = styled(SearchInput)`
  margin: 1%;
  width: 50%;
`;

const StyledH2 = styled.h2`
  margin: 0;
`;

const StyledButton = styled(Button)`
  font-size: 70%;
`;

const StyledWrapper = styled.div`
  background-color: #f9f7f4;
  background-size: 100%;
  width: 100vw;

  margin: 0;

  display: flex;
  align-content: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((s: RootState) => s.recipesData);

  return (
    <StyledWrapper>
      <StyledH2>Recipes ({recipes.length})</StyledH2>
      <StyedSearchInput placeholder="Find Me - Your Perfect Recipe for Today" onChange={(e) => dispatch(globalSearch(e.target.value))}></StyedSearchInput>

      <StyledButton>SORT BY</StyledButton>
      <StyledButton>FILTER</StyledButton>
    </StyledWrapper>
  );
};
export default Header;
