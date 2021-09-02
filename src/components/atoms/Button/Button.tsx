import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5% 1%;
  background-color: #60cf98;
  width: fit-content;
  height: fit-content;
  border: none;
  border-radius: 50px;
  font-size: 80%;
  font-weight: ${({ theme }) => theme.weightFonts.OpenSans.regular};
  color: #fff;
  text-decoration: none;
  margin: 20px;

  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.OpenSans}!important;
  display: flex;
  justify-content: center;
`;

export default Button;
