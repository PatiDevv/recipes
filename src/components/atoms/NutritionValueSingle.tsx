import styled from 'styled-components';

interface NutritionValueInterface {
  name: string;
  value: number;
  unit: string;
}
const WrapNutritionValueSingle = styled.div`
  font-family: ${({ theme }) => theme.font.OpenSans};
  font-size: 80%;
  color: white;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 17%;
  height: 60px;
`;
const NameNutritionValue = styled.div`
  font-weight: 400;
  font-size: 95%;
`;
const ValueNutritionValue = styled.div`
  font-weight: 600;
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
