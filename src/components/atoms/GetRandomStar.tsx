import { Star, StarOutline } from 'react-ionicons';
import styled from 'styled-components';

const Wrap = styled.div``;

const GetRandomStar = () => {
  const numberStar = getRandomNumber();

  return (
    <Wrap>
      <MyStar filled={numberStar >= 1} />
      <MyStar filled={numberStar >= 2} />
      <MyStar filled={numberStar >= 3} />
      <MyStar filled={numberStar >= 4} />
      <MyStar filled={numberStar >= 5} />
    </Wrap>
  );
};

const MyStar = ({ filled = true }: { filled?: boolean }) => {
  if (filled) {
    return <Star color={'#fff'} height="18px" width="18px" />;
  }
  return <StarOutline color={'#fff'} height="18px" width="18px" />;
};

export default GetRandomStar;

function getRandomNumber() {
  return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
}
