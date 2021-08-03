import { useState } from 'react';
import { AddCircle, RemoveCircle } from 'react-ionicons';
import styled from 'styled-components';

const H2 = styled.h5`
  color: #000;
  margin: 0 3% 0 3%;
  font-family: 'Open Sans';
  font-weight: 400;
`;
const Wrap = styled.div`
  width: 50%;
  height: 35px;
  display: flex;
  grid-column-start: 2;
  justify-content: space-between;
  align-items: center;
  margin: 5% 25% 5% 25%;
`;

interface CounterProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>> //setValue(val: number): void; // setValue: (val: number) => void;
}

const Counter = ({ setValue, value }: CounterProps) => {
  const addPortion = () => setValue(value + 1);
  const removePortion = () => setValue(value > 2 ? value - 1 : 1);

  return (
    <Wrap>
      <RemoveCircle onClick={removePortion} color={'#60cf98'} height="40px" width="40px" style={{ verticalAlign: 'middle' }} />
      <H2>
        {value}
        {value == 1 ? ' serving' : ' servings'}{' '}
      </H2>
      <AddCircle onClick={addPortion} color={'#60cf98'} height="40px" width="40px" style={{ verticalAlign: 'middle' }} />
    </Wrap>
  );
};

export default Counter;
