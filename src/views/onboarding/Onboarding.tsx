import { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import CardUseGesture from '../../animations/CardUseGesture';
import { RadioInput } from '../../components/atoms/Input/RddioInput';
import apple from '../../images/apple.png';
import { Summary } from './components/Summary';
import OnboardingWrapper from './OnboardingWrapper';

export const Onboarding = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
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
                  title="Witamy Cię"
                  subtitle="Zanim stworzymy, spersonalizowany jadłospis tylko dla Ciebie, musimy zadać Ci kilka pytań."
                  {...defaultProps}
                />
              );
            case 1:
              return (
                <OnboardingWrapper question="Podaj nam swóją płeć" {...defaultProps}>
                  <RadioInput  label="kobieta" label2="mężczyzna" setSelectedRadioBtn={setGender} selectedRadioBtn={gender}/>
                </OnboardingWrapper>
              );
            case 2:
              return (
                <OnboardingWrapper question="Podaj nam swój wiek" {...defaultProps}>
                  <Input value={age} onChange={({ target: { value } }) => setAge(value)} />
                </OnboardingWrapper>
              );
            case 3:
              return (
                <OnboardingWrapper question="Podaj nam swoją wagę" {...defaultProps}>
                  <Input value={weight} onChange={({ target: { value } }) => setWeight(value)} />
                </OnboardingWrapper>
              );
            case 4:
              return (
                <OnboardingWrapper nextTitle="Finish" question="Podaj nam swój wzrost" {...defaultProps}>
                  <Input value={height} onChange={({ target: { value } }) => setHeight(value)} />
                </OnboardingWrapper>
              );
            default:
              return (
                <WrapSummary>
                  <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem' }}>Podsumowanie</div>

                  <div style={{ marginTop: '2rem' }}>
                    <Summary definition="Twój płeć:" value={gender} />
                    <Summary definition="Twój wiek:" value={age} />
                    <Summary definition="Twoja waga:" value={weight} />
                    <Summary definition="Twój wzrost:" value={height} />
                  </div>
                </WrapSummary>
              );
          }
        })()}

        <CardUseGesture image={<Image src={apple} alt="Apple" />}></CardUseGesture>
      </FormWrap>
    </Wrap>
  );
};

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

const WrapSummary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 7% 0;
`;

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
