import styled from 'styled-components';

interface SummaryProp {
  definition: string;
  value: string;
}

export const Summary = ({ definition, value }: SummaryProp) => {
  return (
    <H5>
      {definition} {value}
    </H5>
  );
};

const H5 = styled.h5`
  align-self: flex-start;
  padding: 0.4em;
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0 0 0 2rem;
`;
