import styled from "styled-components";
import SearchInput from "../components/atoms/Input/SearchInput";
import background from "../images/background.jpg";

const StyledWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${background});
  background-size: 200%;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainText = styled.div`
  flex: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyedSearchInput = styled(SearchInput)`
  margin: 1%;
  width: 50%;
  position: absolute;
  left: 10%;
  top: 2%;
`;

const StyledH1 = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 400%;
  line-height: 0.9;
  color: #1c2025;
  margin: 20px 0;
  text-align: center;
`;

const StyledH2 = styled.h2`
  width: 30%;
  height: 20%;
  font-weight: ${({ theme }) => theme.extraLight};
  font-size: 140%;
  line-height: 1.2;
  color: #1c2025;
  margin: 20px 0;
  text-align: center;
`;

const HomePage = () => {
  return (
    <StyledWrap>
      <StyedSearchInput placeholder="Find Me - Your Perfect Recipe for Today"></StyedSearchInput>
      <MainText>
        <StyledH1>
          Healthy Recipes <br />
          for every day
        </StyledH1>
        <StyledH2>
          Eat delicious and healthy every day. In our database you will find <strong>10,000</strong> recipes. Ingredients, proportions, shopping list on one website.{" "}
          <strong>We are there for you.</strong>
        </StyledH2>
      </MainText>
    </StyledWrap>
  );
};

export default HomePage;
