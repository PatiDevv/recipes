import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';

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

const TabelWithTime = (itemRecipe: FakeDataItem) => {
  const totalTime = itemRecipe.waittime + itemRecipe.cooktime + itemRecipe.preptime;

  return (
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
  );
};

function CalculateTime(time: number) {
  return time < 60 ? time + 'm' : Math.floor(time / 60) + 'h' + ' ' + (time % 60) + 'm';
}

export default TabelWithTime;
