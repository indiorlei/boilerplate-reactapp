import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 16px;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyles;
