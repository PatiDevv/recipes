import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface RadioInputProps {
  setSelectedRadioBtn: React.Dispatch<React.SetStateAction<string>>;
  selectedRadioBtn: string;
  label: string;
  label2: string;
}

export const RadioInput = ({ label, label2, selectedRadioBtn, setSelectedRadioBtn }: RadioInputProps) => {
  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value);

  return (
    <>
      <Label>
        <Input type="radio" name="radio" value={label} checked={isRadioSelected(label)} onChange={handleRadioClick} />
        <H5>{label}</H5>
      </Label>
      <Label>
        <Input type="radio" name="radio" value={label2} checked={isRadioSelected(label2)} onChange={handleRadioClick} />
        <H5>{label2}</H5>
      </Label>
    </>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  margin:0;
  padding:0;
  width: auto;
`;

const Input = styled.input`
cursor: pointer;
/* Add if not using autoprefixer */
-webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0 1rem 0 0;

  font: inherit;
  color: ${({ theme }) => theme.colors.lightGreen};
  width: 1em;
  height: 1em;
  border: 0.13em solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 50%;
  //transform: translateY(-0.075em);

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
    /* Windows High Contrast Mode */
    background-color: ${({ theme }) => theme.colors.lightGreen};
  } 
`;

const H5 = styled.h5`
margin:0;`;


