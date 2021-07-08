import styled from "styled-components";
import background from "../images/background.jpg";

const StyledDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${background});
  background-size: 200%;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 400%;
  line-height: 0.9;
  color: #1c2025;
  margin: 15px 0;
  text-align: center;
`;

const StyledH2 = styled.h2`
  width: 30%;
  height: 20%;
  font-weight: ${({ theme }) => theme.extraLight};
  font-size: 140%;
  line-height: 1.2;
  color: #1c2025;
  margin: 15px 0;
  text-align: center;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <StyledH1>
        Healthy Recipes <br />
        for every day
      </StyledH1>
      <StyledH2>
        Eat delicious and healthy every day. In our database you will find <strong>10,000</strong> recipes. Ingredients, proportions, shopping list on one website.{" "}
        <strong>We are there for you.</strong>
      </StyledH2>
    </StyledDiv>
  );
};

export default HomePage;
