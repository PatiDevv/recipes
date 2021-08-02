import styled from 'styled-components';

interface NutritionValueInterface {
  name: string;
  value: number;
  unit: string;
}
const WrapNutritionValueSingle = styled.div`
  font-family: ${({ theme }) => theme.font.OpenSans};
  font-size: 80%;
  color: black;
  background-color: #f1eceb;
  width: 100px;
  height: 70px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const NameNutritionValue = styled.div`
  font-weight: ${({ theme }) => theme.weightFonts.OpenSans.light};
`;
const ValueNutritionValue = styled.div`
  background-color: white;
  width: 90%;
  font-weight: 400;
  text-align: center;
`;

const NutritionValueSingle = ({ name, value, unit }: NutritionValueInterface) => {
  return (
    <WrapNutritionValueSingle>
      <NameNutritionValue>{name}</NameNutritionValue>
      <ValueNutritionValue>
        {value}
        {unit}
      </ValueNutritionValue>
    </WrapNutritionValueSingle>
  );
};

export default NutritionValueSingle;
