import { useState } from 'react';
import { CheckmarkCircle, Restaurant } from 'react-ionicons';
import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';
import { theme } from '../../theme/mainTheme';
import Counter from '../atoms/Counter';

const H1 = styled.h1`
  color: #000;
  margin: 0 0 2% 0;

  height: fit-content;
`;

const Wrap = styled.div`
  background-color: #fbf8f9;
  width: 100%;
  height: fit-content;

  padding: 4% 0 7% 7%;
`;

const WrapInstruction = styled.div`
  color: #000;
  width: 550px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.font.OpenSans};
  font-size: 85%;
`;

const WrapInstructions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px; ;
`;

const HowToMakeIt = ({ itemRecipe }: { itemRecipe: FakeDataItem }) => {
  const instruction = itemRecipe.instructions.split('.').map((i) => i.concat('.'));
  instruction.pop();

  return (
    <Wrap>
      <H1>How To Make It</H1>
      {instruction.map((i) => (
        <WrapInstructions>
          <Restaurant color={'#60cf98'} height="25px" width="25px" style={{ verticalAlign: 'bottom' }} />
          <WrapInstruction>{i}</WrapInstruction>
        </WrapInstructions>
      ))}
    </Wrap>
  );
};

export default HowToMakeIt;
