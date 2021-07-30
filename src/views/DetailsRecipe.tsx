import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TabelWithTime from '../components/molecules/TableWithTime';
import { FakeDataItem } from '../redux/global';
import { useAppSelector } from '../redux/types';
import { routes } from '../routes';

interface IRecipeParams {
  id: string;
}

const StyledWrapper = styled.div`
  height: 100vh;
`;

const StyledHeader = styled.div`
  background: #1d976c; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #93f9b9, #1d976c); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #93f9b9, #1d976c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 35vh;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 20% 30% 30%;
`;

const H1 = styled.h1`
  font-size: 250%;
  width: 50vw;
  line-height: 0.9;
  margin: 0;
  padding: 1% 0 0 5%;
  grid-column-start: 1;
`;

const H2 = styled.h2`
  font-size: 300%;
  font-weight: 400;
  width: 50vw;
  line-height: 0.9;
  margin: 0;
  text-align: center;
  grid-row-start: 2;
  justify-self: center;
`;

const H5 = styled.h5`
  font-size: 70%;
  width: 50vw;
  line-height: 0.9;
  margin: 0;
  padding: 3% 0 0 5%;
  font-weight: 400;
  grid-column-start: 1;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
  }
`;

const StyledViewNotFound = styled.div`
  background: #1d976c;
  background: -webkit-linear-gradient(to left, #93f9b9, #1d976c);
  background: linear-gradient(to left, #93f9b9, #1d976c);
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const StyledImg = styled.img`
  width: 80%;
  height: 500px;
  object-fit: cover;
  grid-area: 2 / 2;
`;

const DetailsRecipe = ({ match: { params } }: RouteComponentProps<IRecipeParams>) => {
  const recipes = useAppSelector((s) => s.Global.recipesData);

  const itemRecipe = recipes.find((item) => item.id.toString() === params.id);

  if (itemRecipe == null) {
    return (
      <StyledViewNotFound>
        <H2> Niestety, przepis o id: {params.id} nie istnieje. Spróbuj jeszcze raz. ;) </H2>
      </StyledViewNotFound>
    );
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <H5>
          <StyledNavLink to={routes.recipes}>Recipes</StyledNavLink> {'>'} {itemRecipe.name}
        </H5>
        <H1>{itemRecipe.name}</H1>

        {TabelWithTime(itemRecipe)}
        <StyledImg src={itemRecipe.image} alt="Recipe photo" />
      </StyledHeader>
      <div></div>
    </StyledWrapper>
  );
};

export default DetailsRecipe;
