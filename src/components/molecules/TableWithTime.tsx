import styled from 'styled-components';
import { FakeDataItem } from '../../redux/global';
import { Print, ShareSocial, Star, StarOutline } from 'react-ionicons';
import GetRandomStar from '../atoms/GetRandomStar';

const StyledTable = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-row-start: 3;
  grid-template-columns: repeat(4, 15%) 1fr 10% 10%;
  grid-template-rows: 50% 50%;
  margin-left: 5%;
  font-weight: ${({ theme }) => theme.weightFonts.OpenSans.regular};
  font-family: ${({ theme }) => theme.font.OpenSans};
  font-size: 20px;
  width: 93%;
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

const StyledDivTableU = styled.div`
  align-self: end;
  justify-self: center;
  margin: 0;
  font-size: 80%;
`;

const StyledDivTableD = styled.div`
  align-self: start;
  justify-self: center;
  margin: 0;
  font-size: 80%;
`;

const StyledDivTableStarD = styled.div`
  align-self: start;
  justify-self: center;
  margin: 0;
  font-size: 80%;
`;

const StyledDivTableStarU = styled.div`
  align-self: end;
  justify-self: center;
  margin: 0;
  font-size: 80%;
`;

const TabelWithTime = (itemRecipe: FakeDataItem) => {
  const totalTime = itemRecipe.waittime + itemRecipe.cooktime + itemRecipe.preptime;

  return (
    <StyledTable>
      <H6D>Total Time</H6D>
      <H6D>Prep Time</H6D>
      <H6D>Wait Time</H6D>
      <H6D>Cook Time</H6D>

      <StyledDivTableStarU> {GetRandomNumber()} revievs</StyledDivTableStarU>
      <StyledDivTableU>
        <ShareSocial color={'#ffffff'} height="25px" width="25px" />
      </StyledDivTableU>
      <StyledDivTableU>
        <Print color={'#ffffff'} height="25px" width="25px" />
      </StyledDivTableU>

      <H6U>{CalculateTime(totalTime)}</H6U>
      <H6U>{CalculateTime(itemRecipe.preptime)}</H6U>
      <H6U>{CalculateTime(itemRecipe.waittime)}</H6U>
      <H6U>{CalculateTime(itemRecipe.cooktime)}</H6U>
      <StyledDivTableStarD>
        <GetRandomStar></GetRandomStar>
      </StyledDivTableStarD>
      <StyledDivTableD>share</StyledDivTableD>
      <StyledDivTableD>print</StyledDivTableD>
    </StyledTable>
  );
};

function CalculateTime(time: number) {
  return time < 60 ? time + 'm' : Math.floor(time / 60) + 'h' + ' ' + (time % 60) + 'm';
}

function GetRandomNumber() {
  return Math.floor(Math.random() * (500 - 0)) + 0;
}

export default TabelWithTime;
