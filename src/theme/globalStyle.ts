import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body{
    font-size: 20px;
    color: #1C2025;
    font-family: 'Neuton', serif;
    margin: 0;
    padding: 0;
    @import url("https://fonts.googleapis.com/css2?family=Neuton:wght@200;300;400;700;800&display=swap");
}
`;

export default GlobalSyle;
