import { FC } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../components/atoms/Button/Button';

interface OnboardingPageProps {
  onNavigationPress: (index: number) => void;
  currentIndex: number;
  title?: string;
  subtitle?: string;
  question?: string;
  isBackButtonDisabled?: boolean;
  nextTitle?: string;
  isSummary?: boolean;
}

const OnboardingWrapper: FC<OnboardingPageProps> = ({ nextTitle, onNavigationPress, currentIndex, subtitle, title, question, isBackButtonDisabled = false, children, isSummary }) => {
  return (
    <Wrap>
      <div>
        {!!title && <H1>{title}</H1>}
        {!!question && <H2>{question}</H2>}
        {!!subtitle && <H3>{subtitle}</H3>}
      </div>
        {!!children && <WrapChildren isSummary={isSummary}>{children}</WrapChildren>}
      <RowCenter>
        {isBackButtonDisabled !== true && <OnboardingButton onPress={() => onNavigationPress(currentIndex - 1)} title="Wróć" />}
        <OnboardingButton onPress={() => onNavigationPress(currentIndex + 1)} title={!!nextTitle ? nextTitle : 'Dalej'} />
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
  margin: 5% 10%;
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGreen};
`;

const H3 = styled.h3`
  text-align: center;
  padding: 2em;
  font-weight: 400;
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
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 4% 0;
`;

const RowCenter = styled.div`
  display: flex;
  justify-content: center;
`;

 interface isSummary {
  isSummary?: boolean;
}

const WrapChildren = styled.div<isSummary>`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  padding: 2.5rem;
  border-radius: 1rem;
  min-width: 25rem;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isSummary }) =>
    isSummary &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;
