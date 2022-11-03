import {  useState } from 'react';
import styled from 'styled-components';
import CardUseGesture from '../../animations/CardUseGesture';
import { RadioButton } from '../../components/atoms/Input/RadioButton';
import apple from '../../images/apple.png';
import { Summary } from './components/Summary';
import { GOAL, PAL } from './const';
import OnboardingWrapper from './OnboardingWrapper';
import { SummaryWrapper } from './SummaryWrapper';




export const Onboarding = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [gender, setGender] = useState<string | undefined>(undefined)
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [height, setHeight] = useState("");
  const [pAL, setPAL] = useState<keyof typeof PAL | undefined>(undefined);
  const [goal, setGoal] = useState<keyof typeof GOAL | undefined>(undefined);

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
                <OnboardingWrapper isEmptyInput={!gender} question="Płeć" {...defaultProps}>
                  <RadioButton.Group onValueChange={setGender} value={gender} >
                    <RadioButton.Item label="Kobieta" value="Kobieta"/>
                    <RadioButton.Item label="Mężczyzna" value="Mężczyzna"/>
                  </RadioButton.Group>
                </OnboardingWrapper>
              );
            case 2:
              return (
                <OnboardingWrapper isEmptyInput={!age} question="Wiek" {...defaultProps}>
                  <Input type="number" value={age} onChange={({ target: { value } }) => setAge(value)} />
                </OnboardingWrapper>
              );
            case 3:
              return (
                 <OnboardingWrapper isEmptyInput={!height} question="Wzrost (cm)" {...defaultProps}>
                   <Input type="number"  value={height} onChange={({ target: { value } }) => setHeight(value)} />
                </OnboardingWrapper>
                );
            case 4:
              return (
                <OnboardingWrapper isEmptyInput={!weight} question="Waga" {...defaultProps}>
                  <Input type="number" value={weight} onChange={({ target: { value } }) => setWeight(value)} />
                </OnboardingWrapper>
              );
           case 5:
             return (
                <OnboardingWrapper isEmptyInput={!targetWeight} question="Docelowa waga" {...defaultProps}>
                  <Input type="number" value={targetWeight} onChange={({ target: { value } }) => setTargetWeight(value)} />
                </OnboardingWrapper>
              );
          case 6:
             return (
                <OnboardingWrapper isEmptyInput={!pAL}  question="Tryb życia" {...defaultProps}>
                    <RadioButton.Group onValueChange={val => setPAL(val as keyof typeof PAL)} value={pAL} >
                      <RadioButton.Item label={PAL['1.2']} value={"1.2"}/>
                      <RadioButton.Item label={PAL['1.4']} value={"1.4"}/>
                      <RadioButton.Item label={PAL['1.6']} value={"1.6"}/>
                      <RadioButton.Item label={PAL['1.8']} value={"1.8"}/>
                      <RadioButton.Item label={PAL['2']} value={"2"}/>
                    </RadioButton.Group>
                </OnboardingWrapper>
              );
              case 7:
                return (
                   <OnboardingWrapper isEmptyInput={!goal}  question="Tempo przemiany na tydzień" {...defaultProps}>
                     <RadioButton.Group onValueChange={val => setGoal(val as keyof typeof GOAL)} value={goal} >
                      <RadioButton.Item label={GOAL["0.2"]} value={"0.2"}/>
                      <RadioButton.Item label={GOAL["0.5"]} value={"0.5"}/>
                      <RadioButton.Item label={GOAL["0.7"]} value={"0.7"}/>
                      <RadioButton.Item label={GOAL["1"]} value={"1"}/>
                    </RadioButton.Group>
                   </OnboardingWrapper>
                 );
                 case 8:
                return (
                   <OnboardingWrapper isSummary nextTitle="Zakończ" question="Podsumowanie informacji o Tobie" {...defaultProps}>
                      <Summary definition="Płeć:" value={gender!} />
                      <Summary definition="Wiek:" value={age + " lat"} />
                      <Summary definition="Waga:" value={weight + " kg"} />
                      <Summary definition="Docelowa waga:" value={targetWeight + " kg"} />
                      <Summary definition="Wzrost:" value={height + " cm"} />
                      <Summary definition="Tryb życia:" value={PAL[pAL!]} />
                      <Summary definition="Tempo zmiany:" value={GOAL[goal!]} />
                   </OnboardingWrapper>
                 );
           
            default:
              return (
                <SummaryWrapper weight={weight} targetWeight={targetWeight} height={height} age={age} gender={gender} goal={goal} pAL={pAL}/>
              );
          }
        })()}
        <CardUseGesture image={<Image src={apple} alt="Apple" />}></CardUseGesture>
      </FormWrap>
    </Wrap>
  );
};



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
  height: 1.875rem;
  outline-style: none;
  font-size: xx-large;
  text-align: center;
  max-width: 10rem;
`;