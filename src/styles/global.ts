import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 60%;

    --white: #ffffff;

    --red: #c53030;

    --orange: #ff9000;

    --gray-100: '#E1E1E6';
    --gray-300: '#C4C4CC';
    --gray-400: '#8D8D99';
    --gray-500: '#7C7C8A';
    --gray-600: '#323238';
    --gray-700: '#29292E';
    --gray-800: '#202024';
    --gray-900: '#121214';
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--gray-850);

    font-family: Arial, Helvetica, sans-serif;
    color: var(--white);

    -webkit-font-smoothing: antialiased;

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }
`;