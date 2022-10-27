import { FC } from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';

interface OnboardingPageProps {
  onNavigationPress: (index: number) => void;
  currentIndex: number;
  title?: string;
  subtitle?: string;
  question?: string;
  isBackButtonDisabled?: boolean;
  nextTitle?: string;
}

const OnboardingWrapper: FC<OnboardingPageProps> = ({ nextTitle, onNavigationPress, currentIndex, subtitle, title, question, isBackButtonDisabled = false, children }) => {
  return (
    <Wrap>
      <WrapTitle>
        {!!title && <H1>{title}</H1>}
        {!!question && <H2>{question}</H2>}
        {!!subtitle && <H3>{subtitle}</H3>}
       {!!children && <div style={{ margin: `15% 1rem 1rem 1rem`, alignSelf: 'center' }}>{children}</div>}
      </WrapTitle>
      <RowCenter>
        {isBackButtonDisabled !== true && <OnboardingButton onPress={() => onNavigationPress(currentIndex - 1)} title="Back" />}
        <OnboardingButton onPress={() => onNavigationPress(currentIndex + 1)} title={!!nextTitle ? nextTitle : 'Next'} />
      </RowCenter>
    </Wrap>
  );
};

export default OnboardingWrapper;

interface OnboardingButtonProps {
  onPress: () => void;
  title: string;
}

const OnboardingButton = ({ onPress, title }: OnboardingButtonProps) => {
  return <Buttonn onClick={onPress}>{title}</Buttonn>;
};

const H1 = styled.h1`
  color: #000;
  padding: 0;
  text-align: center;
  font-weight: 400;
  margin: 0 10%;
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  text-align: center;
  
  font-weight: 400;
`;

const H3 = styled.h3`
  text-align: center;
  padding: 2em;
  font-weight: 400;
`;

const WrapTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: -2rem;
`;

const Buttonn = styled(Button)`
  background-color: #60cf98;
  padding: 10px 50px;

  display: flex;
  align-self: center;

  width: 160px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 7% 0;
`;

const RowCenter = styled.div`
  display: flex;
  justify-content: center;
`;
