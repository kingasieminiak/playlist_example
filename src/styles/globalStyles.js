import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    overflow-x: hidden;
  }

  button,
  a {
    touch-action: manipulation;
    font-size: .85rem;
    color: ${colors.primary};
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
