import { RouteComponentProps } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
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

const StyledTable = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-row-start: 3;
  grid-template-columns: repeat(4, 12.5%) 25% 25%;
  grid-template-rows: 50% 50%;
  width: 90%;
  margin-left: 5%;
  font-weight: ${({ theme }) => theme.weightFonts.OpenSans.regular};
  font-family: ${({ theme }) => theme.font.OpenSans};
  font-size: 20px;
`;

const H6D = styled.h6`
  margin: 0;
  align-self: end;
  justify-self: start;
  font-size: 85%;
  font-weight: ${({ theme }) => theme.weightFonts.OpenSans.regular};
`;

const H6U = styled.h6`
  align-self: start;
  justify-self: start;
  margin: 0;
  font-size: 75%;
  font-weight: ${({ theme }) => theme.weightFonts.Neuton.bold};
`;

const StyledDivTableD = styled.div`
  align-self: end;
  justify-self: center;
  margin: 0;
`;

const StyledDivTableU = styled.div`
  align-self: start;
  justify-self: center;
  margin: 0;
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

  const totalTime = itemRecipe.waittime + itemRecipe.cooktime + itemRecipe.preptime;

  return (
    <StyledWrapper>
      <StyledHeader>
        <H5>
          <StyledNavLink to={routes.recipes}>Recipes</StyledNavLink> {'>'} {itemRecipe.name}
        </H5>
        <H1>{itemRecipe.name}</H1>

        <StyledTable>
          <H6D>Total Time</H6D>
          <H6D>Prep Time</H6D>
          <H6D>Wait Time</H6D>
          <H6D>Cook Time</H6D>

          <StyledDivTableD> 3 revievs</StyledDivTableD>
          <StyledDivTableD>jakies ikony</StyledDivTableD>

          <H6U>{CalculateTime(totalTime)}</H6U>
          <H6U>{CalculateTime(itemRecipe.preptime)}</H6U>
          <H6U>{CalculateTime(itemRecipe.waittime)}</H6U>
          <H6U>{CalculateTime(itemRecipe.cooktime)}</H6U>
          <StyledDivTableU> gwiazdki</StyledDivTableU>
          <StyledDivTableU>opisy ikon</StyledDivTableU>
        </StyledTable>
        <StyledImg src={itemRecipe.image} alt="Recipe photo" />
      </StyledHeader>
      <div></div>
    </StyledWrapper>
  );
};

export default DetailsRecipe;

function CalculateTime(time: number) {
  return time < 60 ? time + 'm' : Math.floor(time / 60) + 'h' + ' ' + (time % 60) + 'm';
}
