import { useState } from 'react';
import { CheckmarkCircle } from 'react-ionicons';
import styled from 'styled-components';
import stringContainsNumber from '../../helpers/stringContainsNumber';
import { FakeDataItem } from '../../redux/global';
import Counter from '../atoms/Counter';

const H1 = styled.h1`
  color: #000;
  margin: 0 0 0 2%;

  height: fit-content;
`;

const Wrap = styled.div`
  width: 50%;
  height: fit-content;
  margin-top: 5%;
  margin-left: 7%;
`;

const WrapIngredient = styled.div`
  color: black;
  width: 80%;
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${({ theme }) => theme.font.OpenSans};
  font-size: 85%;
`;

const Ingridient = styled.div`
  margin-left: 10px;
`;

const HeaderIngredients = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 5% 0;
`;

const Ingredients = (itemRecipe: FakeDataItem) => {
  const [value, setValue] = useState(1);

  return (
    <Wrap>
      <HeaderIngredients>
        <H1>Ingredients</H1>
        <Counter {...{ value, setValue }} />
      </HeaderIngredients>

      {itemRecipe.ingredients.map((item) => (
        <WrapIngredient>
          <CheckmarkCircle color={'#60cf98'} height="25px" width="25px" style={{ verticalAlign: 'middle' }} />
          <Ingridient>
            {parseFloat(item) >= 0 ? Math.round(parseFloat(item) * value * 10) / 10 : null} {stringContainsNumber(item) ? item.split(' ').slice(1).join(' ') : item}
          </Ingridient>
        </WrapIngredient>
      ))}
    </Wrap>
  );
};

export default Ingredients;
