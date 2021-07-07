import styled from "styled-components";
import background from "../images/background.jpg";

const StyledDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-size: 45px;
  font-family: sans-serif;
  top: 30%;
  left: 15%;
  position: absolute;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <StyledH1>Healthy Recipes for every day</StyledH1>
    </StyledDiv>
  );
};

export default HomePage;
