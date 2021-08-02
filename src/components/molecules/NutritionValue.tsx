import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';
import NutritionValueSingle from '../atoms/NutritionValueSingle';

const Wrap = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
  width: 80%;
`;

const H2 = styled.h2`
  color: #000;
  font-size: 135%;
  font-family: ${({ theme }) => theme.font.Neuton};
  font-weight: ${({ theme }) => theme.weightFonts.Neuton.bold};
  margin: 0;
  padding: 5% 0 5% 0;
  text-align: center;
`;

const WrapNutritionValues = styled.div`
  display: flex;
`;

const NutritionValue = (itemRecipe: FakeDataItem) => {
  return (
    <Wrap>
      <H2>Nutrition per serving</H2>
      <WrapNutritionValues>
        <NutritionValueSingle name="Calories" value={itemRecipe.calories} unit={'kcal'}></NutritionValueSingle>
        <NutritionValueSingle name="Protein" value={itemRecipe.protein} unit={'g'}></NutritionValueSingle>
        <NutritionValueSingle name="Fats" value={itemRecipe.fat} unit={'g'}></NutritionValueSingle>
        <NutritionValueSingle name="Carbs" value={itemRecipe.carbs} unit={'g'}></NutritionValueSingle>
        <NutritionValueSingle name="Fibre" value={itemRecipe.fiber} unit={'g'}></NutritionValueSingle>
      </WrapNutritionValues>
    </Wrap>
  );
};

export default NutritionValue;
