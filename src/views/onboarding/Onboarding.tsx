import { useState } from 'react';
import styled from 'styled-components';
import CardUseGesture from '../../animations/CardUseGesture';
import apple from '../../images/apple.png';
import OnboardingWrapper from './OnboardingWrapper';

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
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  pointer-events: none;
`;

const Input = styled.input`
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.lightGreen};
  height: 30px;
  outline-style: none;
  font-size: medium;
  text-align: center;
`;

const Onboarding = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const defaultProps = { onNavigationPress: setCurrentPageIndex, currentIndex: currentPageIndex };

  return (
    <Wrap>
      <FormWrap>
        {(() => {
          switch (currentPageIndex) {
            case 0:
              return (
                <OnboardingWrapper
                  isBackButtonDisabled
                  title="Witamy Cię w kreatorze jadłospisu, zanim go dosatniesz musimy dowiedzieć się o Tobie kilku rzeczy"
                  {...defaultProps}
                />
              );
            case 1:
              return (
                <OnboardingWrapper title="Podaj nam swój wiek" {...defaultProps}>
                  <Input value={weight} onChange={({ target: { value } }) => setWeight(value)} />
                </OnboardingWrapper>
              );
            case 2:
              return (
                <OnboardingWrapper nextTitle="Finish" title="Podaj nam swoją wagę" {...defaultProps}>
                  <Input value={height} onChange={({ target: { value } }) => setHeight(value)} />
                </OnboardingWrapper>
              );
            default:
              return null;
          }
        })()}

        <CardUseGesture image={<Image src={apple} alt="Apple" />}></CardUseGesture>
      </FormWrap>
    </Wrap>
  );
};

export default Onboarding;
// const pages: OnboardingData[] = [
//   {
//     description: 'Witamy Cię w kreatorze jadłospisu, zanim go dosatniesz musimy dowiedzieć się o Tobie kilku rzeczy',
//   },
//   {
//     description: 'Podaj nam swój wiek',
//   },
//   {
//     description: 'Podaj nam swoją wagę',
//   },
//   {
//     description: 'Podaj nam swój wzrost',
//   },
//   {
//     description: 'Podaj nam swój cel',
//   },
//   {
//     description: 'Jeżeli cel masa lub redukcja, Podaj nam tempo redukcji/masy',
//   },
//   {
//     description: 'Podaj preferowaną ilość posiłków',
//   },
//   {
//     description: 'Twoja proponowana ilość kalorii + Twój cel zosatnie osiągnięty data',
//   },
// ];
