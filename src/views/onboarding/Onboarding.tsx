import {  useState } from 'react';
import styled from 'styled-components';
import CardUseGesture from '../../animations/CardUseGesture';
import { RadioButton } from '../../components/atoms/Input/RadioButton';
import { caloricDemand } from '../../helpers/caloricDemand';
import apple from '../../images/apple.png';
import { Summary } from './components/Summary';
import OnboardingWrapper from './OnboardingWrapper';

const PAL = {
  "1.2": "leżąco-siedzący tryb życia",
  "1.4": "praca biurowa + obowiązki domowe",
  "1.6": "praca biurowa + treningi 2-3 po 1h",
  "1.8": "pracownik fizyczny",
  "2": "pracownik fizyczny + aktywny tryb życia"
}

const GOAL = {
  "0.2": "0.2kg",
  "0.5": "0.5kg",
  "0.7": "0.7kg",
  "1":  "1kg",
}


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

  const weightNumber = parseFloat(weight);
  const targetWeightNumber = parseFloat(targetWeight);
  const heightNumber = parseFloat(height);
  const ageNumber = parseFloat(age);
  const goalNumber = parseFloat(goal!);
  const pPM = caloricDemand(gender, weightNumber, heightNumber, ageNumber);
  const cPM = Math.round(parseFloat((pPM * parseFloat(pAL!)).toFixed(2)));

  const isWeightHigherThanTargetWeight = targetWeightNumber<weightNumber;

  const weightGoal = isWeightHigherThanTargetWeight ? weightNumber-targetWeightNumber : targetWeightNumber- weightNumber;
  const calorieToWeight = isWeightHigherThanTargetWeight ? Math.round((cPM*7-goalNumber*7000)/7) : Math.round((cPM*7+goalNumber*7000)/7);

  const quantityCalories = isWeightHigherThanTargetWeight ? Math.round(cPM- calorieToWeight) : Math.round(calorieToWeight-cPM);
  const time = Math.round(weightGoal/goalNumber);

  

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
                <OnboardingWrapper question="Płeć" {...defaultProps}>
                  <RadioButton.Group onValueChange={setGender} value={gender} >
                    <RadioButton.Item label="Kobieta" value="Kobieta"/>
                    <RadioButton.Item label="Mężczyzna" value="Mężczyzna"/>
                  </RadioButton.Group>
                </OnboardingWrapper>
              );
            case 2:
              return (
                <OnboardingWrapper question="Wiek" {...defaultProps}>
                  <Input type="number" value={age} onChange={({ target: { value } }) => setAge(value)} />
                </OnboardingWrapper>
              );
            case 3:
              return (
                 <OnboardingWrapper question="Wzrost (cm)" {...defaultProps}>
                   <Input type="number"  value={height} onChange={({ target: { value } }) => setHeight(value)} />
                </OnboardingWrapper>
                );
            case 4:
              return (
                <OnboardingWrapper question="Waga" {...defaultProps}>
                  <Input type="number" value={weight} onChange={({ target: { value } }) => setWeight(value)} />
                </OnboardingWrapper>
              );
           case 5:
             return (
                <OnboardingWrapper question="Docelowa waga" {...defaultProps}>
                  <Input type="number" value={targetWeight} onChange={({ target: { value } }) => setTargetWeight(value)} />
                </OnboardingWrapper>
              );
          case 6:
             return (
                <OnboardingWrapper  question="Tryb życia" {...defaultProps}>
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
                   <OnboardingWrapper  question="Tempo przemiany na tydzień" {...defaultProps}>
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
                      <Summary definition="Tryb życia" value={PAL[pAL!]} />
                      <Summary definition="Tempo zmiany:" value={GOAL[goal!]} />
                   </OnboardingWrapper>
                 );
           
            default:
              return (
                <WrapSummary>
                  <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2rem' }}>Podsumowanie</div>

                  <div style={{ marginTop: '2rem' }}>
                   
                    <Summary definition="Twoja podstawowa przemiana materii:" value={pPM} />
                    <Summary definition="Twóje całkowita przemiana materii:" value={cPM} />
                    <Summary definition="Twój cel" value={weightGoal} />
                    <Summary definition="Czas na osiągnięcie Twojego celu" value={time} />
                    <Summary definition="Ilosc kalorii zmienna" value={quantityCalories} />
                    <Summary definition="Twoja ilosc kalorii którą powinienies spoywać aby osiągnoac twoj cel" value={calorieToWeight} />
                    
                   
                   
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


