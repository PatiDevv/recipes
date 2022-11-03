import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';
import { getRoute } from '../../routes';

const StyledWrapper = styled.div`
  height: 40%;
  width: 400px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 400;
  margin: 1%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  position: relative;
  overflow: hidden;

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
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
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  padding: 13px 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const H3Button = styled.h3`
  justify-self: center;
  align-self: end;
  margin: 0;
  padding: 5% 0 0 0;
  margin: 5% 0 0 0;
  font-size: 16px;
  font-weight: 400;
`;

const H3Top = styled.h3`
  justify-self: center;
  align-self: start;
  margin: 0;
  padding: 0 0 5% 0;
  margin: 0 0 5% 0;
  font-size: 16px;
  font-weight: 400;
`;

const Line = styled.hr`
  width: 30%;
  margin: 0 35%;
  border: none;
  border-radius: 100%;
  background-color: #fff;
  height: 1px;
  margin-top: 12px;
`;

const ImageWrapper = styled.img`
  border-radius: 30px 30px 0 0;
  height: 300px;
  width: 400px;
  object-fit: cover;
  max-width: 100%;
  vertical-align: top;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  top: calc(80%);
  width: 100%;

  background-color: ${({ theme }) => theme.colors.lightGreen};
  padding: 0 10px 100px 10px;

  :before {
    position: absolute;
    content: '';
    z-index: 2;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 10px;

    background-image: linear-gradient(to bottom, transparent 0%, #60cf98 100%);
  }

  :hover {
    top: 63%;
  }
`;

export interface RecipeCardProps extends FakeDataItem {
  time: number;
}

const RecipeCard = ({ name, calories, protein, carbs, fat, time, image, id }: RecipeCardProps) => {
  const history = useHistory();

  return (
    <StyledWrapper onClick={() => history.push(getRoute.recipe(id))}>
      <ImageWrapper src={image} alt="Jedzenie" />
      <Figcaption>
        <Header>{name}</Header>
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
      </Figcaption>
    </StyledWrapper>
  );
};

export default RecipeCard;
