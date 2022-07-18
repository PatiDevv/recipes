import styled from 'styled-components';
import background from '../images/background.jpg';
import Button from '../components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${background});
  background-size: 120%;
  background-position: 60% 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 2000px) {
    background-position: 100% 100%;
  }

  @media (max-width: 1800px) {
    background-position: 80% 100%;
  }

  @media (max-width: 1680px) {
    background-position: 70% 100%;
  }

  @media (max-width: 1600px) {
    background-size: 130%;
    background-position: 60% 100%;
  }

  @media (max-width: 1500px) {
    background-size: 140%;
  }

  @media (max-width: 1400px) {
    background-size: 150%;
  }

  @media (max-width: 1300px) {
    background-size: 160%;
  }

  @media (max-width: 1200px) {
    background-size: 170%;
    font-size: 90%;
  }

  @media (max-width: 1100px) {
    background-size: 180%;
    font-size: 85%;
  }

  @media (max-width: 1000px) {
    background-size: 200%;
    font-size: 80%;
  }

  @media (max-width: 900px) {
    background-size: 250%;
    font-size: 80%;
  }

  @media (max-width: 850px) {
    background-size: 280%;
  }
`;

const MainText = styled.div`
  font-family: ${({ theme }) => theme.font.Neuton};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-weight: ${({ theme }) => theme.weightFonts.Neuton.bold};
  font-size: 400%;
  line-height: 0.9;
  color: #1c2025;
  margin: 20px 0;
  text-align: center;
`;

const StyledH2 = styled.h2`
  width: 30%;
  height: fit-content;
  font-weight: ${({ theme }) => theme.weightFonts.Neuton.extraLight};
  font-size: 140%;
  line-height: 1.2;
  color: #1c2025;
  margin: 20px 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 80%;
  width: max-content;
`;

const WrapButton = styled.div`
  display: flex;
`;

const HomePage = () => {
  return (
    <StyledWrap>
      <MainText>
        <StyledH1>
          Healthy Recipes <br />
          for every day
        </StyledH1>
        <StyledH2>
          Eat delicious and healthy every day. In our database you will find <strong>10,000</strong> recipes. Ingredients, proportions, shopping list on one website.{' '}
          <strong>We are there for you.</strong>
        </StyledH2>
        <WrapButton>
          <Button>
            <StyledLink to={`/all`}> Explore recipes</StyledLink>
          </Button>
          <Button>
            <StyledLink to={`/onboarding`}> Give me menu</StyledLink>
          </Button>
        </WrapButton>
      </MainText>
    </StyledWrap>
  );
};

export default HomePage;
