import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

a {
  color: ${({theme}) => theme.colors.white};
  text-decoration: none;
}

p {
  margin: 0;
}

body, html, #root {
  height: 100%;
  width: 100%;
}

#__next {
  height: 100%;
}

body {
  background-color: ${({theme}) => theme.colors.white};
  font-size: 13px;
  font-family: 'Poppins';
  transition: all 0.50s linear;
}

.pointer {
  cursor: pointer
}

`;