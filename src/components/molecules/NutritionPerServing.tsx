import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';
import NutritionValueSingle from '../atoms/NutritionValueSingle';

const Wrap = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
  width: 95%;
  position: absolute;
  bottom: 3%;
  left: 2.5%;
`;

const WrapNutritionValues = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NutritionPerServing = (itemRecipe: FakeDataItem) => {
  return (
    <Wrap>
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

export default NutritionPerServing;
