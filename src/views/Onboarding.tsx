import { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import apple from '../images/apple.png';
import CardUseGesture from '../animations/CardUseGesture';

const Wrap = styled.div`
  background: #1d976c;
  background: -webkit-linear-gradient(to left, #93f9b9, #1d976c);
  background: linear-gradient(to right, #93f9b9, #1d976c);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrap = styled.div`
  height: 55%;
  width: 80%;
  background-color: #fff;

  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  flex: 0 1 auto;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 70%;
  margin: 4%;
  pointer-events: none;
  cursor: pointer;
`;

const H2 = styled.h2`
  color: #000;
  padding: 0;
  text-align: center;
  font-weight: 400;
  margin: 0 10%;
`;

const Buttonn = styled(Button)`
  background-color: #60cf98;
  padding: 10px 50px;

  margin-top: 10%;
  width: 50%;
`;

const ColumnIWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

const EmptyDiv = styled.div`
  width: 50%;
  height: 100px;
`;

interface OnboardingData {
  description: string;
}

const pages: OnboardingData[] = [
  {
    description: 'Witamy Cię w kreatorze jadłospisu, zanim go dosatniesz musimy dowiedzieć się o Tobie kilku rzeczy',
  },
  {
    description: 'Podaj nam swój wiek',
  },
  {
    description: 'Podaj nam swoją wagę',
  },
  {
    description: 'Podaj nam swój wzrost',
  },
  {
    description: 'Podaj nam swój cel',
  },
  {
    description: 'Jeżeli cel masa lub redukcja, Podaj nam tempo redukcji/masy',
  },
  {
    description: 'Podaj preferowaną ilość posiłków',
  },
  {
    description: 'Twoja proponowana ilość kalorii + Twój cel zosatnie osiągnięty data',
  },
];

const Onboarding = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = pages[currentPageIndex];

  return (
    <Wrap>
      <FormWrap>
        <ColumnIWrap>
          <H2>{currentPage.description}</H2>
          <EmptyDiv></EmptyDiv>
          <DivButton>
            {currentPageIndex > 0 && <Buttonn onClick={() => setCurrentPageIndex(currentPageIndex - 1)}>cofnij</Buttonn>}
            {currentPageIndex < pages.length - 1 && <Buttonn onClick={() => setCurrentPageIndex(currentPageIndex + 1)}>next</Buttonn>}
          </DivButton>
        </ColumnIWrap>

        <CardUseGesture image={<Image src={apple} alt="Apple" />}></CardUseGesture>
      </FormWrap>
    </Wrap>
  );
};

export default Onboarding;
