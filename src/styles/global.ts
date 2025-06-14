import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

    :focus {
      outline: 0;
      box-shadow: 0 0 0 1px 
    }
  
  body {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-200"]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
  }

  body, input, text-area, button {
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
  `;
