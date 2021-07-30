import { createGlobalStyle } from 'styled-components';

const GlobalSyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body{
    font-size: 20px;
    color: #fff;
    font-family: 'Neuton', serif;
    margin: 0;
    padding: 0;

}
`;

export default GlobalSyle;
