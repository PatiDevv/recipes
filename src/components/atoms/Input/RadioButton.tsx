import React from 'react';
import styled from 'styled-components';

type Props = {
  onValueChange: (value: string) => void;
  value?: string;
  children: React.ReactNode;
};

type RadioButtonContextType = {
  value?: string;
  onValueChange: (item: string) => void;
};

const RadioButtonContext = React.createContext<RadioButtonContextType>(
  null as any
);

const RadioButtonGroup = ({ value, onValueChange, children }: Props) => (
  <RadioButtonContext.Provider value={{ value, onValueChange }}>
    <div>{children}</div>
  </RadioButtonContext.Provider>
);

interface RadioButtonProps {
  onPress?: () => void
  isChecked?: boolean
  value: string
  label: string
}

const RadioButtonComponent = ({ value, onPress, isChecked, label }: RadioButtonProps) => {

  return (
    <RadioButtonContext.Consumer>
      {(context) => {
        const checked = context !== undefined ? context.value === value : isChecked

        const handlePress = () => {
          if (!!onPress && !!context.onValueChange) {
            console.warn(
              `onPress in the scope of RadioButtonGroup will not be executed, use onValueChange instead`
            );
          }
          context.onValueChange ? context.onValueChange(value) : onPress?.();
        }

        return (
          <Label >
            <Input type="radio" value={label} checked={checked} onChange={handlePress} />
            <H5>{label}</H5>
          </Label>
        )
      }}
    </RadioButtonContext.Consumer>
  )
}


  export const RadioButton = Object.assign(
    RadioButtonComponent,
    {
      Group: RadioButtonGroup,
      Item: RadioButtonComponent,
    }
  );

const Label = styled.label`
  display: flex;
  align-items: center;
  margin:0;
  padding:0;
`;

const Input = styled.input`
cursor: pointer;
-webkit-appearance: none;
  appearance: none;
  background-color: var(--form-background);
  margin: 0 1rem 0 0;

  font: inherit;
  color: ${({ theme }) => theme.colors.lightGreen};
  width: 1em;
  height: 1em;
  border: 0.13em solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 50%;

  display: grid;
  place-content: center;

  &:checked::before {
    transform: scale(1);
  } 

  &::before {
    content: "";
    width: 0.45em;
    height: 0.45em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: ${({ theme }) => theme.colors.lightGreen};
  } 
`;


const H5 = styled.h5`
  margin:0.25rem 1rem 0.25rem 0;
  font-weight: 400;
  max-width:22rem;
`;


