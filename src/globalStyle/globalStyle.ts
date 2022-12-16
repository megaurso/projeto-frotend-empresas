import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary1: #27AE60;
        --color-primary2: #93D7AF;
        --color-primary3: rgba(39,174,96,0.2);
        --color-red: #EB5757;
        --color-gray1: #333333;
        --color-gray2: #828282;
        --color-gray3: #E0E0E0;
        --color-gray4: #F5F5F5;
        --color-white:#fff;

        --font-size1: 2rem;
        --font-size2: 1.375rem;
        --font-size3: 1.125rem;
        --font-size4: 1rem;
        --font-size5: 0.875rem;
        --font-size6: 0.75rem;
    }

    body {

  margin: 0 ;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-white);
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
`