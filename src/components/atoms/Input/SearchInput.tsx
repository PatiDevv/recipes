import styled from 'styled-components';
import magnifierIcon from '../../../images/magnifier.svg';

const SearchInput = styled.input`
  border: none;
  border-radius: 50px;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    letter-spacing: 2px;
    color: #727272;
  }

  padding: 10px 20px 10px 40px;

  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 15px 50%;
`;

export default SearchInput;
