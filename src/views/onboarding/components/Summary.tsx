import styled from 'styled-components';

interface SummaryProp {
  definition: string;
  value: string | number | undefined;
}

export const Summary = ({ definition, value }: SummaryProp) => {
  return (<Label> <H5>{definition}</H5> <H5 style={{fontWeight:800}}>{value}</H5></Label>
   
    
  );
};

const H5 = styled.h5`
  padding: 0;
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0 0.2rem;
`;

const Label = styled.label`
  display:flex;
`;
