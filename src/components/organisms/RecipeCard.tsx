import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';
import { getRoute, routes } from '../../routes';

const StyledWrapper = styled.div`
  background-color: #60cf98;
  height: 40%;
  width: 400px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 400;
  margin: 1%;
  cursor: pointer;
`;

const ImageWrapper = styled.img`
  border-radius: 30px 30px 0 0;
  height: 300px;
  width: 400px;
  object-fit: cover;
`;

const StyledTable = styled.div`
  display: grid;

  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50% 50%;
  height: 25%;
  width: 100%;
`;

const Header = styled.header`
  height: 15%;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 13px;
`;

const H3Button = styled.h3`
  justify-self: center;
  align-self: end;
  margin: 0;
  padding: 5% 0 0 0;
  margin: 5% 0 0 0;
  font-size: 18px;
  font-weight: 400;
`;

const H3Top = styled.h3`
  justify-self: center;
  align-self: start;
  margin: 0;
  padding: 0 0 5% 0;
  margin: 0 0 5% 0;
  font-size: 18px;
  font-weight: 400;
`;

const Line = styled.hr`
  width: 30%;
  margin: 0 35%;
`;

interface RecipeCardProps extends FakeDataItem {
  time: number;
}

const RecipeCard = ({ name, calories, protein, carbs, fat, time, image, id }: RecipeCardProps) => {
  const history = useHistory();

  return (
    <StyledWrapper onClick={() => history.push(getRoute.recipe(id))}>
      <ImageWrapper src={image} alt="Jedzenie" />

      <Header>{name.length > 35 ? name.substring(0, 35) + '...' : name}</Header>
      <Line />
      <StyledTable>
        <H3Button>Calories</H3Button>
        <H3Button>Protein</H3Button>
        <H3Button>Carbs</H3Button>
        <H3Button>Fats</H3Button>
        <H3Button>Time</H3Button>
        <H3Top>{calories}</H3Top>
        <H3Top>{protein}</H3Top>
        <H3Top>{carbs}</H3Top>
        <H3Top>{fat}</H3Top>
        <H3Top>{time}'</H3Top>
      </StyledTable>
    </StyledWrapper>
  );
};

export default RecipeCard;
