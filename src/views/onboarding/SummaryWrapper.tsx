import styled from "styled-components";
import Button from "../../components/atoms/Button/Button";
import { caloricDemand } from "../../helpers/caloricDemand";
import { StyledLink } from "../HomePage";
import { Summary } from "./components/Summary";
import { GOAL, PAL } from "./const";


interface SummaryWrapperProps {
    weight: string;
    targetWeight: string;
    height: string;
    age: string;
    gender: string | undefined;
    goal: keyof typeof GOAL | undefined;
    pAL: keyof typeof PAL | undefined;
}

export const SummaryWrapper = ({weight, targetWeight, height, age, gender, goal, pAL}:SummaryWrapperProps) => {
    const weightNumber = parseFloat(weight);
    const targetWeightNumber = parseFloat(targetWeight);
    const heightNumber = parseFloat(height);
    const ageNumber = parseFloat(age);
    const goalNumber = parseFloat(goal!);

    const pPM = caloricDemand(gender, weightNumber, heightNumber, ageNumber);
    const cPM = Math.round(parseFloat((pPM * parseFloat(pAL!)).toFixed(2)));
    
    const isWeightHigherThanTargetWeight = targetWeightNumber<weightNumber;

    const calorieToWeight = isWeightHigherThanTargetWeight ? Math.round((cPM*7-goalNumber*7000)/7) : Math.round((cPM*7+goalNumber*7000)/7);
    const quantityCalories = isWeightHigherThanTargetWeight ? Math.round(cPM- calorieToWeight) : Math.round(calorieToWeight-cPM);
    const weightGoal = isWeightHigherThanTargetWeight ? weightNumber-targetWeightNumber : targetWeightNumber- weightNumber;
    const time = Math.round(weightGoal/goalNumber);

    return (
        <WrapSummary>
        <label style={{marginBottom: "3rem", fontSize:"2rem"}}>Podsumowanie</label>
        <div>
          <Summary definition="Cel:" value={weightGoal + " kg"} />
          <Summary definition="Czas na osiągnięcie celu:" value={time + " tygodni"} />
          {isWeightHigherThanTargetWeight ? <Summary definition="Deficyt kaloryczny:" value={quantityCalories + " kcal"} /> : <Summary definition="Nadwyżka kaloryczna: " value={quantityCalories + " kcal"} />}
          <br/>
          <Summary definition="Podstawowa przemiana materii:" value={pPM + " kcal"} />
          <Summary definition="Całkowita przemiana materii:" value={cPM + " kcal"} />
          <br/>
          <MainSummary>
            <label>Dzienna dawka kalorii</label>
            <label style={{fontWeight:800}}>{calorieToWeight}</label>
          </MainSummary>
          <br/>
          <ButtonContainer>
          <Button>
            <StyledLink to={`/all`}>Jestem gotowy na zmianę</StyledLink>
          </Button>
          </ButtonContainer>
        </div>
      </WrapSummary>
    );
  };

const WrapSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 4% 4%;
`;

const MainSummary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 0.5rem;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;